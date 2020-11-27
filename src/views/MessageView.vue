<template>
  <div class="loginView">
    <MessageForm />
  </div>
</template>

<script>

import MessageForm from '@/components/MessageForm.vue'

export default {
  name: 'MessageView',
  components: {
    MessageForm
  },
}

</script>

<style>
.loginView {
  height: 100vh;
  width: 80vw;
  position: relative;
      margin: auto;
      display:flex;
      flex-direction: column;
      padding-bottom: 75px;
}

</style>