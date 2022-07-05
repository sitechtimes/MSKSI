<template>
  <div class="resourcestop">
    <h2 class="heading">Resources</h2>
    <div id="resources">
    <div class="resource">
      <img src="https://i.pinimg.com/originals/67/75/9e/67759e3a6a1dd544deffe5673d021174.png" alt="folder">
    <a target="_blank" id="link" href="https://sites.google.com/strongschools.nyc/msksi/resources#h.vefx57yqjvc2">MSKSI Video Folder</a>
    </div>
      <div class="resource">
      <img src="https://lh5.googleusercontent.com/PuV14rc2AkU5Kq_K5brxP4UFlGe3IRxLydIY-RuY7BW2j88m5dlpBAvNehiTluiAZ97wQ01GAo1VIG8IHcGqnGxu5QXMw-f3fPMGxrihsHuKhXheDXjZRkGyvrX8idFSnw=w1280" alt="jamboard posts">
    <a target="_blank" id="link" href="https://sites.google.com/strongschools.nyc/msksi/resources#h.3zdell8jwjmb">June 11, 2021 Jamboard Vision-board Reflections</a>
    </div>
      <div class="resource">
      <img src="https://padlet-uploads.storage.googleapis.com/5587727/AEV1LKtFkyKgLU1DzT_Ocg/ef1210d4305560b0eb3acf6500d5099c.png" alt="padlet logo">
    <a target="_blank" id="link"  href="https://sites.google.com/strongschools.nyc/msksi/resources#h.2ejb8tqf6z7a">April 9 MSKSI Padlet for Breakouts</a>
    </div>
    <div class="resource">
      <img src="https://lh3.googleusercontent.com/rQQvR9fnoQP1dNAApdTanQqgs5dM5RNCrwZiiLQ38xvIxqO0GFo5ZfyQLwy2qnfnAhGEdzVgNvKXEcNZM0nCd0LTXLKZsaHn5n9IAPibIktsdhvd_QtyUHBVC-h3pdas-A=w1280" alt="journal">
    <a target="_blank" id="link"  href="https://docs.google.com/presentation/u/0/d/17DbBKlW0LjksZ3NsXBlewAGMp1v4YNWDP85bbhJEwTQ/copy">MSKSI Journal</a>
    </div>
    <div class="resource">
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png">
    <a target="_blank" id="link" href="https://docs.google.com/document/d/11fbuSuNiU4O6g6RKTeAxfixFOV89Dd1W1wO5CEcbwmQ/edit">Background-Vision Board</a>
    </div>
    <div class="resource">
    <a target="_blank" id="link" href="">VoiceThread from the MSKSI Meeting January 8, 2021</a>
      <ul>
      <h4 class="item">Gathering inspiration</h4>
      <h4 class="item">Thinking outside the box and failing </h4>
      <h4 class="item">Ideas for journaling and goal setting</h4>
      <h4 class="item">Projects & connecting with others</h4>   
        </ul>
    </div>
    <div class="resource">
      <img src="https://lh4.googleusercontent.com/nE2JYKfW5D-icd_xuFx0rJ2nFvSAC6qHX7JF6dN-CTDSQC9Sp0H7jz-2OMVE8DGixIW8V91uNu82W36frdhbBAWFvBeRNOVU3o_k2uBCyIF4UzEflJMFqAnTPHb_Rv7biQ=w1280" alt="jamboard posts">
    <a target="_blank" id="link" href="https://jamboard.google.com/d/1I0G1z3-7R96nD9EAgRI4ncikXWkw8AhpdrRZC3JOtIw/viewer">Jamboard January 8, 2021 Gratitude Prompts link </a>
    </div>
    <div class="resource">
    <a id="link" href="https://sites.google.com/strongschools.nyc/msksi/resources#h.xere2vvav6n9">Let's  hear from you! </a>
    <h3>Take some time as your journal, goal set or continue to work on a vision board and jot down somethings you need from your MSKSI team and the adults supporting you in MSKSI. Fill out the anonymous form and share with us YOUR needs.</h3>
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
h3{
font-size: var(--h6);
font-family: 'Cairo', sans-serif;
width: 80%;
margin-left: auto;
margin-right: auto;
}
#resources{
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 6rem;
}
.resource{
  margin-top: 2rem;
  height: 30rem;
  width: 30rem;
  display: flex;
  flex-wrap: wrap;
  background-color: rgb(255, 255, 255);
  border-radius: 2rem;
}
.resourcestop {
  background-color: #333043;
}
.heading {
  color: var(--yellow);
}
img{
height: 15rem;
margin-left: auto;
margin-right: auto;
display: block;
margin-top: 3rem;
}
#link{
color: #333043;
font-size: var(--h5);
font-family: 'Cairo', sans-serif;
width: 80%;
margin-left: auto;
margin-right: auto;
margin-top: 1rem;
}
.item{
color: #333043;
font-family: 'Cairo', sans-serif;
  text-align: center;
font-size: var(--h6);
}
ul{
  margin-top: .2rem;
  margin-left: auto;
  margin-right: auto;
}
@media only screen and (max-width: 1500px){
  .resource{
  width: 30rem;
  margin-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  background-color: rgb(255, 255, 255);
  border-radius: 2rem;
}
.resourcestop {
  background-color: #333043;
}
.heading {
  color: var(--yellow);
}
img{
  height: 14rem;
}
#link{
color: #333043;
font-size: var(--h5);
font-family: 'Cairo', sans-serif;
text-align: center;
margin-top: 1rem;
}
}
@media only screen and (max-width: 720px){
    .heading {
    margin-left: 4rem;
    margin-top: 0rem;
  }
  img{
    height: 15rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4rem;
  }
  #link{
  font-size: var(--h5);
  }
  #resources{
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 5rem;
}
}
@media only screen and (max-width: 620px) {
  .heading {
    font-size: var(--h4);
    margin-left: 4rem;
    margin-top: 0rem;
  }

  #resources{
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 5rem;
}
 .resource{
  margin-top: 3rem;
  width: 25rem;
  height: 25rem;
  display: flex;
  flex-wrap: wrap;
  background-color: rgb(255, 255, 255);
  border-radius: 2rem;
  padding-bottom: 2rem;
}
  img{
    height: 10rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4rem;
  }
  #link{
  font-size: var(--h6);
  }
h3{
  font-size: var(--one);
}
}
</style>
