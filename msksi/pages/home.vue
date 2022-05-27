<template>
  <div>
    <Navbar />
    <HomeTop />
    <CommSpot />
    <Footer />
  </div>
</template>

<script>

import CommSpot from '~/components/CommSpot.vue'
import HomeTop from '~/components/HomeTop.vue'
export default {
  name: 'home',
  components: { CommSpot, HomeTop },
}
</script>
