<template>
  <div class="registration">
  <div class="circle" id="circle1"></div>
  <div class="circle" id="circle2"></div>
  <div class="circle" id="circle3"></div>
    <div class="titleRegistration">

      <h1>Registration</h1>

    </div>
    <SignUpForm />
  </div>
</template>

<script>
// @ is an alias to /src
import SignUpForm from '@/components/SignUpForm.vue'


export default {
  name: 'Registration',
  components: {
    SignUpForm,
    
  },
  data: function () {
     return {
       active: 1
     }
  },
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

.active{
  background: #e22525;
}

.registration {
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

.titleRegistration {
  display:flex;
  justify-content: center;
  margin-bottom:20px;

}
</style>