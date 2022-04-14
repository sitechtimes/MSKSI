<template>
  <div class="menu">
    <input type="checkbox" id="active" />
    <label for="active" class="menu-btn"><div class="menu-icon"></div></label>
    <label for="active" class="close"></label>
    <div class="wrapper">
      <ul class="link-container">
        <li class="link">
          <router-link class="menu-router" to="/Home"> Home </router-link>
        </li>
        <li class="link">
          <router-link class="menu-router" to="/AboutUs">
            About Us
          </router-link>
        </li>
        <li class="link">
          <router-link class="menu-router" to="/Calendar">
            Calendar
          </router-link>
        </li>
        <li class="link">
          <router-link class="menu-router" to="/Gallery"> Gallery </router-link>
        </li>
        <li class="link">
          <router-link class="menu-router" to="/Resources">
            Resources
          </router-link>
        </li>
        <li class="link">
          <router-link class="menu-router" to="/JoinUs"> Join Us </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  data: {},
  methods: {},
}
</script>
