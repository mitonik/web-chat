<template>
<ol>
  <li>User 1</li>
  <li>User 2</li>
  <li>User 3</li>
</ol>
</template>

<script>
export default {
  name: 'UserList'
}
</script>

<style scoped>
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
  ol {
    width: 20vw;
  }
}
</style>
