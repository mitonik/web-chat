<template>
<Navbar />
<ChatRoom />
</template>

<script>
import Navbar from './components/Navbar.vue'
import ChatRoom from './components/ChatRoom.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    ChatRoom
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #130e22;
  display: flex;
  flex-flow: column;
  height: 100%;
  overflow: auto;
}
</style>
