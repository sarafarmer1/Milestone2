<template>
<nav>
  <div class="navTop">
    <a><router-link to="/">BuffLog</router-link></a>
    <a><router-link to="/Header">Create</router-link></a>
    <a><router-link to="/Contact">Contact</router-link></a>
    <a><router-link to="" class="login">Log In</router-link></a>
  </div>
</nav>
</template>

<script>
export default {};
</script>

<style scoped>
.navTop {
  background-color: gray;
  overflow: hidden;
  margin: 1em;
}
.navTop a {
  flex-direction: row;
  float: left;
  color: white;
  text-align: center;
  padding: 1em;
  text-decoration: none;
}
.navTop a:hover {
  background-color: lightgrey;
  color: aqua;
}
</style>
