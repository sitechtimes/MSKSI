<template>
  <div class="menu">
    <button class="menuIcon" v-if="isNotVisible" @click="toggleMenu">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </button>

    <div class="menuBtn" v-else>
      <button class="menuIcon">
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
