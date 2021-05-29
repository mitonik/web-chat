<template>
  <nav>
    <ol>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/room">New Room</router-link></li>
    </ol>
  </nav>
  <router-view/>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #000;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
html, body, #app {
  height: 100vh;
  background-color: #130e22;
}
#app {
  display: flex;
  flex-direction: column;
}
nav {
  background-color: #2a214d;
  margin-bottom: 10px;
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
main {
  flex-grow: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
main * {
  color: #b3adce;
}
main form {
  display: flex;
  width: 100%;
}
main ul {
  flex-grow: 1;
  overflow: auto;
  background-color: #2a214d;
  margin: 0 10px 10px 10px;
  padding: 20px;
  border-radius: 5px;
}
ul li {
  color: #b3adce;
  margin: 10px 0 10px 0;
  padding: 10px;
  list-style: none;
  border-radius: 5px;
}
main form input {
  background-color: #2a214d;
  color: #b3adce;
  border: none;
  border-radius: 5px;
  height: 100px;
  padding: 20px;
}
main form input#message {
  flex: 1;
  margin: 0 10px 10px 10px;
}
main form input#message:focus-visible {
  outline: none;
}
main form input#messageSendButton {
  width: 100px;
  margin: 0px 10px 10px 0px;
}
@media (min-width: 960px) {
  main {
    margin: auto 10vw;
  }
}
</style>
