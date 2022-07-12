<template>
  <div class="homespotlight">
    <div class="CSbutton-holder">
      <router-link class="navRouter CSroutermore router" to="/AboutUs">
        Read More
      </router-link>
      <div class="CSreadmore"></div>
    </div>
    <div class="spotlight-images">
      <img id="spotlight" src="~/assets/images/spotlight.png" alt="" />
      <div id="CSimg-holder">
        <img id="CSimg" :src="post.img_main" alt="" />
      </div>
    </div>

    <div class="CStext-holder">
      <h2 class="heading commspot">Community Spotlight</h2>
      <nuxt-content :document="post" />
    </div>

    <div class="CSimg-reel">
      <div class="square-cut">
        <img class="CSimg-r" :src="post.img_reel1" alt="" />
      </div>
      <div class="square-cut">
        <img class="CSimg-r" :src="post.img_reel2" alt="" />
      </div>
      <div class="square-cut">
        <img class="CSimg-r" :src="post.img_reel3" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommSpot',

  data() {
    return {
      post: 'Loading',
    }
  },
  async fetch() {
    let posts = await this.$content('comm-spot').only(['slug']).fetch()
    let post = await this.$content(
      'comm-spot',
      posts[posts.length - 1].slug
    ).fetch()
    this.post = post
  },
  mounted() {
    this.scrollFade()
  },
  methods: {
    scrollFade() {
      const fadeTL = this.$gsap.timeline({
        scrollTrigger: {
          trigger: '#CSimg-holder',
          start: 'top bottom',
          end: 'top 100px',
          scrub: false,
        },
      })

      fadeTL.from('#spotlight ', {
        rotate: -45,
        opacity: 0,
        duration: 0.8,
        ease: 'ease-out',
      })
      fadeTL.from(
        '#CSimg-holder, .CStext-holder',
        {
          opacity: 0,
          duration: 0.8,
          y: 80,
          ease: 'ease-out',
        },
        '<'
      )
    },
  },
}
</script>

<style>
.homespotlight {
  height: 100rem;
  background-color: var(--white);
  position: relative;
  display: flex;
  flex-direction: row;
}

.spotlight-images {
  width: 68rem;
  height: 75rem;
  position: relative;
}

#spotlight {
  width: 80rem;
  margin-left: 2rem;
  margin-top: -0.25rem;
  filter: saturate(80%);
  transform-origin: 0% 0%;
}

#CSimg-holder {
  width: 40rem;
  height: 40rem;
  border-radius: 50%;
  position: absolute;
  bottom: 0%;
  right: 0%;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

#CSimg {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.CStext-holder {
  position: relative;
  height: 100%;
  text-align: left;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 6rem;
  margin-top: -10rem;
}
.commspot {
  color: var(--darkpink);
  left: 0;
  right: 0;
  top: 0;
  margin-left: 0;
  padding-top: 0;
  margin-right: 12rem;
  font-size: 5rem;
}

.nuxt-content {
  font-size: 4rem;
  color: var(--navyblue);
  font-family: 'ABeeZee', sans-serif;
  margin-top: 3rem;
  margin-right: 28rem;
  line-height: 5rem;
}

.CSreadmore {
  height: 125rem;
  width: 125rem;
  background-color: var(--tpnavyblue);
  clip-path: polygon(100% 27%, 68% 100%, 100% 100%);
  position: absolute;
  bottom: 0;
  right: 0;
  transition: all 0.3s;
  z-index: 10;
}

.CSroutermore:hover + .CSreadmore {
  background-color: var(--darknavyblue);
}

.CSroutermore:hover {
  transform: scale(1.025);
}

.CSroutermore {
  font-size: 2.6rem;
  color: var(--white);
  font-family: 'ABeeZee', sans-serif;
  font-weight: bold;
  bottom: 20rem;
  right: 3rem;
  position: absolute;
  z-index: 11;
  transition: all 0.2s;
}

.CSimg-reel {
  position: absolute;
  bottom: 15rem;
  left: 74rem;
  height: 20rem;
  width: 62rem;
  display: flex;
  justify-content: space-between;
}

.CSimg-r {
  object-fit: cover;
}

.square-cut {
  height: 20rem;
  width: 20rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

/*media queries*/
@media only screen and (max-width: 1750px) {
  .CSimg-reel {
    width: 47rem;
  }
  .square-cut {
    height: 15rem;
    width: 15rem;
  }
}
@media only screen and (max-width: 1560px) {
  #spotlight {
    width: 60rem;
  }

  #CSimg-holder {
    width: 30rem;
    height: 30rem;
  }

  .spotlight-images {
    height: 55rem;
    width: 50rem;
  }

  .nuxt-content {
    margin-right: 32rem;
  }
  .CSimg-reel {
    bottom: 3rem;
    left: auto;
    right: 45rem;
    width: 78rem;
    height: 30rem;
  }
  .square-cut {
    height: 25rem;
    width: 25rem;
  }
}

@media only screen and (max-width: 1320px) {
  .homespotlight {
    flex-direction: column;
    height: fit-content;
  }

  #spotlight {
    width: 65rem;
  }

  #CSimg-holder {
    width: 33rem;
    height: 33rem;
  }

  .CStext-holder {
    width: 80vw;
    justify-content: center;
    padding: 16rem 0 50rem 0;
    align-self: center;
  }

  .commspot,
  .nuxt-content {
    margin-right: 0;
  }

  .spotlight-images {
    height: 64rem;
    width: 57rem;
    margin-left: 41vw;
    transform: translateX(-50%);
  }

  .CSreadmore {
    width: 30rem;
    clip-path: none;
    height: 7rem;
    margin-bottom: 1.3rem;
    border-radius: 2rem;
    bottom: 4rem;
  }

  .CSroutermore {
    bottom: 7rem;
  }

  .CSreadmore,
  .CSroutermore {
    margin-left: 50vw;
    transform: translateX(-50%);
    right: auto;
  }

  .CSroutermore:hover > .CSarrow {
    opacity: 1;
  }

  .icon {
    height: 0;
    width: 0;
    border-radius: 0;
    margin-left: 0;
    margin-right: 0;
  }
  .CSimg-reel {
    bottom: 13rem;
    right: auto;
    left: 50%;
    transform: translateX(-50%);
  }
}
@media only screen and (max-width: 900px) {
  .square-cut {
    height: 20rem;
    width: 20rem;
  }
  .CSimg-reel {
    width: 62rem;
  }
}
@media only screen and (max-width: 500px) {
  #spotlight {
    width: 33rem;
  }

  #CSimg-holder {
    width: 20rem;
    height: 20rem;
  }
  .spotlight-images {
    width: 31rem;
    height: 34rem;
  }

  .CStext-holder {
    padding: 15rem 0 35rem 0;
  }

  .commspot {
    font-size: 4rem;
  }

  .nuxt-content {
    font-size: 3.2rem;
    line-height: 4rem;
  }

  .CSroutermore {
    font-size: 2rem;
    bottom: 4.2rem;
  }

  .CSreadmore {
    width: 22rem;
    height: 6rem;
  }

  .square-cut {
    height: 12rem;
    width: 12rem;
  }
  .CSimg-reel {
    width: 38rem;
    bottom: 1rem;
  }
}
</style>
