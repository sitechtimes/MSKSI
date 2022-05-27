<template>
  <div class="homespotlight">
    <div class="CSbutton-holder">
      <router-link class="navRouter CSroutermore" to="/AboutUs">
        <span class="CSarrow">></span>
        Read More
      </router-link>
      <div class="CSreadmore"></div>
    </div>
    <div class="spotlight-images">
      <img
        id="spotlight"
        src="https://www.yosemitelakespark.org/wp-content/uploads/2021/02/ylp-spotlight.png"
        alt=""
      />
      <div id="CSimg-holder">
        <img id="CSimg" :src="post.img" alt="" />
      </div>
    </div>

    <div class="CStext-holder">
      <h2 class="heading commspot">Community Spotlight</h2>
      <nuxt-content :document="post" />

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
}

.CStext-holder {

  position: relative;
  height: 100%;
  text-align: left;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 6rem;
  margin-top: -5rem;
}
.commspot {
  color: var(--darkpink);
  left: 0;
  right: 0;
  top: 0;
  margin-left: 0;
  padding-top: 0;
  margin-right: 12rem;
}

.nuxt-content {
  font-size: var(--h3);
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
  background-color: var(--navyblue);
}

.CSroutermore {
  font-size: var(--h4);
  color: var(--yellow);
  font-family: 'ABeeZee', sans-serif;
  font-weight: bold;
  bottom: 20rem;
  right: 3rem;
  position: absolute;
  z-index: 11;
  transition: all 0.2s;
}

.CSroutermore:hover {
  color: var(--darkyellow);
  text-decoration: underline;
  text-decoration-thickness: 0.35rem;
}

.CSarrow {
  bottom: 25rem;
  right: 10rem;
  font-size: var(--h3);
  display: block;
  text-align: center;
}

/*media queries*/

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
    padding: 10rem 0 18rem 0;
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
    bottom: 5rem;
  }

  .CSreadmore,
  .CSroutermore {
    margin-left: 50vw;
    transform: translateX(-50%);
    right: auto;
  }

  .CSarrow {
    position: absolute;
    bottom: -1rem;
    opacity: 0;
    transform: translateX(500%);
    transition: all 0.2s;
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
    padding: 8rem 0 15rem 0;
  }

  .commspot {
    font-size: 4rem;
  }

  .nuxt-content {
    font-size: 3.2rem;
    line-height: 4rem;
  }

  .CSroutermore {
    font-size: 2.5rem;
  }

  .CSreadmore {
    width: 22rem;
    height: 6rem;
  }

  .CSarrow {
    font-size: 2.5rem;
    bottom: -0.2rem;
    transform: translateX(12.4rem);
  }
}

</style>
