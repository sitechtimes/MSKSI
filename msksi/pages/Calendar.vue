<template>
  <div>
    <CalendarTop />
    <CalendarMid />
  </div>
</template>

<script>
import CalendarTop from '~/components/CalendarTop.vue'
export default {
  components: { CalendarTop },
    head() {
    return {
      title: "Calender | My Sister's Keeper Staten Island"
    };
  },
}
</script>
