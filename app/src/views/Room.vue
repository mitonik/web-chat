<template>
  <main>
    <ul>
      <li v-for="message in messages">{{ message }}</li>
    </ul>
    <form @submit.prevent="sendMessage">
      <input id="message" v-model="message" type="text" placeholder="Write your message here." autocomplete="off" required/>
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
    sendMessage() {
      socket.emit('message', this.message);
      this.message = '';
    }
  },
  mounted: function() {
    socket = io('ws://localhost:3000/');

    socket.on('connect', () => {
      if(this.$route.params.id === '') {
        this.$router.push({params: {id: socket.id}});
      }
      else {
        socket.emit('joinRoom', (this.$route.params.id));
      }
    })

    let messages = this.messages;

    socket.on('message', (message) => {
      messages.push(message);
    })

    socket.on('userConnect', (message) => {
      messages.push(message);
    })
    
    socket.on('userDisconnect', (message) => {
      messages.push(message);
    })

    socket.on('joinedRoom', (id) => {
      this.$router.push({params: {id: id}});
    })
  },
  beforeUnmount: function() {
    socket.disconnect();
  }
}
</script>
