<template>
  <div>
    <HomeTop />
    <CommSpot />
    <HomeMonth />
  </div>
</template>

<script>
import CommSpot from '~/components/CommSpot.vue'
import HomeTop from '~/components/HomeTop.vue'
import HomeMonth from '~/components/HomeMonth.vue'
export default {
  name: 'home',
  components: { HomeMonth, CommSpot, HomeTop },
}
</script>
