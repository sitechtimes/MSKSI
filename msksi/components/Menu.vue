<template>
  <div class="menu">
    <div class="thing">
      <div id="dropdown" class="dropdown-content">
        <router-link class="menuRouter" to="/Home"> Home </router-link>
        <router-link class="menuRouter" to="/AboutUs"> About Us </router-link>
        <router-link class="menuRouter" to="/Calendar"> Calendar </router-link>
        <router-link class="menuRouter" to="/Gallery"> Gallery </router-link>
        <router-link class="menuRouter" to="/Resources">
          Resources
        </router-link>
        <router-link class="menuRouter" to="/JoinUs"> Join Us </router-link>
        <div class="thingss">
          <div class="twoo">
            <button class="menuBtn" @click="toggleMenu()" ref="menuBtn">
              <div class="line one"></div>
              <div class="line two"></div>
              <div class="line three"></div>
            </button>
          </div>
          <div class="threee"></div>
          <div class="fourr"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  data: {},
  methods: {
    toggleMenu() {
      this.$refs.menuBtn.innerHTML = 'Hello'
    },
  },
}
</script>
