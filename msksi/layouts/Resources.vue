<template>
  <div>
<Navbar />
<div class="resourcestop">
    <h2 class="heading"> Resources</h2>
</div>
<Footer />
  </div>
</template>
<style scoped>
.resourcestop{
    background-color: var(--navyblue);
    height: 100rem;
}
.heading{
    color: var(--yellow);
}
@media only screen and (max-width: 810px){
  .heading{
        font-size: var(--h3);
margin-left: 3rem;
  margin-top: 0rem;
  }
}
</style>