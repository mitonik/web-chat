<template>
  <nav>
    <ol>
      <li><a href="">New Room</a></li>
    </ol>
  </nav>
  <main>
    <ul>
      <li v-for="message in messages">{{ message }}</li>
    </ul>
    <form @submit.prevent="sendMessage">
      <input id="message" v-model="message" type="text" placeholder="Write your message here." autocomplete="off"/>
      <input type="submit" value="Send">
    </form>
  </main>
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
    })

    socket.on('userConnect', function(message) {
      messages.push(message);
    })
    
    socket.on('userDisconnect', function(message) {
      messages.push(message);
    })
  }
}
</script>

<style>
</style>
