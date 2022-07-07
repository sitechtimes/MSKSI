<template>
<div class="Gallery">
    <div class="Albums">
        <Album 
        v-for="album in albums"
        :key="album.title" 
        :albumname="album.title"
        :albumimg="album.img"
        :albumlink="album.link"
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
        this.albums = await this.$content(`albums`).fetch()
    }
    
}
</script>
