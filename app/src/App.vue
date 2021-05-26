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
/* * {
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
nav {
  background-color: #2a214d;
}
nav ol {
  display: flex;
}
nav ol li {
  list-style: none;
}
nav ol li a {
  display: block;
  padding: 30px 16px;
  color: #b3adce;
  text-decoration: none;
}
nav ol li a:hover {
  color: #d7cff7;
}
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
.chat {
  display: flex;
  flex-direction: column;
  background-color: #130e22;
  height: 100%;
  margin: 2px;
  padding: 5px;
}
ol {
  background-color: #2a214d;
  color: #b3adce;
  border-radius: 5px;
  margin: 10px;
  padding: 20px;
}
ol li {
  padding: 10px 0 10px 0;
  list-style: none;
}
@media (min-width: 1080px) {
  .chat {
    flex-direction: row;
    margin: 10px auto;
    padding: 20px;
    width: 80vw;
  }
  ol {
    width: 20vw;
  }
} */
</style>
