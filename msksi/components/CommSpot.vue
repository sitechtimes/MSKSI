<template>
  <div class="homespotlight">
    <<<<<<< HEAD
    <router-link class="navRouter routermore" to="/AboutUs">
      <span class="arrow">></span>
      Read More
    </router-link>
    <div class="readmore"></div>
    =======
    <router-link class="navRouter CSroutermore" to="/AboutUs">
      <span class="CSarrow">></span>
      Read More
    </router-link>
    <div class="CSreadmore"></div>
    >>>>>>> 2d9e879154b6fff5a988ce740aa4d17afec1e158

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

<script type="module">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
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

  scrollFade() {
    const fadeTL = gsap.timeline({
      delay: 0.2,
    })
    fadeTL.from('.commspot', {
      opacity: 0,
      duration: 0.5,
      ease: 'ease-out',
    })
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
}

#CSimg-holder {
  width: 40rem;
  height: 40rem;
  border-radius: 50%;
  position: absolute;
  bottom: 0%;
  right: 0%;
  overflow: hidden;
}

#CSimg {
  object-fit: cover;
  object-position: top;
  margin-left: -50%;
}

.CStext-holder {
  position: relative;
  height: 100%;
  text-align: left;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 5rem;
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
  margin-right: 25rem;
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
</style>
