<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Login</h3>
          <p class="subtitle has-text-grey">Please login to proceed.</p>
          <div class="box">

            <figure class="avatar">
              <img src="http://res.cloudinary.com/codegaucho/image/upload/c_scale,h_128/v1520022662/BOP_qfoqyd.png">
            </figure>

            <div>Login with social media</div>

            <p class="field">
              <a class="button is-primary" v-on:click="signInTwitter">
                <span class="icon">
                  <i class="fab fa-twitter"></i>
                </span>
                <span>Twitter</span>
              </a>
              <a class="button is-primary" v-on:click="signInGoogle">
                <span class="icon">
                  <i class="fab fa-google"></i>
                </span>
                <span>Google</span>
              </a>
              <a class="button is-primary" v-on:click="signInFacebook">
                <span class="icon">
                  <i class="fab fa-facebook"></i>
                </span>
                <span>Facebook</span>
              </a>
            </p>

            <h1>or</h1>
            <hr>

            <form>
              <div class="field">
                <div class="control">
                  <input class="input is-large" type="email" placeholder="Your Email" autofocus="" v-model="email">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input class="input is-large" type="password" placeholder="Your Password" v-model="password">
                </div>
              </div>
              <div class="field">
                <label class="checkbox">
                  <input type="checkbox">
                  Remember me
                </label>
              </div>
              <button class="button is-block is-info is-large is-fullwidth" v-on:click="signIn">Login</button>
            </form>
          </div>
          <p class="has-text-grey">
            <router-link to="/sign-up">Sign Up</router-link> &nbsp;·&nbsp;
            <a href="../">Forgot Password</a> &nbsp;·&nbsp;
            <a href="../">Need Help?</a>
          </p>
        </div>
      </div>
    </div>
</section>
</template>

<script>
import firebase from 'firebase'

/* eslint-disable space-before-function-paren */

export default {
  name: 'login',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('hello-authenticated')
        },
        (err) => {
          alert('Oops.  ' + err.message)
        }
      )
    },
    signInGoogle: function () {
      var provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider).then(
        (user) => {
          this.$router.replace('hello-authenticated')
        },
        (err) => {
          alert('Oops.  ' + err.message)
        }
      )
    },
    signInFacebook: function () {
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider).then(
        (user) => {
          this.$router.replace('hello-authenticated')
        },
        (err) => {
          alert('Oops.  ' + err.message)
        }
      )
    },
    signInTwitter: function () {
      alert("soon")
    }
  }
}
</script>

<style scoped>
</style>
