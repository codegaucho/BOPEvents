// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import firebaseConfig from './config.js'

// Require the main Sass manifest file (for bulma)
// couldn't get it to find relative module, so for now including bulma via cdn
require('./assets/sass/main.scss')

Vue.config.productionTip = false

let app

firebase.initializeApp(firebaseConfig)
firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
})
