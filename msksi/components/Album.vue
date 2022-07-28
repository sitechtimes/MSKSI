<template>
  <div class="polaroid">
    <img id="picture" :src="img" :alt="title" />
    <a class="name" target="_blank" :href="link">{{ title }}</a>
  </div>
</template>
<script>
export default {
  name: 'Album',
  async asyncData({ $content }) {
    const posts = await $content('blog').fetch()

    return {
      posts,
    }
  },
  props: {
    title: String,
    img: String,
    link: String,
  },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@500&display=swap');
a {
  cursor: url('~/assets/images/hoverBtnCursor.png'), auto;
}
.name {
  font-family: 'ABeeZee', sans-serif;
  font-style: normal;
  color: var(--navyblue);
  text-align: center;
  font-size: var(--h5);
  width: 20rem;
  display: block;
  text-align: center;
  margin-top: 3rem;
  text-decoration: none;
  transition: all 0.2s;
}

.name:hover {
  text-decoration: underline;
}

.polaroid {
  background-color: white;
  height: 36rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
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
    margin: 7rem;
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
}
</style>
