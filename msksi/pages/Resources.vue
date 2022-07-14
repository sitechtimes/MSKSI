<template>
  <div>
    <ResourcesTop />
  </div>
</template>

<script>
import ResourcesTop from '~/components/ResourcesTop.vue'
export default {
  components: { ResourcesTop },
    head() {
    return {
      title: "Resources | MSKSI "
    };
  },
}
</script>
