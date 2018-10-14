<template>
  <div class="container">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import Edit from './components/Edit.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'app',
  components: {
    Header,
    Home,
    Edit,
    Footer
  }
}
</script>