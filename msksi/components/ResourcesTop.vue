<template>
  <div class="resourcestop">
    <h2 class="heading">Resources</h2>
    <div id="resources">
    <div class="resource">
      <img src="">
    <a href=""> MSKSI Video Folder</a>
    </div>
      <div class="resource">
      <img src="">
    <a href=""> June 11, 2021 Jamboard Vision-board Reflections</a>
    </div>
      <div class="resource">
      <img src="">
    <a href="">April 9 MSKSI Padlet for Breakouts</a>
    </div>
        <div class="resource">
      <img src="">
    <a href="">MSKSI Journal</a>
    </div>
        <div class="resource">
      <img src="">
    <a href="">Background-Vision Board</a>
    </div>
        <div class="resource">
      <img src="">
    <a href="">Jamboard January 8, 2021 Gratitude Prompts link</a>
    </div>


    </div>
  
  </div>
</template>

<script>
export default {
  name: 'ResourcesTop',
}
</script>
<style scoped>
#resources{
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 45rem;
}
.resource{
  height: 40rem;
  width: 40rem;
  display: flex;
  flex-wrap: wrap;
  background-color: azure;
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
  color: #333043;
  font-size: var(--h5);
font-family: 'Cairo', sans-serif;
margin-bottom: 1rem;
}
@media only screen and (max-width: 810px) {
  .heading {
    font-size: var(--h3);
    margin-left: 4rem;
    margin-top: 0rem;
  }
}
</style>
