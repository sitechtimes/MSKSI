<template>
  <div>
    <JoinUsTop />
    <JoinUsMid />
  </div>
</template>

<script>
import JoinUsTop from '~/components/JoinUsTop.vue'
import JoinUsMid from '~/components/JoinUsMid.vue'
export default {
  components: { JoinUsTop, JoinUsMid },
    head() {
    return {
      title: "Join | My Sister's Keeper Staten Island"
    };
  },
}
</script>
