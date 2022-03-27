<template>
  <div class="about">
      <Tutorial />
      <h2>About us </h2>
      <Footer />
  </div>
</template>


<script>
import Tutorial from '../components/Tutorial.vue';
export default {
  components: { Tutorial },
  name: "AboutUs",
};
</script>

<style scoped>
img{
  width: 30rem;
  height: auto;
  margin-top: 5rem;
}
</style>