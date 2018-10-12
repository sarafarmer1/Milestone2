<template>
  <div id="app">
  <appNavigation></appNavigation>
  <div class="row">
    <div class="col-xs-12">
      <router-view></router-view>
    </div>
  </div>
  <Header/>
  <Home/>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";

export default {
  name: "app",
  components: {
    appNavigation: Navigation,
    Header,
    Home
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
