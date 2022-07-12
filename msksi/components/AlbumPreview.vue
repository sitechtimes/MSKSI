<template>
  <div class="AlbumPreview"></div>
</template>
<script>
export default {
  name: 'AlbumPreview',
  methods: {},
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    img: {
      type: String,
      default: 'img',
    },
  },
}
</script>