<template>
  <div class="newmonth">
    <h2 class="heading fade">{{ month }}</h2>
    <h3 class="subheading fade">{{ subheader }}</h3>
    <div class="postcontent fade">
      <p class="text">{{ description }}</p>
      <img :src="image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MonthPost',
  props: {
    month: String,
    subheader: String,
    description: String,
    image: String,
  },
  mounted() {
    this.scrollFadeGeneral()
  },
  methods: {
    scrollFadeGeneral() {
      const genTL = this.$gsap.timeline({
        scrollTrigger: {
          trigger: '.fade',
          start: 'top bottom-=40%',
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
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300&family=Sora:wght@800&display=swap');

img {
  height: 40rem;
}
.heading {
  text-align: center;
  padding-top: 4rem;
}
h3 {
  color: var(--darkpink);
  text-align: center;
  margin: 1rem 0 0 0;
}
.text {
  font-size: var(--subheadingjum);
  margin: 0 4rem 0 4rem;
  color: var(--white);
  line-height: 2;
}

.postcontent {
  display: flex;
  align-items: center;
  padding: 5rem 6rem 0 6rem;
}
.newmonth {
  padding-bottom: 8rem;
}
img {
  border-style: solid;
  border-width: 5px;
  border-color: var(--darkpink);
}

@media screen and (max-width: 1500px) {
  .postcontent {
    flex-wrap: wrap-reverse;
    padding-top: 2rem;
  }
  .newmonth {
    padding-bottom: 5rem;
  }
  img {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3rem;
    height: 35rem;
  }
  .text {
    font-size: var(--h5);
  }
}
@media screen and (max-width: 770px) {
  img {
    height: 20rem;
  }
  .text {
    font-size: var(--h6);
  }
}
@media screen and (max-width: 500px) {
  img {
    height: 15rem;
  }
  .text {
    margin: 0;
  }
}
</style>
