<template>
  <div>
    <AboutUsTop />
    <AboutUsMid />
    <AboutUsBottom />
    <Agendas />
  </div>
</template>

<script>
import AboutUsTop from '~/components/AboutUsTop.vue'
import AboutUsMid from '~/components/AboutUsMid.vue'
import AboutUsBottom from '~/components/AboutUsBottom.vue'
import Agendas from '~/components/Agendas.vue'
export default {
  components: { AboutUsTop, AboutUsMid, AboutUsBottom, Agendas },
   head() {
    return {
      title: "About | My Sister's Keeper Staten Island"
    };
  },
}
</script>
