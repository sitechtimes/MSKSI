<template>
  <div class="menu">
    <input v-model="checked" @click="toggle" type="checkbox" id="active" />
    <label for="active" class="menu-btn"><span></span></label>
    <label for="active" class="close"></label>
    <div v-if="show" class="wrapper">
      <ul class="link-container">
        <li class="link" @click="toggle">
          <router-link class="menu-router" to="/"> Home </router-link>
        </li>
        <li class="link" @click="toggle">
          <router-link class="menu-router" to="/AboutUs">
            About Us
          </router-link>
        </li>
        <li class="link" @click="toggle">
          <router-link class="menu-router" to="/Calendar">
            Calendar
          </router-link>
        </li>
        <li class="link" @click="toggle">
          <router-link class="menu-router" to="/Gallery"> Gallery </router-link>
        </li>
        <li class="link" @click="toggle">
          <router-link class="menu-router" to="/Resources">
            Resources
          </router-link>
        </li>
        <li class="link" @click="toggle">
          <router-link class="menu-router" to="/JoinUs"> Join Us </router-link>
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
      checked: false,
      show: false,
    }
  },
  methods: {
    toggle() {
      this.show = !this.show
      this.checked = !this.checked
    }
    // toggleOn() {
    //   let menuOpen = document.querySelector('.wrapper');
    //   menuOpen.classList.remove('hide');
      
    //   this.checked = true;
    // },
    //   toggleOff() {
    //   let menuOpen = document.querySelector('.wrapper');
    //   menuOpen.classList.add('hide')
  
    //   this.checked = false;
    // }
  },
}
</script>
<style>
  .hide{
  z-index: -2;
  right: -100%;
  transition: all 0.6s ease-in-out;
  }
</style>