<template>
  <div>
    <ResourcesTop />
    <ResourceDisplay />
  </div>
</template>

<script>
import ResourcesTop from '~/components/ResourcesTop.vue'
import ResourceDisplay from '~/components/ResourceDisplay.vue'
export default {
  components: { ResourcesTop, ResourceDisplay },
}
</script>
