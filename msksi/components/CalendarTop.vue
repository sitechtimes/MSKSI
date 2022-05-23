<template>
  <div class="calendartop">
    <h2 class="heading">Calendar</h2>
  </div>
</template>
<script>
export default {
  name: 'CalendarTop',
}
</script>

<style scoped>
.heading {
  color: var(--yellow);
  font-size: var(--h1);
}
.calendartop {
  background-color: var(--navyblue);
  height: 100rem;
}
@media only screen and (max-width: 810px) {
  .heading {
    font-size: var(--h3);
  }
}
</style>
