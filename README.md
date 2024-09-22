# REPO

## 프로젝트 실행
Main  
`yarn main dev`

Student  
`yarn student dev`

Teacher  
`yarn teacher dev`

Storybook  
`yarn ui storybook`

## 첫 설정 관련
첫 설정 시, VSC를 사용할 경우 Typescript 설정이 필요합니다.

- **시작 전 `zipFS` 확장을 설치해주세요**

1. `yarn dlx @yarnpkg/sdks vscode`
2. CMD(CTRL) + SHIFT + P
3. select typescript version
4. use workspace version

## 폴더 구조
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