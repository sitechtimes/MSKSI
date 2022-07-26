<template>
  <div class="resourcestop">
    <h2 class="heading">Resources</h2>
    <div id="resources">
      <Resource
        v-for="resource in resources"
        :key="resource.slug"
        :title="resource.title"
        :img="resource.img"
        :link="resource.link"
      />
    </div>
  </div>
</template>
<script>
import Resource from './Resource.vue'
export default {
  name: 'ResourceDisplay',
  components: { Resource },
  data() {
    return {
      resources: [],
    }
  },
  async fetch() {
    let resources = await this.$content('resources')
      .sortBy('order', 'incr')
      .fetch()
    this.resources = resources
    console.log(this.resources)
  },
}
</script>

<style scoped>
.resourcestop {
  background: #333043;
}
.resource:hover {
 transform: scale(1.02);
  transition: 0.2s;
}
h3 {
  font-size: var(--h6);
  font-family: 'Cairo', sans-serif;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
#resources {
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
  grid-gap: 7rem;
  justify-items: center;
  grid-template-rows: auto;
  padding-bottom: 10rem;
  margin: 4rem 11rem 0;
}
.resource {
  margin-top: 0rem;
  height: 30rem;
  width: 30rem;
  display: flex;
  flex-wrap: wrap;
  background-color: rgb(255, 255, 255);
  border-radius: 2rem;
}
.resourcestop {
  background-color: #333043;
}
.heading {
  color: var(--yellow);
}
img {
  height: 13rem;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-top: 3rem;
}
#link {
  color: #333043;
  font-size: var(--h5);
  font-family: 'Cairo', sans-serif;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: .5rem;
}
.item {
  color: #333043;
  font-family: 'Cairo', sans-serif;
  text-align: center;
  font-size: var(--h6);
}
ul {
  margin-top: 0.2rem;
  margin-left: auto;
  margin-right: auto;
}
@media only screen and (max-width: 1500px) {
  .resource {
    width: 30rem;
    margin-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    background-color: rgb(255, 255, 255);
    border-radius: 2rem;
    margin-left: 2rem;
  }
  .resourcestop {
    background-color: #333043;
  }
  img {
    height: 14rem;
  }
  #link {
    color: #333043;
    font-size: var(--h5);
    font-family: 'Cairo', sans-serif;
    text-align: center;
    margin-top: 1rem;
  }
}
@media only screen and (max-width: 720px) {
  .heading {
    margin-left: 4rem;
    margin-top: 0rem;
  }
  img {
    height: 13rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4rem;
  }
  #link {
    font-size: var(--h6);
  }
  #resources {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 5rem;
  }
  .resource {
    margin-top: 3rem;
    width: 25rem;
    height: 25rem;
  }
  h3 {
    font-size: var(--one);
  }
}
@media only screen and (max-width: 710px) {
  #resources {
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 5rem;
  }
  .resource {
    margin-top: 3rem;
    width: 23rem;
    height: 23rem;
    margin-right: 2rem;
    margin-left: 2rem;
  }
  h3 {
    font-size: var(--smallText);
  }
}

@media only screen and (max-width: 520px) {
  .heading {
    font-size: var(--h4);
    text-align: center;
    margin-left: 0;
  }

  #resources {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-bottom: 5rem;
  }
  .resource {
    margin-top: 1rem;
    width: 23rem;
    height: 23rem;
    display: flex;
    flex-wrap: wrap;
    background-color: rgb(255, 255, 255);
    border-radius: 2rem;
    padding-bottom: 2rem;
  }
  img {
    height: 10rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4rem;
  }
  #link {
    font-size: var(--h6);
  }
  h3 {
    font-size: var(--one);
  }
  .resource:hover {
    transform: scale(1.05);
  }
}
</style>

