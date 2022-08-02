<template>
  <div class="calendartop">
    <h2 class="heading fade">Calendar</h2>
    <div class="calendarFlex fade">
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
  mounted() {
    this.scrollFadeGeneral()
  },
  methods: {
    scrollFadeGeneral() {
      const genTL = this.$gsap.timeline({
        scrollTrigger: {
          trigger: '.fade',
          start: 'top bottom',
          scrub: false,
        },
      })
      genTL.fromTo(
        '.fade',
        {
          y: 40,
          opacity: 0,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          duration: 0.5,
        }
      )
    },
  },
}
</script>

<style scoped>
.calendartop {
  background-color: #333043;
  padding-bottom: 70rem;
}
.calendarFlex {
  display: flex;
  margin: 1rem auto 0 auto;
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
  height: 68rem;
}
@media only screen and (max-width: 1500px) {
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
  .calendartop {
    padding-bottom: 60rem;
  }
}
@media only screen and (max-width: 770px) {
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
    height: 45rem;
    margin-top: 3rem;
  }
  .calendartop {
    padding-bottom: 50rem;
  }
}
@media only screen and (max-width: 500px) {
  .calendartop {
    padding-bottom: 0rem;
    display: none;
  }
}
</style>
