<template>
  <div>
    <AboutUsTop />
    <AboutUsMid />
    <AboutUsBottom />
    <Agenda />
  </div>
</template>

<script>
import AboutUsTop from '~/components/AboutUsTop.vue'
import AboutUsMid from '~/components/AboutUsMid.vue'
import AboutUsBottom from '~/components/AboutUsBottom.vue'
export default {
  components: { AboutUsTop, AboutUsMid, AboutUsBottom },
}
</script>
