<template>
  <header id="navbar">
    <h1 class="logo">MSKSI</h1>
    <div class="nav">
      <router-link class="router" to="/Home"> Home </router-link>
      <router-link class="router" to="/AboutUs"> About Us </router-link>
      <router-link class="router" to="/Calendar"> Calendar </router-link>
      <router-link class="router" to="/Gallery"> Gallery </router-link>
      <router-link class="router" to="/Resources"> Resources </router-link>
      <router-link class="router" to="/JoinUs"> Join Us </router-link>
    </div>
    <Menu />
  </header>
</template>

<script>
import Menu from './Menu.vue'
export default {
  components: { Menu },
  name: 'Navbar',
  data: {},
  methods: {},
}
</script>
