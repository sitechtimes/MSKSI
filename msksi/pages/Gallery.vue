<template>
  <div>
    <newcarousel />
    <GalleryTop />
  </div>
</template>

<script>
import GalleryTop from '~/components/GalleryTop.vue'
import GalleryCarousel from '~/components/GalleryCarousel.vue'
import newcarousel from '~/components/newcarousel.vue'
export default {
  components: { GalleryTop, GalleryCarousel, newcarousel },
}
</script>
