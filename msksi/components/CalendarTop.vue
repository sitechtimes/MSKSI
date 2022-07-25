<template>
  <div class="calendartop">
    <h2 class="heading">Calendar</h2>
    <div class="calendarFlex"><iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23333043&ctz=America%2FNew_York&title=My%20Sister's%20Keeper%20Calendar&showNav=1&src=Y18ydW03amlramhwYTFtdHMzZnBuZGczdW04a0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb201NWEwNzUwY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23AD1457&color=%230B8043&color=%23202124" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe></div>
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
  background-color: #333043;
  height: 100rem;
}
.calendarFlex {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  position: relative; 
  padding-bottom:40%;
  height: 0; 
  overflow: hidden;
}
.calendarFlex iframe {
position: absolute; 
top:0; 
/* left: 0;  */
width: 70%; 
height: 100%;
}
@media only screen and (max-width: 810px) {
  .heading {
    font-size: var(--h3);
    margin-left: 4rem;
  }
}
@media only screen and (max-width: 510px) {
  .heading {
    font-size: var(--h3);
    margin-left: 4rem;
  }
}
</style>
