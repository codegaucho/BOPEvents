<template>
  <div class="hello-authenticated">
    <h1>{{ msg }}</h1>

    <p>
      <button v-on:click="logout">Logout</button>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase'

/* eslint-disable space-before-function-paren */
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App you authenticated person'
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
