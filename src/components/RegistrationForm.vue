<template>
  <div class="registrationForm">
    <div style="display:flex; justify-content: center;">
      <input class="regInputForm" placeholder="Nombre" type="text" id="Nombre" name="Nombre" />
      <input class="regInputForm" placeholder="Email" type="text" id="Email" name="Email" />
    </div>
    <div style="display:flex; justify-content: center;">
        <input class="regInputForm" placeholder="Adress" type="text" id="Contraseña" name="Contraseña" />
      <input class="regInputForm" placeholder="Date of birth" type="text" id="Contraseña" name="Contraseña" />
    </div>
    
    <input class="regInputForm" placeholder="Contraseña" type="text" id="Contraseña" name="Contraseña" />
    <input class="regInputForm" placeholder="Contraseña" type="text" id="Contraseña" name="Contraseña" />
    <label><input class="regInputForm" type="checkbox" value="" id="Contraseña" name="Contraseña">Accept the Terms and Conditions</label>
    
    <button id="regButton" type="button">SUBMIT</button>
  </div>
</template>

<script>
export default {
  name: 'RegistrationForm',
//   props: {
//     msg: String
//   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.registrationForm{
    display:flex;
    flex-direction:column;
}

.regInputForm { 
    padding: 10px;
    border-radius: 10px;
    border: none;
    box-shadow: 1px 1px 5px #888888;
    margin-bottom: 40px;
    outline: 0;
    margin-right: 10px;
    flex: 1;
    width: 100%;
}

#regButton {
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
