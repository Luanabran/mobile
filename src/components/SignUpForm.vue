<template>
  <form @submit.prevent="signUp" class="signUpForm">
    <input class="input" placeholder="Nombre" v-model="name" type="text" id="Nombre" name="Nombre" />
    <input class="input" placeholder="Email" v-model="email" type="text" id="Email" name="Email" />
    <input class="input" placeholder="Contraseña" type="password" v-model="password"  id="Contraseña" name="Contraseña" />
    <!-- <router-link class="link" to="/About">  -->
    <input id="signButton" type="submit" value="Crear cuenta">

    <!-- </router-link>k -->
  </form>
</template>

<script>
import firebase from "firebase/app";

export default {
  name: 'SignUpForm',
  data() {
    return {
        name: "",
        email: "",
        password: ""
    };
  },
  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(data => {
          if(data.user && data.user.emailVerified === false){
            data.user.sendEmailVerification().then(function(){
              console.log("email verification sent to user");
            });
          }
          data.user
            .updateProfile({
              displayName: this.name
            })
            .then(() => {
              console.log(data)
            });
        })
        .catch(err => {
          console.log(err)
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.signUpForm {
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

#signButton {
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
