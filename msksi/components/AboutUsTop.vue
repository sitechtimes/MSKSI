<template>
  <div class="AboutUsTop">
    <h2 class="heading fade">Our <span class="h mission">Mission</span></h2>
    <h3 id="text" class="text fade">
      {{ textarea }}
    </h3>
  </div>
</template>
<script>
// import { resourceLimits } from 'worker_threads'

export default {
  name: 'AboutUsTop',
  data() {
    return {
      textarea: `      My Sister’s Keeper Staten Island (MSKSI) founded in November 2018, creates
      a support system to build a community for social, emotional, and academic
      support and leadership empowerment for MSKSI members from elementary to
      high school students in District 31. MSKSI fosters opportunities to build
      leadership, encourage sisterhood and build inner confidence (self-esteem)
      through workshops, sister circles, leadership events and community-based
      projects. My Sister’s Keeper Staten Island empowers young people to become
      impactful/inspiring, self-motivating, powerful transformative leaders.
      Giving a safe space and opportunity to our marginalized MSKSI young people
      in order to have a voice, respect and rapport in a diverse community.`,
    }
  },
  mounted() {
    this.scrollFadeGeneral()
  },
  methods: {
    scrollFadeGeneral() {
      const genTL = this.$gsap.timeline({})
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
.AboutUsTop {
  padding-bottom: 9rem;
  background-color: #333043;
}
.mission {
  color: var(--darkpink);
  font-size: var(--h1);
}
.blockText {
  display: flex;
  align-items: center;
}
.text {
  color: var(--white);
  justify-content: center;
  line-height: 7rem;
}

@media only screen and (max-width: 1500px) {
  .mission {
    font-size: var(--h2);
  }
}
@media only screen and (max-width: 1032px) {
  .mission {
    font-size: var(--h2);
  }
  .text {
    margin: 2rem 8rem 0 8rem;
    line-height: 5rem;
  }
  .blockText {
    display: initial;
  }
  .tts-container {
    text-align: center;
    margin-top: 1rem;
    display: flex;
    justify-content: space-evenly;
    margin-left: auto;
    margin-right: auto;
    width: 15rem;
  }
}
@media only screen and (max-width: 770px) {
  .AboutUsTop {
    padding-bottom: 5rem;
  }
  .mission {
    font-size: var(--h3);
  }
  .text {
    margin-top: 2rem;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    line-height: 4rem;
  }
}
@media only screen and (max-width: 500px) {
  .mission {
    font-size: var(--h4);
  }
  .text {
    margin-top: 2rem;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    line-height: 3.5rem;
  }
}
</style>
