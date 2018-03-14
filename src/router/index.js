import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import HelloAuthenticated from '@/components/HelloAuthenticated'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'

import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hello-authenticated',
      name: 'HelloAuthenticated',
      component: HelloAuthenticated,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  // else if (!requiresAuth && currentUser) next('hello-authenticated')
  else next()
})

export default router
