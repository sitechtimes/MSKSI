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
    <div class="menu">
      <button class="menuBtn" @click="displayMenu()" ref="menuBtn">
        <div class="line one"></div>
        <div class="line two"></div>
        <div class="line three"></div>
      </button>
      <div id="dropdown" class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  methods: {
    displayMenu() {
      this.$refs.menuBtn.innerText = 'Hello'
    },
  },
}
</script>
