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
import Agenda from '../components/Agenda.vue'
export default {
  components: { AboutUsTop, AboutUsMid, AboutUsBottom, Agenda },
    head() {
    return {
      title: "About | My Sister's Keeper Staten Island"
    };
  },
}
</script>
