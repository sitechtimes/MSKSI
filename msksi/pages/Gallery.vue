<template>
  <div>
    <GalleryCarousel />
    <GalleryTop />
  </div>
</template>

<script>
import GalleryTop from '~/components/GalleryTop.vue'
import GalleryCarousel from '~/components/GalleryCarousel.vue'
export default {
  components: { GalleryTop, GalleryCarousel },
}
</script>
