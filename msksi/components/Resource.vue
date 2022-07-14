<template>
  <div class="resource">
    <img :src="img" :alt="title" />
    <a target="_blank" id="link" :href="link">{{ title }}</a>
  </div>
</template>
<script>
export default {
  name: 'Resource',
  props: {
    title: String,
    img: String,
    link: String,
  },
}
</script>

<style scoped>
.resource:hover {
  transform: scale(1.1);
  transition: 0.5s;
}
h3 {
  font-size: var(--h6);
  font-family: 'Cairo', sans-serif;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
#resources {
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 6rem;
}
.resource {
  margin-top: 5rem;
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
  height: 15rem;
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
  margin-top: 1rem;
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
    width: 25rem;
    height: 25rem;
    margin-right: 2rem;
    margin-left: 2rem;
  }
  h3 {
    font-size: var(--smallText);
  }
}

@media only screen and (max-width: 620px) {
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
    margin-top: 3rem;
    width: 25rem;
    height: 25rem;
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

