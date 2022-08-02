<template>
  <div class="Gallery">
    <h2 class="heading fade">
      Photo <span class="gall heading fade">Gallery</span>
    </h2>
    <div class="Albums">
      <Album
        v-for="album in albums"
        :key="album.slug"
        :title="album.title"
        :img="album.img"
        :link="album.link"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'GalleryTest',
  components: {},
  data() {
    return {
      albums: [],
    }
  },
  async fetch() {
    let albums = await this.$content('albums').sortBy('order', 'desc').fetch()
    this.albums = albums
    console.log(this.albums)
  },
  mounted() {
    this.staggerFly()
    this.scrollFadeGeneral()
  },
  updated() {
    this.staggerFly()
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

          duration: 0.5,
        }
      )
    },
    staggerFly() {
      const staggerTL = this.$gsap.timeline({
        delay: 0.3,
        onComplete: function () {
          document.querySelectorAll('.polaroid').forEach((el) => {
            el.style.transform = null
            el.style.transition = 'all 0.3s'
          })
          console.log('no transform')
        },
      })
      staggerTL
        .fromTo(
          '.polaroid',
          {
            y: 70,
            stagger: 0.05,
            duration: 0.5,
            opacity: 0,
          },
          { y: -8, stagger: 0.05, duration: 0.5, opacity: 1 }
        )
        .to(
          '.polaroid',
          {
            y: 0,
            stagger: 0.05,
            duration: 0.5,
          },
          '<+0.5'
        )
    },
  },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@500&display=swap');
a {
  cursor: url('~/assets/images/hoverBtnCursor.png'), auto;
}
.Gallery {
  background-color: #333043;
  padding-bottom: 10rem;
}
.gall {
  color: var(--darkpink);
  margin: 0;
  /* font-size: var(--h1); */
}
.name {
  font-family: 'ABeeZee', sans-serif;
  font-style: normal;
  color: var(--navyblue);
  text-align: center;
  font-size: var(--h5);
  width: 20rem;
  display: block;
  font-weight: bolder;
  text-align: center;
  margin-top: 3rem;
}
.Albums {
  display: grid;
  background-color: #333043;
  grid-template-columns: repeat(auto-fill, minmax(23rem, 1fr));
  grid-gap: 7rem;
  margin: 11rem;
  margin-top: 4rem;
  justify-items: center;
  grid-template-rows: auto;
  padding-bottom: 0rem;
}
.polaroid {
  background-color: white;
  height: 36rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.polaroid:hover {
  transform: scale(1.02);
}
#picture {
  height: 20rem;
  width: 20rem;
  margin: 3rem;
  margin-bottom: 0;
  margin-top: 0;
  z-index: 1;
  background-color: rgb(194, 194, 194);
}

@media only screen and (max-width: 1032px) {
  .polaroid-container {
    grid-gap: 5rem;
    margin: 5rem;
  }
}
@media only screen and (max-width: 500px) {
  .polaroid-container {
    margin-top: 3rem;
  }
  .polaroid {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 48vw;
    height: 27rem;
    margin: 0 auto 0 auto;
  }
  #picture {
    margin-top: 2rem;
    width: 15rem;
    height: 15rem;
  }
  .name {
    margin-top: 0rem;
    margin-bottom: 1rem;
    font-size: var(--h6);
  }
  .Albums {
    margin: 0;
    margin-top: 4rem;
  }
}
</style>
