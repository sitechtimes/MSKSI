<template>
  <div class="menu">
    <div class="thing">
      <div id="dropdown" class="dropdown-content">
        <div class="thingss">
          <div class="twoo">
            <button class="menuBtn" @click="toggleMenu()" ref="menuBtn">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </button>
          </div>
          <div class="threee">
            <li>
              <router-link class="menuRouter" to="/Home"> Home </router-link>
            </li>
            <li>
              <router-link class="menuRouter" to="/AboutUs">
                About Us
              </router-link>
            </li>
            <li>
              <router-link class="menuRouter" to="/Calendar">
                Calendar
              </router-link>
            </li>
            <li>
              <router-link class="menuRouter" to="/Gallery">
                Gallery
              </router-link>
            </li>
            <li>
              <router-link class="menuRouter" to="/Resources">
                Resources
              </router-link>
            </li>
            <li>
              <router-link class="menuRouter" to="/JoinUs">
                Join Us
              </router-link>
            </li>
          </div>
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
