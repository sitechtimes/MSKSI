<template>
  <div class="Gallery">
    <h2 class="heading">Photo <span class="gall">Gallery</span></h2>
    <div class="Albums">
      <Album
        v-for="album in albums"
        :key="album.title"
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
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@500&display=swap');
a {
  cursor: pointer;
}
.Gallery {
  background-color: #333043;
  padding-bottom: 10rem;
}
.gall {
  color: var(--darkpink);
  margin: 0;
  font-size: var(--h1);
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
  padding-bottom: 5rem;
}
.polaroid {
  background-color: white;
  height: 36rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

