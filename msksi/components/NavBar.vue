<template>
  <header id="navbar">
    <h1 class="logo">MSKSI</h1>
    <div class="nav">
      <router-link class="router tohome" to="/">Home</router-link>
      <router-link class="router toaboutus" to="/AboutUs">About Us</router-link>
      <router-link class="router tocalendar" to="/Calendar">Calendar</router-link>
      <router-link class="router togallery" to="/Gallery">Gallery</router-link>
      <router-link class="router toresources" to="/Resources">Resources</router-link>
      <router-link class="router tojoinus" to="/JoinUs">Join Us</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NuxtNavBar',
}
</script>

<style scoped>
#navbar{
overflow-x: auto;
}
.logo{
    display: inline-block;
}
.router{
    display: inline-block;
}

</style>