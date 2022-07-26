<template>
  <div>
    <CalendarTop />
    <Agendas />
  </div>
</template>

<script>
import CalendarTop from '~/components/CalendarTop.vue'
import Agendas from '~/components/Agendas.vue'
export default {
  components: { CalendarTop, Agendas },
   head() {
    return {
      title: "Calender | My Sister's Keeper Staten Island"
    };
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