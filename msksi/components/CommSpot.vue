<template>
  <div class="homespotlight">
    <div id="CSbutton-holder">
      <router-link class="router CSroutermore" to="/AboutUs">
        Read More
        <div class="arrow"></div>
      </router-link>
      <div class="CSreadmore"></div>
      <button id="CSmorebtn" onclick="location.href='/AboutUs'">
        Read More
      </button>
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
          start: 'top bottom-=20px',
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
        onComplete: function () {
          document.querySelectorAll('.square-cut').forEach((el) => {
            el.style.transition = 'all 0.3s'
          })
        },
      })

      fadeTLR
        .from('.square-cut', {
          delay: 0.5,
          opacity: 0,
          duration: 0.8,
          y: 80,

          stagger: 0.2,
        })
        .from(
          '.CSreadmore',
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
  height: fit-content;
  min-height: 100rem;
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
  text-align: left;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding-right: 28rem;
  padding-bottom: 40rem;
  padding-top: 10rem;
  padding-left: 7rem;
}
.commspot {
  color: var(--darkpink);
  left: 0;
  right: 0;
  top: 0;
  margin-left: 0;
  padding-top: 0;
  margin-right: 0;
  font-size: 5rem;
}

.nuxt-content {
  font-size: 4rem;
  color: var(--navyblue);
  font-family: 'ABeeZee', sans-serif;
  margin-top: 3rem;

  line-height: 5rem;
}

.CSimg-reel {
  position: absolute;
  bottom: 12rem;
  right: 42rem;
  height: 20rem;
  width: 35%;
  display: flex;
  justify-content: space-between;
}

.CSimg-r {
  height: 20rem;
  transition: all 0.3s;
}

.square-cut:hover .CSimg-r {
  height: 100%;
}

.square-cut {
  height: 25rem;
  width: 20rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: relative;
}

.reel-caption {
  font-size: 1.5rem;
  color: var(--navyblue);
  font-family: 'ABeeZee', sans-serif;
  z-index: 2000;
  position: absolute;
  top: 21rem;
  width: 100%;
  transition: all 0.3s;
}

.tp-hover {
  background-color: var(--navyblue);
  height: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s;
  object-fit: cover;
  bottom: 0;
  position: absolute;
  opacity: 0;
}

.square-cut:hover .reel-caption {
  font-size: 1.75rem;
  padding-bottom: 3rem;
  color: var(--white);
  padding: 1.5rem;
  top: auto;
  bottom: 0;
}
.square-cut:hover .tp-hover {
  height: 100%;
  opacity: 0.7;
}
.CSreadmore {
  height: 125rem;
  width: 125rem;
  clip-path: polygon(100% 27%, 68% 100%, 100% 100%);
  bottom: 0;
  right: 0;
  z-index: 10;
}
.CSreadmore,
#CSmorebtn {
  background-color: var(--tpnavyblue);
  position: absolute;
  transition: all 0.3s;
}
.CSroutermore:hover + .CSreadmore,
#CSmorebtn:hover {
  background-color: var(--darknavyblue);
}

.CSroutermore:hover {
  transform: scale(1.025);
  cursor: url('~/assets/images/hoverBtnCursor.png'), auto;
}

.CSroutermore {
  bottom: 22rem;
  right: 8rem;
  position: absolute;
  z-index: 11;
  transition: all 0.2s;
  text-decoration: none;
  font-size: 3rem;
}

.CSroutermore,
#CSmorebtn {
  font-size: 2.6rem;
  color: var(--white);
  font-family: 'ABeeZee', sans-serif;
  font-weight: bold;
}
#CSmorebtn {
  width: 25rem;
  height: 7rem;
  margin-bottom: 1.3rem;
  border-radius: 3.5rem;
  bottom: 4rem;
  margin-left: 50%;
  transform: translate(-50%);
  right: auto;
  z-index: 20;
  visibility: hidden;
}
#CSmorebtn:hover {
  transform: translate(-50%) scale(1.025);
}

