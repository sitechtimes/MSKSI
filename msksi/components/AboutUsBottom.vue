<template>
  <div id="AboutUsBottom">
    <h2 class="heading gao fade3">Goals and Outcomes</h2>
    <h3 class="will fade3">MSKSI members will:</h3>
    <h4 class="text texti fade3">
      Be able to adapt healthy social and emotional habits that will support
      building positive internal self-esteem. Be mindful how others appear and
      show up. Have grace, dignity and leave room for error and forgiveness.
    </h4>
    <h4 class="text texti fade3">
      Have a voice, opportunity and forum to grow in the MSKSI community. MSKSI
      focuses on equity in support of all students with a lens on our
      marginalized groups; however MSKSI is not just black and brown students,
      all are welcome.
    </h4>
  </div>
</template>
<script>
export default {
  name: 'AboutUsBottom',
  mounted() {
    this.scrollFadeGeneral()
  },
  updated() {
    this.scrollFadeGeneral()
  },
  methods: {
    scrollFadeGeneral() {
      const genTL = this.$gsap.timeline({
        scrollTrigger: {
          trigger: '.gao',
          start: 'top bottom-=30%',
          scrub: false,
        },
      })
      genTL.fromTo(
        '.fade3',
        {
          y: 40,
          opacity: 0,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.5,
        }
      )
    },
  },
}
</script>
<style scoped>
#AboutUsBottom {
  background-color: #333043;
  padding-bottom: 10rem;
}
.gao {
  opacity: 0;
}
.heading {
  text-align: center;
  color: var(--darkpink);
  font-family: 'Sora', sans-serif;
  font-weight: bolder;
  font-style: normal;
}
.will {
  color: var(--yellow);
}
.texti {
  display: block;
  color: var(--white);
  justify-content: center;
}
.goal {
  color: var(--navyblue);
}
.our {
  color: var(--darkpink);
  font-size: var(--h1);
}
.mission {
  color: var(--yellow);
  font-size: var(--h1);
}
@media only screen and (max-width: 1500px) {
  #AboutUsBottom {
    padding-bottom: 8rem;
  }
  .texti {
    margin-top: 4rem;
  }
  .will {
    margin-top: 4rem;
  }
}
@media only screen and (max-width: 1032px) {
  .will {
    margin: 3rem 8rem 0 8rem;
  }
  .texti {
    margin: 2rem 8rem 0 8rem;
  }
  #AboutUsBottom {
    padding-bottom: 6rem;
  }
}
@media only screen and (max-width: 770px) {
  .texti {
    margin: 2rem 6rem 0 6rem;
  }
  h2 {
    text-align: center;
    width: 100%;
  }
  .will {
    margin: 2rem 6rem 0 6rem;
    margin-top: 4rem;
  }
}
@media only screen and (max-width: 500px) {
  .texti {
    margin: 2rem 4rem 0 4rem;
  }
  h2 {
    text-align: center;
    width: 100%;
  }
  .will {
    margin: 2rem 4rem 0 4rem;
  }
}
</style>
