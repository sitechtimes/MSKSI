<template>
    <div>
<nuxt-link :to="{name:`slug`, params:{slug:slug}}">{{title}}</nuxt-link>
    </div>
</template>

<script>
    export default {
            async aysncData({$content, params}){
            const Album = await $content(`posts`, params.slug).fetch()
            return{Album}
        },
    }
</script>

<style lang="css" scoped>


</style>