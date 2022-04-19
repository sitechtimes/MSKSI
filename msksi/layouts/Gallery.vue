<template>
  <div>
<Navbar />
<div class="Gallerytop">
    <h2 class="heading"> Photo <span class="gall">Gallery</span></h2>
    <h3 class="subheading">Album Links</h3>
    <div class="polaroids">
      <div class="polaroid">
        <div id="picture"> </div>
        <a target="_blank" class="name" href="https://photos.google.com/share/AF1QipOYeR5YLHq9mxkLMNOxsy6GI0wJzsKZ1QtiosJ_6--tEVz50-SVxMpwHfYwgIfQhA?key=YWk2MG80dnNWMU5VRU5zTjJac002b0JyVUM1Y1NR" >MSK/MBK Panel @CareerCon</a>
      </div>
      <div class="polaroid">
        <div id="picture"> </div>
        <a class="name" target="_blank" href="https://photos.google.com/share/AF1QipPHuyh8L3zE-Fz0U5EeUr0bGCSJK2vu1ZZ5_hi6fVtLBVEJLp7QLtIXP1CT07SrMA?key=YXpJSnNuMlM5Ql8zeTREeXpSQ0RYRWlQTkdENnF3">#MSKSI January 17, 2020</a>
      </div>
      <div class="polaroid">
        <div id="picture"> </div>
        <a target="_blank" class="name" href="https://photos.google.com/share/AF1QipMKY5scJY9x9zIzB16j0AiGUByxebmmJMpJe3qBv-PwBXagdDD8hNkeDEUNNl02hg?key=X0MwSzBGUndkOThyQmkxdjV2OFlsdnJmNC1pdDdB">#MSKSI December 16, 2020</a>
      </div>
      <div class="polaroid">
        <div id="picture"> </div>
        <a target="_blank"  class="name" href="https://photos.google.com/share/AF1QipMcWfeOIP5pSD-Yn-llhK1EHDN-Wc5daek0AcDC0wDxp8cmQiwDufl8-v2H-A7_6A?key=anlJNndFTG44Y3hsZ2x5cXAtbGtSNnZrVW8wQWp3">#MSKSI March 6, 2020</a>
      </div>
      <div class="polaroid">
        <div id="picture"> </div>
        <a target="_blank" class="name" href="https://photos.google.com/share/AF1QipN4xPbJIQQn7pncoxRFphN1nwgqWKIpMgz7Ek2Uy-28yKs8IcGR9WTD-9N37tGoQw?key=ZmNiU2t1X2RnSHdRdldUOGhWcV9MSExWTi1XWHpn">#MSKSI Miscellaneous</a>
      </div>
    </div>
</div>
<Footer />
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@500&display=swap');
.gall{
  color: var(--darkpink);
  font-size: var(--h2);
}
.name{
  font-family: 'Sora';
font-style: normal;
color: var(--navyblue);
text-align: center;
font-size: var(--h4);
margin-top: 2rem;
width: 25rem;
margin-left: auto;
margin-right: auto;
display: block;
font-weight: bolder;
}
#picture{
  width: 25rem;
  height: 25rem;
  margin-left: auto;
margin-right: auto;
margin-top: 3rem;
  z-index: 1;
  background-color: rgb(194, 194, 194);

}
.polaroids{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 90vw;
margin-left: auto;
margin-right: auto;
}
.polaroid{
  margin: 8rem;
  width: 30rem;
  height: 40rem;
  background-color: white;
}
.Gallerytop{
    height: 140rem;
    background-color: var(--navyblue);
}
.subheading{
    color: white;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
}
@media only screen and (max-width: 810px){
  .Gallerytop{
    height: 275rem;
  }
  .polaroids{
      width: 10rem;
  }  
  .polaroid{
      height: 33rem;
  }
  #picture{
      width: 20rem;
  height: 20rem;
  }
  .name{
    font-size: var(--h5);
  }
  .heading{
        font-size: var(--h3);
margin-left: 3rem;
  margin-top: 0rem;
  }
  .gall{
        font-size: var(--h3);
  margin-top: 0rem;
  }
}
@media only screen and (max-width: 1500px){
    .Gallerytop{
    height: 195rem;
  }
    .polaroids{
      width: 100%;
      margin-top: 0;
  }  
}

</style>