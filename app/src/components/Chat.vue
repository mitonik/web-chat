<template>
<section>
  <Messages />
  <InputField />
</section>
</template>

<script>
import Messages from './Messages.vue'
import InputField from './InputField.vue'

export default {
  name: 'Chat',
  components: {
    Messages,
    InputField
  }
}
</script>

<style scoped>
section {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