/* arrow */

.arrow {
  position: absolute;
  top: 45%;
  left: 60%;
  height: 60px;
  width: 100px;
}

.arrow:before {
  content: '';
  width: 15px;
  height: 2px;
  background: white;
  position: absolute;
  top: 10%;
  margin-top: -1px;
  right: 1rem;
  transition: all 0.3s ease;
}

.arrow:hover:before {
  right: 20px;
  width: 18px;
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
  right: 0.6rem;
  transition: all 0.3s ease;
}

.arrow:hover:after {
  right: 20px;
  right: 15px;
}

/*media queries*/
@media only screen and (max-width: 1750px) {
  .CSimg-reel {
    width: 47rem;
    height: 15rem;
  }
  .CSimg-r {
    height: 15rem;
  }
  .reel-caption {
    top: 16rem;
  }
  .square-cut {
    height: 20rem;
    width: 15rem;
  }
  .CStext-holder {
    padding-bottom: 35rem;
  }
}
@media only screen and (max-width: 1560px) {
  #spotlight {
    width: 60rem;
  }
  .CStext-holder {
    padding-bottom: 45rem;
    padding-right: 25rem;
  }

  #CSimg-holder {
    width: 30rem;
    height: 30rem;
  }

  .spotlight-images {
    height: 55rem;
    width: 50rem;
  }

  .CSimg-reel {
    bottom: 8rem;
    left: auto;
    right: 45rem;
    width: 78rem;
    height: 30rem;
    top: auto;
  }
  .CSimg-r {
    height: 25rem;
  }
  .reel-caption {
    top: 26rem;
  }
  .square-cut {
    height: 30rem;
    width: 25rem;
  }
  .reel-caption {
    font-size: 1.75rem;
  }
  .square-cut:hover .reel-caption {
    font-size: 1.9rem;
    padding-bottom: 3rem;
  }
}

@media only screen and (max-width: 1320px) {
  .homespotlight {
    flex-direction: column;
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
    padding: 10rem 1rem 55rem 1rem;
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

  .arrow {
    display: none;
  }

  .CSreadmore,
  .CSroutermore {
    visibility: hidden;
  }
  #CSmorebtn {
    visibility: visible;
  }

  .icon {
    height: 0;
    width: 0;
    border-radius: 0;
    margin-left: 0;
    margin-right: 0;
  }
  .CSimg-reel {
    bottom: 18rem;
    right: auto;
    left: 50%;
    transform: translateX(-50%);
  }
}
@media only screen and (max-width: 900px) {
  .square-cut {
    height: 25rem;
    width: 20rem;
  }
  .CSimg-reel {
    width: 62rem;
    height: 20rem;
    bottom: 25rem;
  }
  .tp-hover {
    height: 6rem;
  }
  .CSimg-r {
    height: 20rem;
  }
  .reel-caption {
    top: 21rem;
  }
  .CSimg-r:hover {
    height: 25rem;
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
    padding: 5rem 1rem 57rem 1rem;
  }

  .commspot {
    font-size: 4rem;
  }

  .nuxt-content {
    font-size: 3.2rem;
    line-height: 4rem;
  }

  #CSmorebtn {
    font-size: 2rem;
    width: 18rem;
    height: 6rem;
  }

  .square-cut {
    height: 18rem;
    width: 14rem;
    margin-bottom: 1.5rem;
  }
  .CSimg-r {
    height: 14rem;
  }
  .CSimg-reel {
    width: 38rem;
    height: 16rem;
    bottom: 37rem;
    padding-right: 3rem;
    padding-left: 3rem;

    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .reel-caption {
    font-size: 1.2rem;
    top: 15rem;
  }
  .square-cut:hover .reel-caption {
    font-size: 1.5rem;
    padding-bottom: 2rem;
  }
}
</style>
