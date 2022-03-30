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
    <div class="menuBtn">
      <button>
        <div class="line one"></div>
        <div class="line two"></div>
        <div class="line three"></div>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NuxtTutorial',
}
</script>
