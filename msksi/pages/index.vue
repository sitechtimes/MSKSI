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

<style>
@import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=ABeeZee&family=Black+Han+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@200&display=swap');
</style>
