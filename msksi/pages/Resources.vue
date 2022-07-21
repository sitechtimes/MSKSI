<template>
  <div>
    <ResourceDisplay />
  </div>
</template>

<script>
import ResourcesTop from '~/components/ResourcesTop.vue'
import ResourceDisplay from '~/components/ResourceDisplay.vue'
export default {
  components: { ResourcesTop, ResourceDisplay },
  head() {
    return {
      title: "Resources | My Sister's Keeper Staten Island"
    };
  },
}
</script>
