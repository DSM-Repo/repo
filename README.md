![image](https://github.com/user-attachments/assets/df8e56c7-da9f-4fa9-9448-6e346f01be23)

## REPO
- **📅 진행 기간** 2024. 06 ~ 2025. 01
- **💻 서비스 URL** https://www.dsm-repo.com/
- **📱 서비스 샘플 (레주메)** https://www.dsm-repo.com/resume_viewer/66dc46c0fcaf9157ccc2e3ff

## INTRO
대덕소프트마이스터고등학교 학생을 위한 **이력서 관리 플랫폼**입니다.

학생들을 위한 손쉬운 이력서 작성 및 공유, 선생님들을 위한 빠른 피드백 및 레주메북 변환 기능을 제공합니다.

변환된 레주메북은 자체 뷰어를 통해 저희 학교와 MOU를 맺은 기업들에게 제공됩니다.

진행 기간 동안 <ins>**160+**</ins>명의 사용자가 접속하였으며, <ins>**100+**</ins>명의 사용자가 이력서를 작성하였습니다.

## SETUP DOCS
### 설정
```
(VSC를 사용할 경우, 'zipFS' 확장 설치)
$ yarn install
$ yarn dlx @yarnpkg/sdks vscode
(IDE의 안내에 따라 typescript 버전을 워크스페이스 버전으로 변경)
```

### 실행
- Onboard
  `yarn main dev`

- Student
  `yarn student dev`

- Teacher
  `yarn teacher dev`

### 폴더 구조
서비스 패키지 내부엔 따로 components 폴더가 없습니다.  
**(각 페이지 폴더마다 전용 컴포넌트를 저장해둡니다.)**

- configs
  - tailwindcss-config (@configs/tailwindcss)
  - types-config (@configs/type)
  - util-config (@configs/util)
- packages
  - main
  - student
  - teacher
  - ui
