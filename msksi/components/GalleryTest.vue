<template>
<div class="Gallery">
    <div class="Albums">
        <Album 
        v-for="album in albums"
        :key="album.title" 
        :albumname="album.title"
        :albumimg= "album.img"
        />
    </div>

</div>
    
</template>
<script>
export default {
    name:'GalleryTest',
    components:{
    },
    data(){
        return{
            albums:[],
        }
    },
    async fetch(){
        let posts = await this.$content('albums').fetch()
        // let post = await this.$content(
        //     'albums',
        //     posts[posts.length - 1].slug
        // ).fetch()
        this.albums = posts
        console.log(this.albums)
    }
    
}
</script>
