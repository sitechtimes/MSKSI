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
    this.posts = await this.$content(`monthposts`).limit(1).sortBy("order", "asc").fetch()
  },
}
</script>

<style scoped>
.specialmonthly {
  height: 100rem;
  background-color: var(--navyblue);
}

@media screen (max-width: 420px){
  .specialmonthly{
    height: 200rem;
    width: 100rem;
  }
}
</style>