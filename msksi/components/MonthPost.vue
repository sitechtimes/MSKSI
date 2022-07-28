<template>
  <div class="newmonth">
    <h2 class="fade">{{ month }}</h2>
    <h3 class="fade">{{ subheader }}</h3>
    <div class="postcontent fade">
      <p>{{ description }}</p>
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
h2 {
  font-size: var(--h1);
  color: var(--yellow);
  text-align: center;
  font-family: 'Sora', sans-serif;
  padding-top: 8rem;
}
h3 {
  font-size: var(--h2);
  color: var(--darkpink);
  text-align: center;
  font-family: 'Sora', sans-serif;
}
p {
  font-size: 3rem;
  padding: 0 4rem 2rem 4rem;
  font-family: 'ABeeZee', sans-serif;
  font-weight: 300;
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

@media screen and (max-width: 1500px) {
  .postcontent {
    flex-wrap: wrap-reverse;
  }
  img {
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 6rem;
    height: 35rem;
  }
}

@media screen and (max-width: 450px) {
  .newmonth {
    padding-bottom: 0rem;
  }
  .postcontent {
    display: inline-block;
    padding: 2rem 0 0 0;
    text-align: center;
  }
  h2 {
    font-size: var(--h3);
    padding-top: 6rem;
  }
  h3 {
    font-size: 3rem;
  }
  p {
    font-size: 2.3rem;
    padding: 0.4rem 4rem 1rem 4rem;
  }
  img {
    height: 24rem;
    padding-bottom: 2rem;
    justify-content: center;
  }
}
</style>
