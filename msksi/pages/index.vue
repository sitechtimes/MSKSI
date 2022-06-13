<template>
  <div>
    <HomeTop />
    <CommSpot />
    <HomeMonth />
    <HomeEvents />
  </div>
</template>

<script>
import CommSpot from '~/components/CommSpot.vue'
import HomeTop from '~/components/HomeTop.vue'
export default {
  name: 'home',
  components: { HomeTop, CommSpot },
}
</script>
