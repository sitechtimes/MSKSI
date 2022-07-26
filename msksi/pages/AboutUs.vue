<template>
  <div>
    <AboutUsTop />
    <AboutUsMid />
    <AboutUsBottom />
  </div>
</template>

<script>
import AboutUsTop from '~/components/AboutUsTop.vue'
import AboutUsMid from '~/components/AboutUsMid.vue'
import AboutUsBottom from '~/components/AboutUsBottom.vue'
export default {
  components: { AboutUsTop, AboutUsMid, AboutUsBottom },
  head() {
    return {
      title: "About | My Sister's Keeper Staten Island",
    }
  },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=ABeeZee&family=Black+Han+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@200&display=swap');
</style>