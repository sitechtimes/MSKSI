<template>
  <div>
    <HomeTop />
    <CommSpot />
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
