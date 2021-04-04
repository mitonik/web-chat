<template>
<nav>
  <ol>
    <li><a href="">New Room</a></li>
    <li><a href="">Link 2</a></li>
  </ol>
</nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
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
</style>
