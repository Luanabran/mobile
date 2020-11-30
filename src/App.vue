<template>
  <div id="app">
    
    <router-view/>
    <div class="bottomBarContainer">
      <div v-if="login === 1 && !user">
        <button v-on:click="goToLogin" id="loginAppButton">Login</button>
      </div>
      <div v-if="login === 1" id="bottomBar"> 
          <router-link class="link" to="/">  <PhHouse :size="48" weight="bold" /></router-link>
          <router-link class="link" to="/contact">  <PhAt :size="48"  weight="bold" /> </router-link>
          <router-link class="link" to="/gameInfo">  <PhCalendarX :size="48" weight="bold" /> </router-link>
          <router-link class="link" to="/location"> <PhMapPinLine :size="48" weight="bold" /></router-link>
          <router-link class="link" to="/rules"> <PhArticle :size="48" weight="bold" /></router-link>
          <router-link class="link" to="/registration"> <PhSignIn :size="48" weight="bold" /> </router-link>
        </div>
    </div>
  
  </div>
</template>

<script>
// @ is an alias to /src
 import { PhHouse, PhAt, PhCalendarX, PhMapPinLine,PhSignIn, PhArticle} from "phosphor-vue";
  import firebase from "firebase/app";
import 'firebase/app';
import 'firebase/auth';

export default {
  name: 'App',
  components: {
      PhHouse,
      PhAt,
      PhCalendarX,
      PhMapPinLine,
      PhSignIn,
      PhArticle
      
  },
  data: function () {
     return {
       login: 1,
       user: true
     }
  },
  methods: {
    setCurrentRoute: function (to) {
      const route = this.$router.currentRoute
      if(!to) to = route
      if(to.name === 'LoginView'){
        this.login = 0;
      } else {
        this.login = 1;
      }
    },
     goToLogin(){
    this.$router.push('/login')
    },
  },
  beforeMount(){
    //  if(this.user){
      // firebase.auth().signOut()
    // }
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
          // User is signed in.   
          this.user=user
      } else {
          // No user is signed in.
          this.user=null
      } 
    });
    this.setCurrentRoute()
  },
  watch:{
    $route (to){
      const route = this.$router.currentRoute
      this.setCurrentRoute(to)

      if(route.name === '/' || route.name === 'Rules'){
        document.getElementById('app').style.overflow = 'visible';
      } else {
        document.getElementById('app').style.overflow = 'hidden';
      }
    }
} 
}

</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#loginAppButton{
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 7px;
    color: wheat;
    background-color: #ea4a4a;
}

.bottomBarContainer {
  
        flex: 1;
    display: flex;
    align-items: flex-end;

}

.link {
  color: white;
}

#bottomBar{
  margin-top: 20px;
  display: flex;
  height: 50px;
  width: 100%;
  background: red;
  bottom: 0;
  justify-content: space-around;
}

</style>

