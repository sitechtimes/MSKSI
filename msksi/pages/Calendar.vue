<template>
  <div>
    <CalendarTop />
    <CalendarMid />
    <Agendas />
  </div>
</template>

<script>
import CalendarTop from '~/components/CalendarTop.vue'
import Agendas from '~/components/Agendas.vue'
export default {
  components: { CalendarTop, Agendas },
}
</script>
