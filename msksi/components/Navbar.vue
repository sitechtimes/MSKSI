<template>
  <header id="navbar">
    <h1 class="logo">MSKSI</h1>
    <div class="nav">
      <router-link class="navRouter" to="/"> Home </router-link>
      <router-link class="navRouter" to="/AboutUs"> About Us </router-link>
      <router-link class="navRouter" to="/Calendar"> Calendar </router-link>
      <router-link class="navRouter" to="/Gallery"> Gallery </router-link>
      <router-link class="navRouter" to="/Resources"> Resources </router-link>
      <router-link class="navRouter" to="/JoinUs"> Join Us </router-link>
    </div>
    <Menu />
  </header>
</template>

<script>
import Menu from './Menu.vue'
export default {
  components: { Menu },
  name: 'Navbar',
  methods: {},
}
</script>

<style>
#navbar {
  z-index: 500;
}
</style>
