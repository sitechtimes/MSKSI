<template>
  <div>
    <Navbar />
    <HomeTop />
    <CommSpot />
    <Footer />
  </div>
</template>

<script>
import HomeTop from '~/components/HomeTop.vue'

export default {
  components: { HomeTop },
  name: 'home',
}
</script>
