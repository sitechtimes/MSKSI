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
