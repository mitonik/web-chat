<template>
<section>
  <ul id="messagesWindow">
    <li v-for="message in messages">{{ message }}</li>
  </ul>
  <form @submit.prevent="sendMessage">
    <input id="message" v-model="message" type="text" placeholder="Write your message here." autocomplete="off"/>
    <input type="submit" value="Send">
  </form>
</section>
</template>

<script>
import { io } from 'socket.io-client'

var socket = null;

export default {
  name: 'Chat',
  data: function() {
    return {
      message: '',
      messages: [ 'This is the first test message.', 'A second test message.' ]
    }
  },
  methods: {
    sendMessage: function() {
      socket.emit('message', this.message);
      this.message = '';
    }
  },
  created: function() {
    socket = io();
  },
  mounted: function() {
    var messages = this.messages;
    socket.on('message', function(message) {
      messages.push(message);
      window.scrollTo(0, document.body.scrollHeight);
      messagesWindow.scrollTop = messagesWindow.scrollHeight;
    })
    socket.on('userConnect', function(message) {
      messages.push(message);
      window.scrollTo(0, document.body.scrollHeight);
      messagesWindow.scrollTop = messagesWindow.scrollHeight;
    })
    socket.on('userDisconnect', function(message) {
      messages.push(message);
      window.scrollTo(0, document.body.scrollHeight);
      messagesWindow.scrollTop = messagesWindow.scrollHeight;
    })
  }
}
</script>

<style scoped>
section {
  width: 100%;
  display: flex;
  flex-direction: column;
}
ul {
  height: 100%;
  background-color: #2a214d;
  margin: 10px;
  padding: 20px;
  border-radius: 5px;
  overflow-y: scroll;
}
ul li {
  color: #b3adce;
  margin: 10px 0 10px 0;
  padding: 10px;
  list-style: none;
  border-radius: 5px;
}
input {
  background-color: #2a214d;
  color: #b3adce;
  border: none;
  border-radius: 5px;
  height: 100px;
  margin: 10px;
  padding: 20px;
  width: 100px;
}
input:focus-visible {
  outline: none;
}
input#message {
  width: 300px;
}
</style>
