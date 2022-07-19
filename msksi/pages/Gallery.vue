<template>
  <div>
    <NewCarousel />
    <GalleryTop />
    <AlbumPreview />
  </div>
</template>

<script>
import GalleryTop from '~/components/GalleryTop.vue'
import GalleryCarousel from '~/components/GalleryCarousel.vue'
import NewCarousel from '~/components/NewCarousel.vue'
export default {
  components: { GalleryTop, GalleryCarousel, NewCarousel },
  head() {
    return {
      title: "Gallery | My Sister's Keeper Staten Island",
    }
  },
}
</script>
