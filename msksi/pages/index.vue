<template>
<div>
  <AlbumPreview 
  v-for="Album in Albums" 
  :key="Album.title" 
  :desc="Album.description"> 
  </AlbumPreview>
</div>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return{
      Albums :[],
    }
  },
  head(){
    return{
      title: `Album`,
      meta: [
        {
        hid: 'name',
        name: 'name',
        content: 'name',

        }
      ],
    }
  },
  async fetch(){
    this.Albums = await this.$content('Albums').fetch()
  },
}
</script>
