<template>
  <div class="menu">
    <input type="checkbox" id="active" />
    <label for="active" class="menu-btn"><span></span></label>
    <label for="active" class="close"></label>
    <div class="wrapper">
      <ul class="link-container">
        <li class="link">
          <router-link class="menu-router router" to="/"> Home </router-link>
        </li>
        <li class="link">
          <router-link class="menu-router router" to="/AboutUs">
            About Us
          </router-link>
        </li>
        <li class="link">
          <router-link class="menu-router router" to="/Calendar">
            Calendar
          </router-link>
        </li>
        <li class="link">
          <router-link class="menu-router router" to="/Gallery"> Gallery </router-link>
        </li>
        <li class="link">
          <router-link class="menu-router router" to="/Resources">
            Resources
          </router-link>
        </li>
        <li class="link">
          <router-link class="menu-router router" to="/JoinUs"> Join Us </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  data(){
    return{
      checked: Boolean,
    }
  },
  methods: {
    toggleOn() {
      let menuOpen = document.querySelector('.wrapper');
      menuOpen.classList.remove('hide');
      this.checked = true;
    },
      toggleOff() {
      let menuOpen = document.querySelector('.wrapper');
      menuOpen.classList.add('hide')
      this.checked = false;
    }
  },
}
</script>
