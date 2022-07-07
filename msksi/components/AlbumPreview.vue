<template>
    <div class="AlbumPreview">
        <div class="polaroid">
            <img src="{{img}}" alt="{{title}}">
            <a target="_blank" href="{{link}}">{{title}}</a>
        </div>

    </div>
</template>
<script>
export default {
    name: 'AlbumPreview',
    methods: {},
    props: {
        title: String,
        img: String,
        link: String,
    }
}
</script>