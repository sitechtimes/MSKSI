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
       script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
      title: "Home | My Sister's Keeper Staten Island"
    }
  }
}
</script>
