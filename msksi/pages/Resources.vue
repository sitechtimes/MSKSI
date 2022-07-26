<template>
  <div>
    <ResourceDisplay />
  </div>
</template>

<script>
import ResourceDisplay from '~/components/ResourceDisplay.vue'
export default {
  components: {ResourceDisplay },
  head() {
    return {
      title: "Resources | My Sister's Keeper Staten Island"
    };
  },
}
</script>
