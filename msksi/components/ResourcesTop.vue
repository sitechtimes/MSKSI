<template>
  <div class="resourcestop">
    <h2 class="heading">Resources</h2>
  </div>
</template>

<script>
export default {
  name: 'ResourcesTop',
}
</script>
<style scoped>
.resourcestop {
  background-color: #333043;
  height: 100rem;
}
.heading {
  color: var(--yellow);
}
@media only screen and (max-width: 810px) {
  .heading {
    font-size: var(--h3);
    margin-left: 4rem;
    margin-top: 0rem;
  }
}
</style>
