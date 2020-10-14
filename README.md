# Jinstgram

Full-stack 으로 회원가입과 로그인 기능을 구현한 간단한 web-app 입니다.

> Server repository 로 이동 [>>>](https://github.com/seong7/jinstagram-api)

## 실행 명령어

```
$ yarn install

$ yarn start
```

## 사용 기술

- **Library** : React.js
- **State Management** : Redux (saga)
- **Style** : sass / styled-components
- **Code Style** : eslint (airbnb) / prettier


## 폴더 구조

- **assets** : 각종 이미지 파일

- **components** : 재사용성에 초점을 맞춰 작성된 컴포넌트

- **containers** : components 들의 상위 컴포넌트이며 redux dispatch 를 담당하는 컴포넌트

- **lib** : api 통신과 util 함수

- **modules** : redux action, reducer, Middleware

- **pages** : 페이지
