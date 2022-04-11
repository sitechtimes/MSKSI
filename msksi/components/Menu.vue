<template>
  <div class="menu">
    <input type="checkbox" id="menu-toggle" />
    <label for="menu-toggle" class="nav-menu">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </label>
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
