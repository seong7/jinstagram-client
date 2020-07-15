# Jinstgram

React 를 사용한 SNS web-app 의 Client source repository 입니다.

> API repository 로 이동 [>>>](https://github.com/seong7/sns-app-api)

## local 서버 시작

```
$ yarn install

$ yarn start
```

## 사용 기술

- **Library** : React.js
- **State Management** : Redux (saga)
- **Style** : sass / styled-components
- **Code Style** : eslint (airbnb) / prettier

## 주요 기능

- 회원가입 / 로그인
- Dark mode (예정)
- 게시물 업로드 및 수정, 삭제 (예정)
- 게시물 공개 범위 (예정)
  - 전체 공개
  - 팔로워만 보기
  - 나만 보기
- 팔로우 (예정)

## 폴더 구조

- **assets** : 각종 이미지 파일

- **components** : 재사용성에 초점을 맞춰 작성된 컴포넌트

- **containers** : components 들의 상위 컴포넌트이며 redux dispatch 를 담당하는 컴포넌트

- **lib** : api 통신과 util 함수

- **modules** : redux action, reducer, Middleware

- **pages** : 페이지
