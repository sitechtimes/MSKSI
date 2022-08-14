<template>
  <div>
    <NewCarousel />
    <GalleryTest />
  </div>
</template>

<script>
import NewCarousel from '~/components/NewCarousel.vue'
import GalleryTest from '~/components/GalleryTest.vue'

export default {
  components: { GalleryTest, NewCarousel },
  head() {
    return {
      title: "Gallery | My Sister's Keeper Staten Island",
    }
  },
}
</script>
