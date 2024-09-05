# Stage 1: Builder
FROM node:18-alpine AS builder

# 필수 패키지 설치 및 Corepack 활성화
RUN apk add --no-cache libc6-compat git && corepack enable && corepack prepare yarn@4.3.0 --activate

# Git 리포지토리 클론
WORKDIR /app
RUN git clone --depth 1 --branch main https://github.com/DSM-Repo/repo.git .

# 환경 변수 설정
ARG VITE_APP_BASE_URL VITE_APP_URL_MAIN VITE_APP_URL_STUDENT VITE_APP_URL_TEACHER VITE_APP_RENDER_BASE_URL
ENV VITE_APP_BASE_URL VITE_APP_URL_MAIN VITE_APP_URL_STUDENT VITE_APP_URL_TEACHER VITE_APP_RENDER_BASE_URL

# 의존성 설치 및 빌드
RUN yarn install --immutable && yarn workspace main build

# Stage 2: Runner
FROM nginx:alpine
COPY --from=builder /app/packages/main/dist /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]