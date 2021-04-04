<template>
<section class="chat">
  <Chat />
  <UserList />
</section>
</template>

<script>
import Chat from './Chat.vue'
import UserList from './UserList.vue'

export default {
  name: 'ChatRoom',
  components: {
    Chat,
    UserList
  }
}
</script>

<style scoped>
.chat {
  display: flex;
  flex-direction: column;
  background-color: #130e22;
  height: 100%;
  margin: 2px;
  padding: 5px;
}
@media (min-width: 1080px) {
  .chat {
    flex-direction: row;
    margin: 10px auto;
    padding: 20px;
    width: 80vw;
  }
}
</style>
