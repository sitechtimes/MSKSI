<template>
    <div class="AlbumPreview">

    </div>
</template>
<script>
export default {
    name: 'AlbumPreview',
    methods: {},
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
/*         <h3>{{Title}}</h3>
        <img src="{{img}}" alt="{{Title}}"> */
</script>