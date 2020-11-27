<template>
 <form class="loginForm" @submit.prevent="logIn">
    <input class="input" placeholder="Email" v-model="email" type="text" id="Email" name="Email" />
    <input class="input" placeholder="Contraseña" v-model="password" type="text" id="Contraseña" name="Contraseña" />
    <input id="loginButton" type="submit" value="Login">
    <!-- <router-link class="link" to="/About"> 
      <button id="loginButton" type="button">Ingresar</button>
    </router-link> -->
  </form>
</template>

<script>

import firebase from "firebase/app";

export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    logIn() {
      console.log(this)
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
          .then( () =>  {
            this.$router.replace('About')
          })
          .catch(function(error) {
            console.log(error.message)
          });
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
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
.loginForm {
    display:flex;
    flex-direction: column;
    flex: 8;
    justify-content: space-evenly;
}

.input { 
    padding: 10px;
    border-radius: 10px;
    border: none;
    box-shadow: 1px 1px 5px #888888;
    margin-bottom: 10px;
    outline: 0;

}

#loginButton {
   width:100%;
    padding: 10px;
    border-radius: 10px;
    border: none;
    box-shadow: 1px 1px 5px #888888;
    margin-bottom: 10px;
    margin-top: 10px;
    background: #e22525;
    outline: 0;

}

</style>

