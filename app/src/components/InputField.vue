<template>
<input type="text" placeholder="Write your message here.">
</template>

<script>
export default {
  name: 'InputField'
}
</script>

<style scoped>
input {
  background-color: #2a214d;
  color: #b3adce;
  border: none;
  border-radius: 5px;
  height: 100px;
  margin: 10px;
  padding: 20px;
}
input:focus-visible {
  outline: none;
}
</style>
