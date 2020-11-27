
<template>
  <div class="contact">
    <div class="title">
      <h1>Contact</h1>
    </div>
    <div class="icons">
       <PhInstagramLogo :size="70" weight="bold" />
       <PhFacebookLogo :size="70" weight="bold" />
       <PhTwitterLogo :size="70" weight="bold" />
    </div>
    <div class="card">
        <PhEnvelopeSimple class="emailIcon" :size="100" weight="bold" />
        <span class="label">Please email us at  nysl@chisoccer.org 
        We will reply to your  email as soon as we can</span>
    </div>
    <div class="buttonDiv">
        <button id="contactButton" type="button">Send email</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
 import { PhInstagramLogo, PhFacebookLogo, PhTwitterLogo, PhEnvelopeSimple} from "phosphor-vue";
  
export default {
  name: 'Contact',
  components: {
      PhInstagramLogo,
      PhFacebookLogo,
      PhTwitterLogo,
      PhEnvelopeSimple
  },
  data: function () {
     return {
       active: 1
     }
  },
  methods: {
  }
}

</script>

<style>

.emailIcon {

    flex:1;
}

.event {
  text-align: left;
}

.contact {
    display:flex;
    flex-direction: column;
    margin:auto;
    height: 100%;
    flex: 1;
}

.title {
  display:flex;
  justify-content: center;
  flex: 1;
}

#contactButton {
    padding: 10px;
    border-radius: 10px;
    border: none;
    box-shadow: 1px 1px 5px #888888;
    margin-bottom: 10px;
    margin-top: 10px;
    background: #e22525;
    outline: 0;
    margin-top: 50px;
    width: 95%;

}

.card {
  position: relative;
  background: #42b983;
  color: #fff;
  font-family: Arial;
  font-size: 16px;
  text-align: center;
  flex: 2;
  margin-right: 10px;
  margin-left: 10px;
  justify-content: center;
      align-items: center;

}

.buttonDiv{
    flex:2;
}

.icons {
    flex: 1;
    justify-content: space-evenly;
  display: flex;

}

.label {
  display:flex;
  flex-direction:column;
  flex:1;
  padding:10px;
}

</style>