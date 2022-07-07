<template>
  <div class="GalleryTop">
    <h2 class="heading">Photo <span class="gall">Gallery</span></h2>
    <div class="polaroid-container">
      <div class="polaroid">
        <img
        id="picture"
            src="~/assets/images/panelcareercon.png"
            alt="MSK and MBK panel career con"/>
        <a
          target="_blank"
          class="name"
          href="https://photos.google.com/share/AF1QipOYeR5YLHq9mxkLMNOxsy6GI0wJzsKZ1QtiosJ_6--tEVz50-SVxMpwHfYwgIfQhA?key=YWk2MG80dnNWMU5VRU5zTjJac002b0JyVUM1Y1NR"
          >MSK/MBK Panel @CareerCon</a
        >
      </div>
      <div class="polaroid">
         <img
        id="picture"
            src="~/assets/images/january.png"
            alt="MSKSI January 17, 2020"/>
        <a
          class="name"
          target="_blank"
          href="https://photos.google.com/share/AF1QipPHuyh8L3zE-Fz0U5EeUr0bGCSJK2vu1ZZ5_hi6fVtLBVEJLp7QLtIXP1CT07SrMA?key=YXpJSnNuMlM5Ql8zeTREeXpSQ0RYRWlQTkdENnF3"
          >#MSKSI January 17, 2020</a
        >
      </div>
      <div class="polaroid">
         <img
        id="picture"
            src="~/assets/images/december.png"
            alt="MSKSI December 16, 2020"/>
        <a
          target="_blank"
          class="name"
          href="https://photos.google.com/share/AF1QipMKY5scJY9x9zIzB16j0AiGUByxebmmJMpJe3qBv-PwBXagdDD8hNkeDEUNNl02hg?key=X0MwSzBGUndkOThyQmkxdjV2OFlsdnJmNC1pdDdB"
          >#MSKSI December 16, 2020</a
        >
      </div>
      <div class="polaroid">
         <img
        id="picture"
            src="~/assets/images/march.png"
            alt="MSKSI March 6,2020"/>
        <a
          target="_blank"
          class="name"
          href="https://photos.google.com/share/AF1QipMcWfeOIP5pSD-Yn-llhK1EHDN-Wc5daek0AcDC0wDxp8cmQiwDufl8-v2H-A7_6A?key=anlJNndFTG44Y3hsZ2x5cXAtbGtSNnZrVW8wQWp3"
          >#MSKSI March 6, 2020</a
        >
      </div>
      <div class="polaroid">
         <img
        id="picture"
            src="~/assets/images/misc.png"
            alt="MSKSI Miscellaneous"/>
        <a
          target="_blank"
          class="name"
          href="https://photos.google.com/share/AF1QipN4xPbJIQQn7pncoxRFphN1nwgqWKIpMgz7Ek2Uy-28yKs8IcGR9WTD-9N37tGoQw?key=ZmNiU2t1X2RnSHdRdldUOGhWcV9MSExWTi1XWHpn"
          >#MSKSI Miscellaneous</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@500&display=swap');

.GalleryTop {
  background-color: #333043;
  padding-bottom: 10rem;
}
.gall {
  color: var(--darkpink);
  font-size: var(--h1);
}
.name {
  font-family: 'ABeeZee', sans-serif;
  font-style: normal;
  color: var(--navyblue);
  text-align: center;
  font-size: var(--h5);
  width: 20rem;
  display: block;
  font-weight: bolder;
  text-align: center;
  margin-top: 3rem;
}
.polaroid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(23rem, 1fr));
  grid-gap: 7rem;
  margin: 11rem;
  margin-top: 6rem;
  justify-items: center;
  grid-template-rows: auto;
}
.polaroid {
  background-color: white;
  height: 36rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#picture {
  height: 20rem;
  width: 20rem;
  margin: 3rem;
  margin-bottom: 0;
  margin-top: 0;
  z-index: 1;
  background-color: rgb(194, 194, 194);
}
@media only screen and (max-width: 1500px) {
  .gall {
    font-size: var(--h2);
  }
}

@media only screen and (max-width: 1032px) {
  .polaroid-container {
    grid-gap: 5rem;
    margin: 7rem;
  }
}
@media only screen and (max-width: 770px) {
  .gall {
    font-size: var(--h3);
  }
}
@media only screen and (max-width: 600px) {
  .polaroid {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 48vw;
    height: 35rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0rem;
  }
  #picture {
    margin-top: 2rem;
  }
  .name {
    font-size: var(--h5);
    margin-top: 0;
  }
}
</style>

<script>
export default {
  name: 'GalleryTop',
}
</script>
