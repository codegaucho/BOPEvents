# bop-events

> A Vue.js project for tracking bop events and volunteer days

## CSS
for connecting bulma to vue via webpack, see https://dev-notes.eu/2017/07/setup-new-vue-webpack-project-with-bulma/
used bulma-start to provide dependencies npm install bulma-start

also added fontawesome <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>

## Firebase
for connecting and authenticating via firebase, see https://medium.com/@anas.mammeri/vue-2-firebase-how-to-build-a-vue-app-with-firebase-authentication-system-in-15-minutes-fdce6f289c3c

## firebase configuration

add /src/config.js
var firebaseConfig = {
  apiKey: 'Gobbly_gook',
  authDomain: 'someproject.firebaseapp.com',
  databaseURL: 'https://someproject.firebaseio.com',
  projectId: 'someproject-7de2d',
  storageBucket: 'someproject.appspot.com',
  messagingSenderId: '77777777777'
}

export { firebaseConfig }

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
