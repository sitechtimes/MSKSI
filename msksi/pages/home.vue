<template>
<div>
  <Navbar/>
  <CommSpot/>
  <Footer/>
</div>
</template>

<script>
import CommSpot from '~/components/CommSpot.vue';
export default {
    name: "home",
    components: { CommSpot }
}
</script>
