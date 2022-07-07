<template>
<div class="Gallery">
    <div class="Albums">
        <Album 
        class="polaroid" 
        v-for="album in albums"
        :key="album.albumname" 
        :albumname="album.albumname"
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
        this.albums = await this.$content(`album`).fetch()
    }
}
</script>
