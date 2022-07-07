<template>
  <div class="menu">
    <input type="checkbox" id="active" />
    <label for="active" class="menu-btn"><span></span></label>
    <label for="active" class="close"></label>
    <div id="_nav__menu" class="wrapper">
      <ul class="link-container">
        <li   v-on:click="toggleOff()" class="link">
          <router-link class="menu-router router" to="/"> Home </router-link>
        </li>
        <li  v-on:click="toggleOff()" class="link">
          <router-link class="menu-router router" to="/AboutUs">
            About Us
          </router-link>
        </li>
        <li  v-on:click="toggleOff()" class="link">
          <router-link class="menu-router router" to="/Calendar">
            Calendar
          </router-link>
        </li>
        <li  v-on:click="toggleOff()" class="link">
          <router-link class="menu-router router" to="/Gallery"> Gallery </router-link>
        </li>
        <li  v-on:click="toggleOff()" class="link">
          <router-link class="menu-router router" to="/Resources">
            Resources
          </router-link>
        </li>
        <li  v-on:click="toggleOff()" class="link">
          <router-link class="menu-router router" to="/JoinUs"> Join Us </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  methods: {
    toggleOff() {
      var toggleOff = document.querySelector('#_nav__menu');
      toggleOff.style.right = '-100%';
    }
  },
}
</script>
