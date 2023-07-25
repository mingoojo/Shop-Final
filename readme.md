## 🖥️ 프로젝트 소개

로그인부터 상품 보기, 장바구니 담기, 제품 결제 및 배송 정보확인까지, 비지니스 플로우에 맞는 사이트를 구축하기 위한 프로젝트입니다.

- **`Author` :**  Mingoo Jo
- **`Project` :** Shop 페이지 만들기
- **`Project duration` :** 2023.06.08 - 2023.07.31
- **`API 명세서`:** [API명세서](https://fanatical-tibia-7d0.notion.site/API-fa79f073d65a4453a6631155f00c2694?pvs=4)
- **`클라이언트 URL`:** [SHOP Client](https://shop-deploy.web.app)
- **`어드민 클라이언트 URL`:** [SHOP ADMIN Client](https://shop-admin-deploy.web.app)
- 클라이언트 테스트용 아이디 : (swyks11@naver.com / test1234)
- 어드민 클라이언트 아이디 : (admin2@naver.com / admin123)


## 📌 주요 기능

#### 로그인
- DB값 검증
- 로그인 시 accessToken 생성

#### 회원가입
- 이메일 기반 회원가입
- ID 중복 체크

#### 상품 보기
- 상품 목록 확인
- 가격 및 상품 정보 확인

#### 상품 상세 보기
- 상품 옵션 및 설명 확인
- 상품 옵션 선택
- 장바구니에 담기

#### 카트 보기
- 카트 상품 확인
- 유저 정보에 맞는 카트 상품 확인

#### 주문하기
- 다음 우편번호 서비스로 배송지 정보 입력
- 포트원을 활용한 결제 기능

#### 관리자 페이지
- 회원 관리
- 주문 관리
- 상점 관리


## 🌟 Pages & Features
|                                                              |                                                              |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|        **Home Page**                           |                 **Products Page**                 |
| ![Home Page](https://github.com/mingoojo/project-shop-image/blob/main/pages-01.jpg?raw=true) |![Products Page](https://github.com/mingoojo/project-shop-image/blob/main/pages-02.jpg?raw=true)|
|        **Product Detail Page**                           |                 **Signup Page**                 |
|![Product Detail Page](https://github.com/mingoojo/project-shop-image/blob/main/pages-03.jpg?raw=true)|![Signup Page](https://github.com/mingoojo/project-shop-image/blob/main/pages-04.jpg?raw=true)|
|                    **Login Page**                     |                     **Cart Page**                    |
| ![Login Page](https://github.com/mingoojo/project-shop-image/blob/main/pages-05.jpg?raw=true)| ![Cart Page](https://github.com/mingoojo/project-shop-image/blob/main/pages-06.jpg?raw=true)|
|                    **Order Page**                     |                 **Postal Code Search**                  |
| ![Order Page](https://github.com/mingoojo/project-shop-image/blob/main/pages-07.jpg?raw=true) | ![Postal Code Search](https://github.com/mingoojo/project-shop-image/blob/main/pages-08.jpg?raw=true) |
|                    **Payment**                     |                 **OrderList Page**                  |
|![Payment](https://github.com/mingoojo/project-shop-image/blob/main/pages-09.jpg?raw=true) | ![OrderList](https://github.com/mingoojo/project-shop-image/blob/main/pages-10.jpg?raw=true)|
|                    **Order Detail Page**                     |
|![review_detail](https://github.com/mingoojo/project-shop-image/blob/main/pages-11.jpg?raw=true)|
<br/>

## ⚙️ 개발 환경 세팅

- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [React](https://react.dev/)
- [Parcel](https://parceljs.org/)
- [React Router](https://github.com/remix-run/react-router)
- [styled-components](https://github.com/styled-components/styled-components)
- [styled-reset](https://github.com/zacanger/styled-reset)
- [usehooks-ts](https://github.com/juliencrn/usehooks-ts)
- [usestore-ts](https://github.com/seed2whale/usestore-ts)
    - [Axios](https://github.com/axios/axios)
    - [tsyringe](https://github.com/microsoft/tsyringe)
    - [reflect-metadata](https://github.com/rbuckton/reflect-metadata)
- [jest-dom](https://github.com/testing-library/jest-dom)
    - [MSW](https://github.com/mswjs/msw)
- [CodeceptJS](https://codecept.io/)
- [dotenv](https://github.com/motdotla/dotenv)
- [SWR](https://swr.vercel.app/ko)
- [React Hook Form](https://react-hook-form.com/)
- [express](https://expressjs.com/ko/)
    - [express-validator](https://express-validator.github.io/docs)
- [jsonwebtoken](https://jwt.io/)
- [mongodb](https://www.mongodb.com/)
- [mongoose](https://mongoosejs.com/)
    - [mongoose-unique-validator](https://github.com/mongoose-unique-validator/mongoose-unique-validator)
- [nodemon](https://nodemon.io/)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js/tree/master)
