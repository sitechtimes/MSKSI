<template>
  <div class="homespotlight">
    <div id="CSbutton-holder">
      <router-link class="navRouter CSroutermore" to="/AboutUs">
        Read More
        <div class="arrow"></div>
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
      <div class="square-cut" id="CSimg-r1" style="null">
        <img class="CSimg-r" :src="post.img_reel1" alt="" />
        <span class="reel-caption">{{ post.reel_caption1 }}</span>
        <div class="tp-hover"></div>
      </div>
      <div class="square-cut" id="CSimg-r2">
        <img class="CSimg-r" :src="post.img_reel2" alt="" />
        <span class="reel-caption">{{ post.reel_caption2 }}</span>
        <div class="tp-hover"></div>
      </div>
      <div class="square-cut" id="CSimg-r3">
        <img class="CSimg-r" :src="post.img_reel3" alt="" />
        <span class="reel-caption">{{ post.reel_caption3 }}</span>
        <div class="tp-hover"></div>
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
    this.scrollFadeReel()
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
    scrollFadeReel() {
      const fadeTLR = this.$gsap.timeline({
        scrollTrigger: {
          trigger: '.CSimg-reel',
          start: 'top bottom',
          end: 'top 100px',
          scrub: false,
        },
      })

      fadeTLR.from('#CSimg-r1, .CSreadmore', {
        delay: 0.5,
        opacity: 0,
        duration: 0.8,
        y: 80,
        ease: 'ease-out',
      })
      fadeTLR.from(
        '#CSimg-r2',
        {
          delay: 0.2,
          opacity: 0,
          duration: 0.8,
          y: 80,
          ease: 'ease-out',
        },
        '<'
      )
      fadeTLR.from(
        '#CSimg-r3',
        {
          delay: 0.2,
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

<style scoped>
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
  cursor: url('~/assets/images/hoverBtnCursor.png'), auto;
}

.CSroutermore {
  font-size: 3rem;
  color: var(--white);
  font-family: 'ABeeZee', sans-serif;
  font-weight: bold;
  bottom: 22rem;
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
  transition: all 0.3s;
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
  position: relative;
  transition: all 0.3s;
}

.reel-caption {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.884);
  font-family: 'ABeeZee', sans-serif;
  z-index: 2000;
  position: absolute;
  bottom: 0;
  padding: 1.3rem;
  width: 100%;
  transition: all 0.3s;
}

.tp-hover {
  background-color: rgba(0, 0, 0, 0.514);
  height: 5rem;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s;
  object-fit: cover;
  bottom: 0;
  position: absolute;
}

.square-cut:hover {
  height: 22rem;
}

.square-cut:hover .reel-caption {
  font-size: 1.75rem;
  padding-bottom: 3rem;
}
.square-cut:hover .tp-hover {
  height: 100%;
}

/* arrow */

.arrow {
  position: absolute;
  top: 30%;
  left: 60%;
  height: 60px;
  width: 100px;
}

.arrow:before {
  content: '';
  width: 25px;
  height: 2px;
  background: white;
  position: absolute;
  top: 10%;
  margin-top: -1px;
  right: 1.2rem;
  transition: all 0.3s ease;
}

.arrow:hover:before {
  right: 34px;
  width: 35px;
}

.arrow:after {
  content: '';
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 0 5px 5px;
  border-color: transparent transparent transparent #fff;
  position: absolute;
  top: 2%;
  /* margin-top: -5px; */
  right: 1rem;
  transition: all 0.3s ease;
}

.arrow:hover:after {
  right: 34px;
  right: 30px;
}

/*media queries*/
@media only screen and (max-width: 1750px) {
  .CSimg-reel {
    width: 47rem;
    height: 15rem;
    top: 62rem;
  }
  .square-cut {
    height: 15rem;
    width: 15rem;
  }
  .square-cut:hover {
    height: 17rem;
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
    bottom: 10rem;
    left: auto;
    right: 45rem;
    width: 78rem;
    height: 25rem;
    top: auto;
  }
  .square-cut {
    height: 25rem;
    width: 25rem;
  }
  .reel-caption {
    font-size: 1.5rem;
  }
  .square-cut:hover {
    height: 27rem;
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
    padding: 2rem 8.5rem;
    bottom: 5rem;
    font-size: 2.6rem;
  }

  .CSreadmore,
  .CSroutermore {
    margin-left: 50%;
    transform: translate(-50%);
    right: auto;
  }

  .CSroutermore:hover {
    transform: translate(-50%) scale(1.025);
  }

  .icon {
    height: 0;
    width: 0;
    border-radius: 0;
    margin-left: 0;
    margin-right: 0;
  }
  .CSimg-reel {
    bottom: 20rem;
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
    height: 20rem;
    bottom: 22rem;
  }
  .tp-hover {
    height: 6rem;
  }
  .square-cut:hover {
    height: 22rem;
  }

  .CSroutermore {
    width: 29.5rem;
    padding: 2rem 8rem;
  }
}
@media only screen and (max-width: 600px) {
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
    padding: 15rem 0 48rem 0;
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
    bottom: 5rem;
    width: 22.5rem;
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .CSreadmore {
    width: 22rem;
    height: 6rem;
  }

  .square-cut {
    height: 14rem;
    width: 14rem;
    margin-bottom: 1.5rem;
  }
  .CSimg-reel {
    width: 38rem;
    height: 14rem;
    bottom: 32rem;
    padding-right: 3rem;
    padding-left: 3rem;

    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .reel-caption {
    font-size: 1.2rem;
  }
  .square-cut:hover {
    height: 15rem;
  }
}
</style>
