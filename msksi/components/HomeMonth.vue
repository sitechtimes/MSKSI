<template>
    <div class="specialmonthly">
    <MonthPost v-for="post in posts" 
    :key="post.month" 
    :month="post.month" 
    :subheader="post.subheader" 
    :description="post.description"
    :image="post.image">
    </MonthPost>
    </div>
</template>

<script>

export default {
  name: `HomeMonth`,
  components: {
   
  },
  data(){
    return {
      posts: [],
    }
  },
  async fetch(){
    this.posts = await this.$content(`monthposts`).limit(1).sortBy("order", "desc").fetch()
  },
}
</script>

<style scoped>
.specialmonthly {
  background-color: var(--navyblue);
  padding-bottom: 4rem;
}

</style>