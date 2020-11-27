<template>
  <div class="loginView">
  <div class="circle" id="circle1"></div>
  <div class="circle" id="circle2"></div>
  <div class="circle" id="circle3"></div>
    <div id="optionDiv">
        <button v-on:click="saludar" id="si" class="button nonActive" type="button">Sign in</button>
        <button v-on:click="saludar" id="su" class="button active" type="button">Sign up</button>
    </div>
       <HelloWorld v-if="active === 0" msg="Login"/>
       <HelloWorld  v-else msg="Sign up"/>

        <LoginForm v-if="active === 0"/>
        <SignUpForm v-else />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import LoginForm from '@/components/LoginForm.vue'
import SignUpForm from '@/components/SignUpForm.vue'

export default {
  name: 'LoginView',
  components: {
    HelloWorld,
    LoginForm,
    SignUpForm
    
  },
  data: function () {
     return {
       active: 1
     }
  },
  methods: {
    saludar: function ({target}) {
      let si = document.getElementById('si');
      let su = document.getElementById('su');

      switch(target.id){
        case 'si':
          si.classList.remove("nonActive")
          si.classList.add("active")
          su.classList.remove("active")
          su.classList.add("nonActive")
          this.active = 0;

        break;
        case 'su':
          su.classList.remove("nonActive")
          su.classList.add("active")
          si.classList.remove("active")
          si.classList.add("nonActive")
          this.active = 1;

        break;
      }
      
    }
  }
}

</script>

<style>
.circle {
    background: #f00;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    position: absolute;
    z-index: -1;
}

#optionDiv {
    display:flex;
    flex-direction: row;
    flex: 1;
    place-content: space-evenly;
}

.button {
    padding: 10px;
    border-radius: 10px;
    border: none;
    box-shadow: 1px 1px 5px #888888;
    margin-bottom: 10px;
    margin-top: 10px;
    background: #e22525;
    outline: 0;
}

.nonActive{
  background:white;
}

.active{
  background: #e22525;
}

.loginView {
  height: 100vh;
  width: 80vw;
  position: relative;
      margin: auto;
      display:flex;
      flex-direction: column;
      padding-bottom: 75px;
}

#circle1 {
  left: -140px;
      top: -58px;
}

#circle2 {
  left: 280px;
  top: 175px;
}

#circle3 {
  left: -130px;
  top: 300px;
}
</style>