<template>
  <div class="resourcestop">
    <h2 class="heading">Resources</h2>
    <div class="resource">
      <img src="https://lh5.googleusercontent.com/COsJj6QMRp1jsOd4yBIRe_xlfHZUyxfWRdsJOPpr84qrU0J6yRuou1e5PCTwNtCMER27EcClC27QdOSn68jjZ_I=w1280" alt="folder">
    <a href=""> MSKSI Video Folder</a>
    </div>
  
  </div>
</template>

<script>
export default {
  name: 'ResourcesTop',
}
</script>
<style scoped>
.resource{
  width: 30rem;
}
.resourcestop {
  background-color: #333043;
  height: 100rem;
}
.heading {
  color: var(--yellow);
}
img{
  width: 25rem;
margin-left: 20rem;
}
a{
  color: white;
  font-size: var(--h4);
font-family: 'Cairo', sans-serif;
}
@media only screen and (max-width: 810px) {
  .heading {
    font-size: var(--h3);
    margin-left: 4rem;
    margin-top: 0rem;
  }
}
</style>
