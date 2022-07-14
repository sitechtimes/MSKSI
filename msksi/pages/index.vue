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
import HomeMonth from '~/components/HomeMonth.vue'
import HomeEvents from '~/components/HomeEvents.vue'
export default {
  name: 'home',
  components: { HomeEvents, HomeMonth, CommSpot, HomeTop },
    head() {
    return {
      title: "Home | MSKSI "
    };
  },
}
</script>
