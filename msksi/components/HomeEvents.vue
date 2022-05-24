<template>
    <div class="eventpreviews">
       
    </div>
</template>

<script>
export default {
  name: `HomeEvents`,
  components: {
   
  },
  data(){
    return {
      events: [],
    }
  },
  async fetch(){
    this.events = await this.$content(`eventpreview`).limit(3).fetch()
  },
}
</script>

<style scoped>

</style>