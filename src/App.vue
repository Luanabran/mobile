<template>
  <div id="app">
    
    <router-view/>
    <div class="bottomBarContainer">
      <div v-if="login === 1" id="bottomBar"> 
          <router-link class="link" to="/About">  <PhHouse :size="48" weight="bold" /></router-link>
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
       login: 1
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
    }
  },
  beforeMount(){
    this.setCurrentRoute()
  },
  watch:{
    $route (to, from){
      const route = this.$router.currentRoute

       console.log(to)
       console.log(from)
       console.log(route)
      this.setCurrentRoute(to)

      if(route.name === 'About' || route.name === 'Rules'){
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

