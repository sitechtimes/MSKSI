<template>
  <div class="homespotlight">
    <router-link class="navRouter routermore" to="/AboutUs">
      <span class="arrow">></span>
      Read More
    </router-link>
    <div class="readmore"></div>

    <div class="spotlight-images">
      <img
        id="spotlight"
        src="https://www.yosemitelakespark.org/wp-content/uploads/2021/02/ylp-spotlight.png"
        alt=""
      />
      <div id="img-holder">
        <img
          id="commspot-img"
          src="https://cdn.britannica.com/96/180396-138-CA8FCDFD/chipmunks-Siberian-seeds.jpg?w=800&h=450&c=crop"
          alt=""
        />
      </div>
    </div>
    <div class="text-holder">
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
      post: {},
    }
  },
  methods: {},
  async fetch({ $content, params }) {
    console.log('Slug: ' + params.slug)
    const post = await $content('comm-spot', params.slug).fetch()
    console.log('Fetched data')
    return { post }
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
}

#img-holder {
  width: 40rem;
  height: 40rem;
  border-radius: 50%;
  position: absolute;
  bottom: 0%;
  right: 0%;
  overflow: hidden;
}

#commspot-img {
  object-fit: cover;
  object-position: top;
  margin-left: -50%;
}

.text-holder {
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

.readmore {
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

.routermore:hover + .readmore {
  background-color: var(--navyblue);
}

.routermore {
  font-size: var(--h3);
  color: var(--yellow);
  font-family: 'ABeeZee', sans-serif;
  font-weight: bold;
  bottom: 20rem;
  right: 3rem;
  position: absolute;
  z-index: 11;
  transition: all 0.2s;
}

.routermore:hover {
  color: var(--darkyellow);
  text-decoration: underline;
  text-decoration-thickness: 0.35rem;
}

.arrow {
  bottom: 25rem;
  right: 10rem;
  font-size: var(--h2);
  display: block;
  text-align: center;
}
</style>
