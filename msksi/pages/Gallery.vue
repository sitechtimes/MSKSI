<template>
  <div>
    <newcarousel />
    <GalleryTop />
    <AlbumPreview />
    <GalleryTest />
  </div>
</template>

<script>
import GalleryTop from '~/components/GalleryTop.vue'
import GalleryCarousel from '~/components/GalleryCarousel.vue'
import newcarousel from '~/components/newcarousel.vue'
export default {
  components: { GalleryTop, GalleryCarousel, newcarousel },
  head() {
    return {
      title: "Gallery | My Sister's Keeper Staten Island",
    }
  },
}
</script>
