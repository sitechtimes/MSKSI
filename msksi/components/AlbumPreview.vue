<template>
    <div class="AlbumPreview">
        <h3>{{Title}}</h3>
        <img src="{{img}}" alt="{{Title}}">

    </div>
</template>
<script>
export default {
    name: 'AlbumPreview',
    props: {
        title:{
            type: String,
            default: 'Title',
        },
        img:{
            type: String,
            default: 'img',
        }
    }
}
</script>