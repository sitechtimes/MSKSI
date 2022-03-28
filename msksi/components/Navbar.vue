<template>
<header id="navbar">
<h1 class="logo">MSKSI</h1>
<div class="nav"> 
    <router-link to="/Home"> Home </router-link>
    <router-link to="/AboutUs"> About Us   </router-link>
    <router-link to="/Calendar"> Calendar </router-link>
    <router-link to="/Gallery"> Gallery </router-link>
    <router-link to="/Resources"> Resources </router-link>
    <router-link to="/JoinUs"> Join Us </router-link>
</div>
</header>
</template>


<script>
export default {
  name: 'NuxtTutorial',
}
</script>

<style scoped>

</style>