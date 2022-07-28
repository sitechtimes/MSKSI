<template>
  <div class="calendartop">
    <h2 class="heading">Calendar</h2>
    <div class="calendarFlex">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23333043&ctz=America%2FNew_York&title=My%20Sister's%20Keeper%20Calendar&showNav=1&src=Y18ydW03amlramhwYTFtdHMzZnBuZGczdW04a0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y19jbGFzc3Jvb201NWEwNzUwY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23AD1457&color=%230B8043&color=%23202124"
        style="border-width: 0"
        width="800"
        height="600"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CalendarTop',
}
</script>

<style scoped>
.calendartop {
  background-color: #333043;
  padding-bottom: 70rem;
}
.calendarFlex {
  display: flex;
  margin: 3rem auto 0 auto;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 0;
  overflow: visible;
}
.calendarFlex iframe {
  position: absolute;
  top: 0;
  width: 70%;
  height: 65rem;
}
@media only screen and (max-width: 1500px){
    .calendarFlex {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 0rem;
  height: 0;
  overflow: visible;
}
.calendarFlex iframe {
  position: absolute;
  top: 0;
  width: 80%;
  height: 55rem;
  margin-top: 3rem;
}
.calendartop{
  padding-bottom: 60rem;
}
}
@media only screen and (max-width: 710px){
    .calendarFlex {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 0;
  overflow: visible;
}
.calendarFlex iframe {
  position: absolute;
  top: 0;
  width: 80%;
  height: 40rem;
  margin-top: 3rem;
}
.calendartop{
  padding-bottom: 45rem;
}
}
@media only screen and (max-width: 520px) {
  .calendartop{
  padding-bottom: 38rem;
}
  .calendarFlex {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 0;
  overflow: visible;
}
.calendarFlex iframe {
  position: absolute;
  top: 0;
  width: 80%;
  height: 33rem;
  margin-top: 3rem;
}
}
</style>
