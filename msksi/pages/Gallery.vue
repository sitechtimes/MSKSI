<template>
  <div>
    <GalleryTop />
    <AlbumPreview />
    <GalleryTest />
  </div>
</template>

<script>
import GalleryTop from '~/components/GalleryTop.vue'
export default {
  components: { GalleryTop },
    head() {
    return {
      title: "Gallery | My Sister's Keeper Staten Island"
    };
  },
}
</script>
