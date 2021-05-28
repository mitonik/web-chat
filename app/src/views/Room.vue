<template>
  <keep-alive>
    <main>
      <ul>
        <li v-for="message in messages">{{ message }}</li>
      </ul>
      <form @submit.prevent="sendMessage">
        <input id="message" v-model="message" type="text" placeholder="Write your message here." autocomplete="off"/>
        <input type="submit" value="Send">
      </form>
    </main>
  </keep-alive>
</template>

<script>
import { io } from 'socket.io-client'

var socket = null;

export default {
  name: 'App',
  data: function() {
    return {
      message: '',
      messages: []
    }
  },
  methods: {
    sendMessage() {
      socket.emit('message', this.message);
      this.message = '';
    }
  },
  mounted: function() {
    socket = io('http://localhost:3000/');
    var messages = this.messages;

    socket.on('message', function(message) {
      messages.push(message);
    })

    socket.on('userConnect', function(message) {
      messages.push(message);
    })
    
    socket.on('userDisconnect', function(message) {
      messages.push(message);
    })
  },
  beforeUnmount: function() {
    socket.disconnect();
  }
}
</script>

<style>
</style>
