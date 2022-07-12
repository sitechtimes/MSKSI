<template>
  <div class="Gallery">
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

