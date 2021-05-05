## [Project Deployment Link](https://linkedin-clone-1eb4c.web.app/)

(google firebase hosted)

- 4칸의 입력창 입력 후, 하단의 `Register Now` 클릭하여 회원가입
- 가입 이후에는 Email/Password만 입력하고 Sign in (회원탈퇴/수정 불가)
- 로그인 후, 우측 상단 `me` 부분 클릭으로 로그아웃
- 로그인 후, 가운데 입력창에 내용 입력 후 `enter` 키 입력으로 글 작성 (삭제/수정 불가)

---

## [Project Youtube Video Link](https://www.youtube.com/watch?v=QaYts9sPmcY&t=5582s)

(`Sonny Sangha` on Youtube)

---

## 후기

- 별도의 서버를 구축하지 않고 firebase로 처리할 수 있어 신기했다
- 대신, 회원정보 수정이나 탈퇴, 작성된 글 수정이나 삭제 등은 firebase에 어떻게 요청해야 하는지 잘 모르겠다
- redux가 사용되었는데, 이 프로젝트에서 사용된 redux는 코드 구조가 잘 이해되지 않았다.
  - 내가 전에 사용해 본 redux 패던은 `ducks pattern`(리덕스를 사용할 때 action과 리듀서를 하나의 파일에서 사용하는 것)이었다고 하는데, 이번에도 그런 것 같다.(`userSlice.js` 파일)
  - 이 프로젝트의 redux에서 관리하는 항목은 사실상 '현재 로그인된 user' 한 가지에 불과함.
- 로그인 후 새로고침을 누르면, 잠깐동안 로그인 입력창이 떴다가 메인 화면으로 넘어온다.
  - `App.js`에서 이 부분을 더 깔끔하게 처리할 수 있지 않을까? (비동기처리를 활용한다거나...?)

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
