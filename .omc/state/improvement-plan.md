# DSM-Repo 개선 계획 (Improvement Plan)

**프로젝트**: Resume Management Platform for School (학교용 이력서 관리 플랫폼)
**작성일**: 2026-02-03
**범위**: 코드 품질, 보안, 아키텍처, 인프라 개선 (UI/UX 제외)

---

## 목차 (Table of Contents)

1. [실행 요약](#실행-요약)
2. [단계별 개선 계획](#단계별-개선-계획)
   - [Phase 0: 긴급 대응 (Critical Hotfix)](#phase-0-긴급-대응-critical-hotfix)
   - [Phase 1: 기초 안정화 (Foundation Stabilization)](#phase-1-기초-안정화-foundation-stabilization)
   - [Phase 2: 보안 강화 (Security Hardening)](#phase-2-보안-강화-security-hardening)
   - [Phase 3: 품질 개선 (Quality Improvement)](#phase-3-품질-개선-quality-improvement)
   - [Phase 4: 운영 효율화 (Operational Excellence)](#phase-4-운영-효율화-operational-excellence)
5. [상세 이슈 목록](#상세-이슈-목록)
6. [예상 타임라인](#예상-타임라인)
7. [성공 기준](#성공-기준)

---

## 실행 요약

**현황**: DSM-Repo는 핵심 기능은 구현되어 있으나, 프로덕션 배포 전 반드시 해결해야 할 심각한 문제들이 존재합니다.

**주요 문제**:
- **CRITICAL** (5개): 런타임 에러 발생 가능, XSS/token 탈취 취약점, 메모리 누수
- **HIGH** (8개): 타입 안정성 부족, 데이터 무결성 위험
- **MEDIUM** (11개): 유지보수성, 개발 생산성, 성능 문제

**투자 규모**: 약 80-100 인시간
**우선순위**: Phase 0 → Phase 1 → Phase 2 → Phase 3 → Phase 4

---

## 단계별 개선 계획

### Phase 0: 긴급 대응 (Critical Hotfix)

**목표**: 런타임 에러 및 즉각적인 보안 위험 제거
**예상 기간**: 2-3일
**우선순위**: 🔴 CRITICAL - 즉시 수행 필요

#### [P0-01] React Router 버전 충돌 해결

**문제**: `util-config`는 react-router-dom v7을 사용하지만, 다른 모든 패키지는 v6을 사용 중
- 런타임 에러 발생 가능성 높음
- 타입 불일치로 인한 예측 불가능한 동작

**해결책**:
```bash
# util-config/package.json 수정
- "react-router-dom": "^7.0.0"
+ "react-router-dom": "^6.x.x" (다른 패키지와 동일 버전 사용)

# @types/react-router-dom도 동일하게 v6 대응 버전으로 맞추기
```

**검증**:
- 모든 패키지의 `package.json` 확인
- `yarn install` 후 빌드 성공 확인
- 런타임 테스트 (라우터 네비게이션 동작)

**담당자**: [Executor-High]
**예상 소요**: 1시간

---

#### [P0-02] 쿠키 보안 플래그 추가

**문제**: 접근 토큰(access token)과 갱신 토큰(refresh token)이 httpOnly, secure, sameSite 플래그 없이 저장됨
- 클라이언트 JavaScript에서 직접 접근 가능 → XSS 공격 시 토큰 탈취 가능
- CSRF 공격에 취약함

**영향받는 파일**:
- `packages/student/src/api/index.ts`
- `packages/teacher/src/apis/index.ts`
- 그 외 API 초기화 코드

**해결책**:
```typescript
// 토큰 저장 시 쿠키 옵션 설정
axios.interceptors.response.use(
  (response) => {
    if (response.data.accessToken) {
      // 쿠키에 저장 (httpOnly는 백엔드에서 설정)
      // 또는 secure, sameSite 옵션 추가
      document.cookie = `accessToken=${response.data.accessToken};
        Path=/;
        Secure;
        SameSite=Strict;
        HttpOnly`;
    }
    return response;
  }
);
```

**백엔드 요구사항**:
- Set-Cookie 헤더에 HttpOnly, Secure, SameSite=Strict 플래그 추가
- CORS 설정: credentials: 'include' 지원

**검증**:
- 브라우저 DevTools에서 쿠키 HttpOnly 플래그 확인
- XSS 공격 시뮬레이션으로 토큰 접근 불가 확인

**담당자**: [Executor-High, Security-Reviewer]
**예상 소요**: 2시간

---

#### [P0-03] 토큰 갱신 경합 조건(Race Condition) 해결

**문제**: 단순 boolean 잠금 메커니즘, setInterval 미정리(메모리 누수), 임의의 타임아웃
- 여러 API 요청이 동시에 토큰 갱신 시도
- 타이머가 정리되지 않아 메모리 누수
- 갱신 실패 시 무한 재시도 가능

**영향받는 파일**:
- `packages/student/src/api/index.ts` (토큰 갱신 로직)
- `packages/teacher/src/apis/index.ts`

**해결책**:
```typescript
// 토큰 갱신 상태 관리 개선
class TokenManager {
  private refreshPromise: Promise<string> | null = null;
  private maxRetries = 3;
  private retryCount = 0;

  async refreshToken(): Promise<string> {
    // 이미 갱신 중이면 기존 Promise 반환 (중복 요청 방지)
    if (this.refreshPromise) {
      return this.refreshPromise;
    }

    this.refreshPromise = this.performRefresh()
      .catch((error) => {
        if (this.retryCount < this.maxRetries) {
          this.retryCount++;
          return this.refreshToken(); // 재귀 호출
        }
        throw error; // 모든 재시도 실패
      })
      .finally(() => {
        this.refreshPromise = null;
        this.retryCount = 0;
      });

    return this.refreshPromise;
  }

  private async performRefresh(): Promise<string> {
    const response = await axios.post('/auth/refresh');
    return response.data.accessToken;
  }
}
```

**검증**:
- 동시 요청 시뮬레이션 (Promise.all로 여러 API 호출)
- 메모리 누수 확인 (Chrome DevTools Memory profiler)
- 갱신 실패 시 재시도 동작 확인

**담당자**: [Executor-High, Architect]
**예상 소요**: 3시간

---

#### [P0-04] 프로덕션 콘솔 로그 제거

**문제**: API 기본 URL이 브라우저 콘솔에 노출
- 민감한 서버 정보 공개
- 디버깅 정보를 통한 공격 방향성 제공

**영향받는 파일**:
- `packages/student/src/api/index.ts`
- `packages/teacher/src/apis/index.ts`
- 기타 모든 `console.log` 호출

**해결책**:
```typescript
// 환경 변수로 제어
const isDevelopment = import.meta.env.DEV;

if (isDevelopment) {
  console.log('API Base URL:', baseURL);
}

// 또는 logger 라이브러리 사용
import { createLogger } from '@/utils/logger';
const logger = createLogger('api');
logger.debug('API initialized', { baseURL });
```

**검증**:
- 프로덕션 빌드 후 DevTools에서 콘솔 확인 (로그 없음)
- 개발 환경에서만 로그 표시

**담당자**: [Executor]
**예상 소요**: 1시간

---

### Phase 1: 기초 안정화 (Foundation Stabilization)

**목표**: 타입 안전성, 코드 일관성, 개발 도구 확립
**예상 기간**: 4-5일
**선행 조건**: Phase 0 완료

#### [P1-01] TypeScript Strict Mode 활성화

**문제**: `util-config`와 UI 패키지가 strict 모드 없음
- `any` 타입 남용 (8개 위반)
- 타입 체크 부족으로 인한 런타임 에러 가능성

**현재 상태**:
```json
// util-config/tsconfig.json
{
  "compilerOptions": {
    "strict": false  // 또는 생략
  }
}
```

**해결책**:
```json
// 모든 tsconfig.json에 추가
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "exactOptionalPropertyTypes": true
  }
}
```

**단계별 수행**:
1. 각 패키지별 strict 모드 활성화
2. 타입 에러 정리 (any 제거, 타입 명시)
3. eslint 설정으로 자동화

**영향받는 파일**:
- `configs/util-config/tsconfig.json`
- `packages/ui/tsconfig.json`
- `packages/student/tsconfig.json`
- `packages/teacher/tsconfig.json`
- `packages/main/tsconfig.json`

**검증**:
- `yarn tsc --noEmit` 모든 워크스페이스에서 에러 없음
- 타입 카버리지 100% 달성

**담당자**: [Executor-High, Code-Reviewer]
**예상 소요**: 8시간

---

#### [P1-02] 불변성 패턴 규칙화 (Immutability Rules)

**문제**: 16개 이상의 배열 뮤테이션 위반
- `.push()`, `.sort()`, `.splice()` 직접 사용
- React 상태 업데이트 오류 가능성
- 버그 추적 어려움

**예시 위반**:
```typescript
// WRONG
const items = [...state.items];
items.push(newItem); // 뮤테이션!
setState(items);

// CORRECT
setState([...state.items, newItem]);
```

**해결책**:
1. ESLint 규칙 추가: `no-mutating-methods`
2. 모든 배열 뮤테이션을 불변 패턴으로 변경
3. 유틸리티 함수 제공

```typescript
// utils/immutable.ts
export const arrayAdd = <T>(arr: T[], item: T): T[] => [...arr, item];
export const arrayRemove = <T>(arr: T[], index: number): T[] =>
  arr.filter((_, i) => i !== index);
export const arrayUpdate = <T>(arr: T[], index: number, item: T): T[] =>
  arr.map((v, i) => i === index ? item : v);
export const arraySort = <T>(arr: T[], compareFn: (a: T, b: T) => number): T[] =>
  [...arr].sort(compareFn);
```

**영향받는 파일**:
- `packages/student/src/**/*.ts(x)` (위반 12개)
- `packages/teacher/src/**/*.ts(x)` (위반 4개)

**검증**:
- ESLint 통과
- 단위 테스트로 상태 변경 검증
- React DevTools Profiler에서 리렌더링 최적화 확인

**담당자**: [Executor-High, Code-Reviewer]
**예상 소요**: 10시간

---

#### [P1-03] typeRoots 설정 수정

**문제**: `typeRoots`가 파일을 가리키고 있음 (디렉토리를 가리켜야 함)
- 타입 선언 로드 실패 가능
- 타입 에러 발생

**현재 설정**:
```json
// 잘못된 설정
"typeRoots": ["./node_modules/@types/types-config"]
```

**수정**:
```json
// 올바른 설정
"typeRoots": ["./node_modules/@types", "./../../configs/types-config/src"]
```

**영향받는 파일**:
- 모든 `tsconfig.json`

**검증**:
- `yarn tsc --noEmit` 타입 에러 없음
- IDE에서 타입 힌트 정상 작동

**담당자**: [Executor]
**예상 소요**: 1시간

---

#### [P1-04] 의존성 버전 일관성 확보

**문제**: 패키지 간 react, react-dom, @types/react 버전 불일치
- 런타임 호환성 문제
- 타입 불일치

**현재 상태**:
```
main package.json: react @18.2.0
student package.json: react @18.2.0
teacher package.json: react @18.2.0
util-config: ???
```

**해결책**:
1. 루트 `package.json`에서 workspace 의존성 버전 명시
2. 각 서브패키지에서 `*` 또는 `^` 사용으로 통일

```json
// root package.json에서 peerDependencies 명시
{
  "workspaces": {
    "packages": ["packages/*", "configs/*"],
    "nohoist": [
      "**/react",
      "**/react-dom",
      "**/typescript"
    ]
  }
}
```

**검증**:
- `yarn dedupe` 실행하여 중복 제거
- `yarn install` 후 lock 파일 일관성 확인

**담당자**: [Executor]
**예상 소요**: 2시간

---

#### [P1-05] checkOverflow.ts 리팩토링

**문제**: 3개의 거의 동일한 블록, 변수 shadow, 잠재적 여백 계산 버그
- 코드 중복
- 유지보수성 낮음

**현재 코드**:
```typescript
// 3개 거의 동일한 블록 반복
const checkOverflow = (element: HTMLElement) => {
  const element1 = element.querySelector('.class1') as HTMLElement;
  if (element1) {
    const elementMargin = parseInt(getComputedStyle(element1).margin);
    // ... 동일 로직
  }
}
```

**해결책**:
```typescript
const checkOverflow = (element: HTMLElement, selectors: string[]): void => {
  selectors.forEach((selector) => {
    const targetElement = element.querySelector(selector) as HTMLElement | null;
    if (!targetElement) return;

    const margin = parseMargin(targetElement);
    const isOverflowing = targetElement.scrollHeight > targetElement.clientHeight;

    if (isOverflowing) {
      targetElement.style.height = `${targetElement.clientHeight - margin}px`;
    }
  });
};

const parseMargin = (element: HTMLElement): number => {
  const marginStr = getComputedStyle(element).margin;
  return parseInt(marginStr) || 0;
};
```

**검증**:
- 모든 선택자에서 올바른 높이 계산 확인
- 엣지 케이스 테스트 (no margin, large margin)

**담당자**: [Executor]
**예상 소요**: 2시간

---

### Phase 2: 보안 강화 (Security Hardening)

**목표**: OWASP Top 10 대응, 데이터 보호 강화
**예상 기간**: 3-4일
**선행 조건**: Phase 1 완료

#### [P2-01] 파일 업로드 검증 추가

**문제**: 파일 크기/타입 검증 없음
- 무제한 파일 업로드 가능
- 악성 파일 업로드 위험

**영향받는 파일**:
- `packages/student/src/api/file.ts`
- 파일 업로드 관련 컴포넌트

**해결책**:
```typescript
interface FileValidationConfig {
  maxSize: number; // bytes
  allowedTypes: string[];
  allowedExtensions: string[];
}

const DEFAULT_CONFIG: FileValidationConfig = {
  maxSize: 10 * 1024 * 1024, // 10MB
  allowedTypes: ['image/jpeg', 'image/png', 'application/pdf'],
  allowedExtensions: ['jpg', 'jpeg', 'png', 'pdf'],
};

export const validateFile = (
  file: File,
  config: FileValidationConfig = DEFAULT_CONFIG
): { valid: boolean; error?: string } => {
  // 파일 크기 검증
  if (file.size > config.maxSize) {
    return {
      valid: false,
      error: `파일 크기는 ${config.maxSize / 1024 / 1024}MB 이하여야 합니다.`,
    };
  }

  // MIME 타입 검증
  if (!config.allowedTypes.includes(file.type)) {
    return {
      valid: false,
      error: `허용되지 않는 파일 타입입니다. (${config.allowedTypes.join(', ')})`,
    };
  }

  // 확장자 검증
  const extension = file.name.split('.').pop()?.toLowerCase();
  if (!extension || !config.allowedExtensions.includes(extension)) {
    return {
      valid: false,
      error: `허용되지 않는 파일 확장자입니다. (${config.allowedExtensions.join(', ')})`,
    };
  }

  return { valid: true };
};
```

**검증**:
- 큰 파일 업로드 거부 확인
- 잘못된 타입 거부 확인
- 허용 파일만 업로드 성공 확인

**담당자**: [Executor, Security-Reviewer]
**예상 소요**: 3시간

---

#### [P2-02] 에러 메시지 정제

**문제**: 에러 메시지가 서버 상세 정보 노출
- 공격자에게 시스템 정보 제공
- 스택 트레이스 노출

**해결책**:
```typescript
// 에러 메시지 매핑
const ERROR_MESSAGES: Record<string, string> = {
  'ECONNREFUSED': '서버에 연결할 수 없습니다. 잠시 후 다시 시도해주세요.',
  'ENOTFOUND': '서버를 찾을 수 없습니다.',
  'TIMEOUT': '요청 시간이 초과되었습니다.',
  'UNAUTHORIZED': '인증이 필요합니다.',
  'FORBIDDEN': '접근 권한이 없습니다.',
  'NOT_FOUND': '요청한 리소스를 찾을 수 없습니다.',
  'VALIDATION_ERROR': '입력 정보를 다시 확인해주세요.',
  'INTERNAL_SERVER_ERROR': '서버에 오류가 발생했습니다. 관리자에게 문의하세요.',
};

export const getUserFriendlyError = (error: AxiosError): string => {
  const code = error.code || 'INTERNAL_SERVER_ERROR';
  return ERROR_MESSAGES[code] || ERROR_MESSAGES['INTERNAL_SERVER_ERROR'];
};

// 사용
axios.interceptors.response.use(
  null,
  (error: AxiosError) => {
    const userMessage = getUserFriendlyError(error);
    console.error('Full error (dev only):', error); // 개발 환경에서만
    throw new Error(userMessage);
  }
);
```

**검증**:
- 사용자 정보 노출 없음 확인
- 스택 트레이스 비노출 확인

**담당자**: [Executor]
**예상 소요**: 2시간

---

#### [P2-03] CORS 및 CSRF 보호 설정

**문제**: CORS 설정 누락, CSRF 토큰 없음
- 다른 도메인에서의 요청 무제한 수락
- CSRF 공격 취약

**해결책**:

**백엔드 요구**:
```typescript
// (백엔드 구현)
// Express 예시
import cors from 'cors';
import csrf from 'csurf';

const corsOptions = {
  origin: ['https://yourdomain.com', 'https://student.yourdomain.com'],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(csrf({ cookie: { httpOnly: true, secure: true, sameSite: 'strict' } }));

// CSRF 토큰 엔드포인트
app.get('/csrf-token', (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});
```

**프론트엔드**:
```typescript
// CSRF 토큰 가져오기
const csrfToken = await axios.get('/csrf-token').then(r => r.data.csrfToken);

// 모든 요청에 토큰 첨부
axios.interceptors.request.use((config) => {
  config.headers['X-CSRF-Token'] = csrfToken;
  return config;
});
```

**검증**:
- CORS 헤더 확인
- 다른 도메인 요청 차단 확인
- CSRF 토큰 검증

**담당자**: [Executor-High, Security-Reviewer]
**예상 소요**: 4시간

---

#### [P2-04] URL 검증 강화

**문제**: URL 검증이 위험한 프로토콜(javascript:, data:) 차단 안 함
- XSS 공격 가능

**해결책**:
```typescript
export const isValidUrl = (url: string): boolean => {
  try {
    const parsed = new URL(url);

    // 위험한 프로토콜 차단
    const dangerousProtocols = ['javascript:', 'data:', 'vbscript:'];
    if (dangerousProtocols.some(p => parsed.protocol === p)) {
      return false;
    }

    // http/https만 허용
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
};

// 사용
if (!isValidUrl(userProvidedUrl)) {
  throw new Error('Invalid URL');
}
```

**검증**:
- javascript: 프로토콜 차단 확인
- data: 프로토콜 차단 확인
- 유효한 URL 허용 확인

**담당자**: [Executor]
**예상 소요**: 1시간

---

#### [P2-05] Content Security Policy 설정

**문제**: CSP 헤더 없음
- 인라인 스크립트/스타일 취약점

**해결책**:

**백엔드** (응답 헤더 추가):
```typescript
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; " +
    "script-src 'self' 'wasm-unsafe-eval'; " + // Vite wasm 지원
    "style-src 'self' 'unsafe-inline'; " + // Tailwind (필요시 'unsafe-inline' 제거 가능)
    "img-src 'self' data: https:; " +
    "font-src 'self' data:; " +
    "connect-src 'self' https://api.yourdomain.com; " +
    "frame-ancestors 'none'; " +
    "upgrade-insecure-requests;"
  );
  next();
});
```

**검증**:
- CSP 헤더 확인
- DevTools에서 CSP 위반 없음
- 모든 기능 정상 작동

**담당자**: [Executor, Security-Reviewer]
**예상 소요**: 2시간

---

#### [P2-06] Rate Limiting (로그인 엔드포인트)

**문제**: Rate limiting 없음
- 브루트 포스 공격 취약

**해결책** (백엔드):
```typescript
import rateLimit from 'express-rate-limit';

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15분
  max: 5, // 5회 시도
  message: '로그인 시도 횟수를 초과했습니다. 15분 후 다시 시도하세요.',
  standardHeaders: true,
  legacyHeaders: false,
});

app.post('/auth/login', loginLimiter, (req, res) => {
  // 로그인 로직
});
```

**검증**:
- 5회 초과 요청 차단 확인
- 시간 경과 후 풀림 확인

**담당자**: [Executor]
**예상 소요**: 1시간

---

### Phase 3: 품질 개선 (Quality Improvement)

**목표**: 테스트 커버리지 확보, 개발 도구 자동화, 코드 스타일 통일
**예상 기간**: 5-7일
**선행 조건**: Phase 2 완료

#### [P3-01] 테스트 인프라 구축

**현황**: 테스트 파일 없음, 테스트 프레임워크 미설정

**해결책**:

1. **테스트 프레임워크 설치**:
```bash
yarn add -D vitest @vitest/ui @testing-library/react @testing-library/jest-dom
```

2. **vitest.config.ts 추가**:
```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'dist/'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

3. **vitest.setup.ts**:
```typescript
import '@testing-library/jest-dom';
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

afterEach(() => {
  cleanup();
});
```

4. **package.json scripts**:
```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

**대상 패키지**:
- `packages/student`
- `packages/teacher`
- `configs/util-config`
- `packages/ui`

**검증**:
- 테스트 실행 성공
- UI 접근 가능

**담당자**: [Executor]
**예상 소요**: 3시간

---

#### [P3-02] 핵심 기능 단위 테스트 작성

**목표**: 80% 커버리지 달성
**우선순위**:
1. API 호출 (`packages/student/src/api/`, `packages/teacher/src/apis/`)
2. 유틸리티 함수 (`configs/util-config/`)
3. React Hook (`configs/util-config/src/hooks/`)
4. 상태 관리 (Zustand stores)

**예시 테스트**:
```typescript
// api.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest';
import axios from 'axios';
import { getResumes, createResume } from './api';

vi.mock('axios');
const mockedAxios = vi.mocked(axios);

describe('Resume API', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should fetch resumes successfully', async () => {
    const mockData = [{ id: '1', title: 'Resume 1' }];
    mockedAxios.get.mockResolvedValue({ data: mockData });

    const result = await getResumes();
    expect(result).toEqual(mockData);
    expect(mockedAxios.get).toHaveBeenCalledWith('/resumes');
  });

  it('should handle API errors', async () => {
    mockedAxios.get.mockRejectedValue(new Error('API Error'));

    await expect(getResumes()).rejects.toThrow('API Error');
  });
});
```

**검증**:
- 각 API 모듈별 커버리지 80% 이상
- 모든 테스트 통과

**담당자**: [Executor, TDD-Guide]
**예상 소요**: 12시간

---

#### [P3-03] ESLint & Prettier 설정

**문제**: 코드 스타일 규칙 없음
- 일관성 부족

**해결책**:

1. **ESLint 설치**:
```bash
yarn add -D eslint @eslint/js @types/eslint typescript-eslint
```

2. **eslint.config.js** (루트):
```javascript
import js from '@eslint/js';
import ts from 'typescript-eslint';
import react from 'eslint-plugin-react';

export default [
  {
    ignores: ['dist/**', 'node_modules/**', '.vite/**'],
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    plugins: {
      react,
    },
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      'react/no-direct-mutation-state': 'error',
      'no-mutating-methods': 'error', // 커스텀 규칙
    },
  },
];
```

3. **.prettierrc.json**:
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "arrowParens": "always"
}
```

4. **package.json scripts**:
```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write ."
  }
}
```

**적용 대상**: 모든 패키지

**검증**:
- `yarn lint` 에러 없음
- `yarn format` 일관성 확인

**담당자**: [Executor]
**예상 소요**: 3시간

---

#### [P3-04] husky & lint-staged 설정

**목표**: 커밋 전 자동 검사

**해결책**:
```bash
yarn add -D husky lint-staged
yarn husky install
```

**.husky/pre-commit**:
```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

**package.json**:
```json
{
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{js,jsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

**검증**:
- 커밋 시 자동 포맷/린트 확인

**담당자**: [Executor]
**예상 소요**: 1시간

---

#### [P3-05] 매직 넘버(Magic Numbers) 제거

**문제**: 하드코딩된 숫자 값 16개 이상
- 유지보수성 낮음
- 의도 불명확

**예시**:
```typescript
// WRONG
setTimeout(() => {}, 1000); // 왜 1000?
const maxRetries = 3; // 어디서 왔는가?

// CORRECT
const ANIMATION_DELAY_MS = 1000;
const TOKEN_REFRESH_TIMEOUT_MS = 5 * 60 * 1000; // 5분
const MAX_TOKEN_REFRESH_RETRIES = 3;

setTimeout(() => {}, ANIMATION_DELAY_MS);
```

**해결책**:
1. `constants/` 디렉토리 생성
2. 모든 매직 넘버 상수로 추출
3. ESLint로 규칙화

**constants/index.ts**:
```typescript
// 타임아웃
export const TIMEOUTS = {
  ANIMATION: 300,
  API_REQUEST: 30000, // 30초
  TOKEN_REFRESH: 5 * 60 * 1000, // 5분
  DEBOUNCE: 300,
} as const;

// 크기 제한
export const LIMITS = {
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  MAX_TOKEN_REFRESH_RETRIES: 3,
  MAX_LOGIN_ATTEMPTS: 5,
} as const;

// API
export const API = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  TIMEOUT: 30000,
} as const;
```

**검증**:
- 모든 하드코딩 숫자를 상수로 대체
- 일관성 확인

**담당자**: [Executor, Code-Reviewer]
**예상 소요**: 4시간

---

#### [P3-06] React 컴포넌트 직접 DOM 조작 제거

**문제**: React 컴포넌트에서 `document.querySelector` 사용
- React의 선언적 패러다임 위반
- 버그 증가 위험

**예시**:
```typescript
// WRONG
useEffect(() => {
  const element = document.querySelector('.my-element');
  if (element) {
    element.style.color = 'red';
  }
}, []);

// CORRECT
const elementRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (elementRef.current) {
    elementRef.current.style.color = 'red';
  }
}, []);

return <div ref={elementRef} className="my-element" />;
```

**영향받는 파일**:
- `checkOverflow.ts` (이미 P1에서 처리)
- 기타 컴포넌트

**검증**:
- 모든 `document.*` 호출을 `ref`로 변경
- 기능 정상 작동

**담당자**: [Executor]
**예상 소요**: 3시간

---

#### [P3-07] @ts-ignore 제거 (Vite 경로 설정 수정)

**문제**: Vite 설정에서 `@ts-ignore` 사용
- 타입 안전성 우회

**현재**:
```typescript
// vite.config.ts
// @ts-ignore
import react from '@vitejs/plugin-react';
```

**해결책**:
```typescript
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

**검증**:
- Vite 빌드 성공
- 타입 에러 없음

**담당자**: [Executor]
**예상 소요**: 1시간

---

### Phase 4: 운영 효율화 (Operational Excellence)

**목표**: CI/CD 파이프라인, 배포 자동화, 모니터링
**예상 기간**: 4-5일
**선행 조건**: Phase 3 완료

#### [P4-01] GitHub Actions CI/CD 파이프라인

**목표**: 자동화된 빌드, 테스트, 배포

**파일**: `.github/workflows/ci.yml`

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x, 20.x]

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'yarn'

      - name: Install dependencies
        run: yarn install --frozen-lockfile

      - name: Run linter
        run: yarn lint

      - name: Run tests
        run: yarn test:coverage

      - name: Build
        run: yarn build

      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/coverage-final.json

  security:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Run security audit
        run: yarn audit --audit-level moderate

  type-check:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20.x
          cache: 'yarn'

      - name: Install dependencies
        run: yarn install --frozen-lockfile

      - name: TypeScript check
        run: yarn tsc --noEmit
```

**검증**:
- 푸시 시 자동 실행
- 모든 체크 통과 확인

**담당자**: [Executor]
**예상 소요**: 3시간

---

#### [P4-02] 환경 변수 관리 정규화

**문제**: `.env` 파일 구조 비표준
- 환경별 설정 혼동

**해결책**:

**루트**.env.example`:
```env
# API Configuration
VITE_API_URL=http://localhost:3000
VITE_API_TIMEOUT=30000

# Auth
VITE_TOKEN_REFRESH_INTERVAL=5m

# Features
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_ERROR_REPORTING=true
```

**배포 환경별**:
- `.env.development` (로컬)
- `.env.staging` (스테이징)
- `.env.production` (프로덕션)

**각 패키지 .env.example**:
```env
# student/.env.example
VITE_API_URL=
VITE_ENABLE_STUDENT_ANALYTICS=true
```

**gitignore** (모든 `.env` 파일 추가):
```
.env
.env.local
.env.*.local
```

**검증**:
- `.env.example` 설정 명확
- 배포 환경별 설정 분리

**담당자**: [Executor]
**예상 소요**: 1시간

---

#### [P4-03] Docker 빌드 최적화

**현황**: Dockerfile 존재하지만 최적화 부족

**해결책**: 멀티 스테이지 빌드

```dockerfile
# Dockerfile (student/teacher 패키지)

# Stage 1: Dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production=true

# Stage 2: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

# Stage 3: Runtime
FROM node:20-alpine AS runtime
WORKDIR /app

# 보안: 루트 사용자 제거
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

USER nodejs

EXPOSE 5173
CMD ["yarn", "dev"]
```

**검증**:
- 빌드 성공
- 이미지 크기 감소 확인 (멀티 스테이지 이전과 비교)

**담당자**: [Executor]
**예상 소요**: 2시간

---

#### [P4-04] 애플리케이션 에러 모니터링 (Sentry)

**목표**: 프로덕션 에러 추적

**설정**:
```bash
yarn add @sentry/react @sentry/tracing
```

**main.tsx**:
```typescript
import * as Sentry from '@sentry/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  environment: import.meta.env.MODE,
  tracesSampleRate: import.meta.env.PROD ? 0.1 : 1.0,
  integrations: [
    new Sentry.Replay({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

const SentryApp = Sentry.withProfiler(App);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SentryApp />
  </React.StrictMode>
);
```

**에러 핸들링**:
```typescript
axios.interceptors.response.use(
  null,
  (error: AxiosError) => {
    Sentry.captureException(error);
    const userMessage = getUserFriendlyError(error);
    throw new Error(userMessage);
  }
);
```

**검증**:
- 에러 발생 시 Sentry 대시보드에 전송 확인

**담당자**: [Executor]
**예상 소요**: 2시간

---

#### [P4-05] 성능 모니터링 (Web Vitals)

**목표**: Core Web Vitals 추적

```typescript
// vitals.ts
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';
import * as Sentry from '@sentry/react';

export const trackWebVitals = () => {
  onCLS((metric) => {
    Sentry.captureMessage(`CLS: ${metric.value}`, 'info', {
      tags: { webVital: 'CLS' },
      measurements: { 'cls': { value: metric.value } },
    });
  });

  onFID((metric) => {
    Sentry.captureMessage(`FID: ${metric.value}ms`, 'info', {
      tags: { webVital: 'FID' },
      measurements: { 'fid': { value: metric.value } },
    });
  });

  onFCP((metric) => {
    Sentry.captureMessage(`FCP: ${metric.value}ms`, 'info', {
      tags: { webVital: 'FCP' },
      measurements: { 'fcp': { value: metric.value } },
    });
  });

  onLCP((metric) => {
    Sentry.captureMessage(`LCP: ${metric.value}ms`, 'info', {
      tags: { webVital: 'LCP' },
      measurements: { 'lcp': { value: metric.value } },
    });
  });

  onTTFB((metric) => {
    Sentry.captureMessage(`TTFB: ${metric.value}ms`, 'info', {
      tags: { webVital: 'TTFB' },
      measurements: { 'ttfb': { value: metric.value } },
    });
  });
};

// main.tsx에서 호출
trackWebVitals();
```

**검증**:
- Web Vitals 메트릭 수집 확인

**담당자**: [Executor]
**예상 소요**: 2시간

---

#### [P4-06] 의존성 자동 업데이트 (Dependabot)

**파일**: `.github/dependabot.yml`

```yaml
version: 2
updates:
  - package-ecosystem: 'npm'
    directory: '/'
    schedule:
      interval: 'weekly'
      day: 'monday'
      time: '03:00'
    open-pull-requests-limit: 5
    reviewers:
      - 'your-github-username'
    labels:
      - 'dependencies'
    commit-message:
      prefix: 'chore: '
      prefix-development: 'chore(dev): '
```

**검증**:
- 주단위 자동 업데이트 PR 생성 확인

**담당자**: [Executor]
**예상 소요**: 1시간

---

#### [P4-07] 압축 활성화 (Gzip/Brotli)

**문제**: student/teacher 빌드 압축 없음

**해결책**: Vite 플러그인 추가

```bash
yarn add -D vite-plugin-compression
```

**vite.config.ts**:
```typescript
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    compression({
      verbose: true,
      disable: false,
      threshold: 10240, // 10KB 이상만 압축
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
});
```

**검증**:
- 빌드 후 `.gz` 파일 생성 확인
- 크기 감소 확인

**담당자**: [Executor]
**예상 소요**: 1시간

---

---

## 상세 이슈 목록

### CRITICAL Issues

| ID | 이슈 | 영향도 | Phase | 우선순위 |
|---|---|---|---|---|
| P0-01 | React Router 버전 충돌 (v7 vs v6) | 높음 | Phase 0 | 🔴 Critical |
| P0-02 | 쿠키 보안 플래그 미설정 (httpOnly, secure, sameSite) | 높음 | Phase 0 | 🔴 Critical |
| P0-03 | 토큰 갱신 경합 조건 + 메모리 누수 | 높음 | Phase 0 | 🔴 Critical |
| P0-04 | 프로덕션 콘솔 로그 노출 | 중간 | Phase 0 | 🔴 Critical |

### HIGH Issues

| ID | 이슈 | 영향도 | Phase | 우선순위 |
|---|---|---|---|---|
| P1-01 | TypeScript Strict Mode 미활성화 | 높음 | Phase 1 | 🔴 High |
| P1-02 | 배열 뮤테이션 패턴 16+ 위반 | 높음 | Phase 1 | 🔴 High |
| P1-03 | typeRoots 설정 오류 | 중간 | Phase 1 | 🟠 High |
| P1-04 | 의존성 버전 불일치 | 중간 | Phase 1 | 🟠 High |
| P1-05 | checkOverflow.ts 리팩토링 (중복 코드) | 낮음 | Phase 1 | 🟠 High |
| P2-01 | 파일 업로드 검증 없음 | 높음 | Phase 2 | 🔴 High |
| P2-02 | 에러 메시지 서버 정보 노출 | 중간 | Phase 2 | 🟠 High |
| P2-03 | CORS/CSRF 설정 누락 | 높음 | Phase 2 | 🔴 High |

### MEDIUM Issues

| ID | 이슈 | 영향도 | Phase | 우선순위 |
|---|---|---|---|---|
| P2-04 | URL 검증 (위험한 프로토콜 차단) | 중간 | Phase 2 | 🟡 Medium |
| P2-05 | Content Security Policy 없음 | 중간 | Phase 2 | 🟡 Medium |
| P2-06 | Rate Limiting 없음 | 중간 | Phase 2 | 🟡 Medium |
| P3-01 | 테스트 인프라 없음 (0% 커버리지) | 높음 | Phase 3 | 🔴 Medium |
| P3-02 | 핵심 기능 테스트 미작성 | 높음 | Phase 3 | 🔴 Medium |
| P3-03 | ESLint/Prettier 미설정 | 낮음 | Phase 3 | 🟡 Medium |
| P3-04 | husky 미설정 | 낮음 | Phase 3 | 🟡 Medium |
| P3-05 | 매직 넘버 16+ 개 | 낮음 | Phase 3 | 🟡 Medium |
| P3-06 | React 직접 DOM 조작 | 중간 | Phase 3 | 🟡 Medium |
| P3-07 | @ts-ignore 사용 | 낮음 | Phase 3 | 🟡 Medium |
| P4-01 | CI/CD 파이프라인 없음 | 높음 | Phase 4 | 🔴 Medium |

---

## 예상 타임라인

### Phase 0: Critical Hotfix (2-3일)
- P0-01: 1h
- P0-02: 2h
- P0-03: 3h
- P0-04: 1h
- **소계: 7시간 (1일)**

### Phase 1: Foundation (4-5일)
- P1-01: 8h
- P1-02: 10h
- P1-03: 1h
- P1-04: 2h
- P1-05: 2h
- **소계: 23시간 (3일)**

### Phase 2: Security (3-4일)
- P2-01: 3h
- P2-02: 2h
- P2-03: 4h
- P2-04: 1h
- P2-05: 2h
- P2-06: 1h
- **소계: 13시간 (2일)**

### Phase 3: Quality (5-7일)
- P3-01: 3h
- P3-02: 12h
- P3-03: 3h
- P3-04: 1h
- P3-05: 4h
- P3-06: 3h
- P3-07: 1h
- **소계: 27시간 (4일)**

### Phase 4: Operations (4-5일)
- P4-01: 3h
- P4-02: 1h
- P4-03: 2h
- P4-04: 2h
- P4-05: 2h
- P4-06: 1h
- P4-07: 1h
- **소계: 12시간 (2일)**

**전체 예상**: 80-100시간 (약 10-12일, 1주일 2명 또는 2주일 1명)

---

## 성공 기준

### Phase 0 완료 기준
- [ ] React Router 버전 통일 (v6)
- [ ] 쿠키 보안 플래그 적용
- [ ] 토큰 갱신 경합 조건 해결
- [ ] 프로덕션 콘솔 로그 제거
- [ ] 모든 패키지 빌드 성공

### Phase 1 완료 기준
- [ ] TypeScript strict 모드 활성화 (모든 패키지)
- [ ] 타입 에러 0개
- [ ] 배열 뮤테이션 위반 0개
- [ ] `any` 타입 사용 0개
- [ ] `yarn tsc --noEmit` 통과

### Phase 2 완료 기준
- [ ] 파일 업로드 검증 구현
- [ ] 에러 메시지 정제
- [ ] CORS 설정 추가
- [ ] CSRF 토큰 적용
- [ ] URL 검증 강화
- [ ] CSP 헤더 설정
- [ ] Rate limiting 구현
- [ ] 보안 감사 통과

### Phase 3 완료 기준
- [ ] 테스트 프레임워크 설정 (vitest)
- [ ] 테스트 커버리지 80%+ 달성
- [ ] ESLint 규칙 적용 (에러 0개)
- [ ] Prettier 포맷팅 완료
- [ ] husky hook 설정
- [ ] 매직 넘버 제거
- [ ] 직접 DOM 조작 제거

### Phase 4 완료 기준
- [ ] GitHub Actions CI/CD 파이프라인 구성
- [ ] 환경 변수 표준화
- [ ] Docker 빌드 최적화
- [ ] Sentry 모니터링 설정
- [ ] Web Vitals 추적
- [ ] Dependabot 설정
- [ ] 압축 활성화

---

## 리소스 할당

### 필수 역할
- **Executor-High** (Phase 0-1 주도): 3인시간
- **Security-Reviewer** (Phase 2): 2인시간
- **Code-Reviewer** (Phase 1, 3): 2인시간
- **Architect** (P0-03 검토): 1인시간

### 추천 스케줄 (팀 규모: 2명)
```
Week 1:
- Mon-Tue: Phase 0 (Critical)
- Wed-Thu: Phase 1 (Foundation) - Part 1
- Fri: Phase 1 - Part 2 + Review

Week 2:
- Mon-Tue: Phase 2 (Security)
- Wed-Fri: Phase 3 (Quality) - Part 1

Week 3:
- Mon-Wed: Phase 3 - Part 2
- Thu-Fri: Phase 4 (Operations)
```

---

## 다음 단계

1. **승인**: 이 계획이 수용 가능한지 확인
2. **일정 협의**: 팀 가용성에 맞춰 타임라인 조정
3. **Phase 0 시작**: 내일부터 Critical 이슈 처리 시작
4. **주간 리뷰**: 매 주말 진행 상황 검토 및 다음 주 계획 조정
5. **완료 검증**: 각 Phase 완료 후 성공 기준 확인

---

## 추가 고려사항

### 병렬 처리 가능 항목
- P0-02와 P0-03 (다른 파일)
- P1-01, P1-02, P1-03, P1-04 (독립적)
- P2-01, P2-02, P2-04, P2-05, P2-06 (프론트/백 분리 가능)
- P3  모든 항목 (패키지별)

### 외부 의존도
- Phase 2의 백엔드 작업 (CORS, CSRF, Rate Limiting)
- 배포 환경 설정 (Phase 4)

### 리스크 및 대응
| 리스크 | 확률 | 영향도 | 대응 |
|---|---|---|---|
| 테스트 작성 오래 걸림 | 높음 | 높음 | Phase 3-2 병렬화, 테스트 라이브러리 선택 신중 |
| React Router 의존성 깊음 | 중간 | 높음 | 초기에 충분한 테스트 수행 |
| 백엔드 보안 설정 지연 | 중간 | 중간 | 프론트엔드 준비 병렬 진행 |

---

**문서 버전**: v1.0
**최종 수정**: 2026-02-03
**담당자**: 개발팀
