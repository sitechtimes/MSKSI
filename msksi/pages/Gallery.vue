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
      title: "Gallery | MSKSI "
    };
  },
}
</script>
