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
  height: 95rem;
  background-color: #333043;
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
  width: 25rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4.5rem;
  z-index: 1;
  background-color: rgb(194, 194, 194);
}
.polaroids {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 87vw;
  margin-left: auto;
  margin-right: auto;
  margin-top: -2rem;
}
.polaroid {
  margin-top: 10rem;
  width: 18%;
  height: 42rem;
  background-color: white;
}
@media only screen and (max-width: 1300px) {
  #picture {
    width: 13rem;
    height: 13rem;
  }
  .GalleryTop {
    height: 225rem;
  }
}
@media only screen and (max-width: 510px) {
  .Gallerytop {
    height: 630rem;
  }
  .polaroids {
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
  .heading {
    font-size: var(--h3);
    margin-left: 0rem;
    margin-right: 0rem;
    margin-top: 0rem;
    text-align: center;
  }
  .gall {
    font-size: var(--h3);
    margin-top: 0rem;
  }
}
</style>

<script>
export default {
  name: 'GalleryTop',
}
</script>
