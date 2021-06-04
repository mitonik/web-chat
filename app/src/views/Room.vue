<template>
  <main>
    <ul class="messages">
      <li v-for="message in messages">{{ message }}</li>
    </ul>
    <ul>
      <h2>Users</h2>
      <li v-for="user in users">{{ user }}</li>
    </ul>
    <form @submit.prevent="sendMessage">
      <input id="message" v-model="message" type="text" placeholder="Write your message here." autocomplete="off" required/>
      <input id="messageSendButton" type="submit" value="Send">
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
      userId: '',
      message: '',
      messages: [],
      users: []
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
        this.users.push(socket.id);
      }
      else {
        socket.emit('joinRoom', (this.$route.params.id));
      }
    })

    let messages = this.messages;

    socket.on('message', (message) => {
      let currentDate = new Date();
      let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
      messages.push('[' + time + '] ' + message);
    })

    socket.on('userConnect', (user) => {
      //messages.push(message);
      this.users.push(user);
    })
    
    socket.on('userDisconnect', (userId) => {
      for (let i = 0; i < this.users.length; i++) {
        if(this.users[i] == userId) {
          this.users.splice(i, 1);
        }
      }
    })

    socket.on('joinedRoom', (message) => {
      this.users = message.users;
      this.$router.push({params: {id: message.roomId}});
    })
  },
  beforeUnmount: function() {
    socket.disconnect();
  }
}
</script>
