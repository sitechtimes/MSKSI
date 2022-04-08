<template>
  <div class="menu">
    <div class="menuBtn" @click="toggleMenu">
      <button class="menuIcon" ref="menuIcon">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </button>
    </div>
    <div class="linkContainer">
      <ul class="mobileNavLinks">
        <li class="link">
          <router-link class="menuRouter" to="/Home"> Home </router-link>
        </li>
        <li class="link">
          <router-link class="menuRouter" to="/AboutUs"> About Us </router-link>
        </li>
        <li class="link">
          <router-link class="menuRouter" to="/Calendar">
            Calendar
          </router-link>
        </li>
        <li class="link">
          <router-link class="menuRouter" to="/Gallery"> Gallery </router-link>
        </li>
        <li class="link">
          <router-link class="menuRouter" to="/Resources">
            Resources
          </router-link>
        </li>
        <li class="link">
          <router-link class="menuRouter" to="/JoinUs"> Join Us </router-link>
        </li>
      </ul>
    </div>
    <div class="block"></div>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  data: {},
  methods: {
    toggleMenu() {
      this.isNotVisible = !this.isNotVisible
    },
  },
}
</script>
