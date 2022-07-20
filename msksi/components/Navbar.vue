<template>
  <header id="navbar">
    <h1 class="logo"><a class="logo" href="/">MSKSI</a></h1>
    <div class="nav">
      <router-link class="navRouter router" to="/"> Home </router-link>
      <router-link class="navRouter router" to="/AboutUs"> About Us </router-link>
      <router-link class="navRouter router" to="/Calendar"> Calendar </router-link>
      <router-link class="navRouter router" to="/Gallery"> Gallery </router-link>
      <router-link class="navRouter router" to="/Resources"> Resources </router-link>
      <router-link class="navRouter router" to="/JoinUs"> Join Us </router-link>
    </div>
    <Menu />
    <!-- <ColorPicker /> -->
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

/* css for links when hover and when active */
/* moved to variable css */
</style>
