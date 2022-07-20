<template>
  <div>
    <NewCarousel />
    <GalleryTop />
    <AlbumPreview />
  </div>
</template>

<script>
import GalleryTop from '~/components/GalleryTop.vue'
import NewCarousel from '~/components/NewCarousel.vue'
export default {
  components: { GalleryTop, NewCarousel },
  head() {
    return {
      title: "Gallery | My Sister's Keeper Staten Island",
    }
  },
}
</script>
