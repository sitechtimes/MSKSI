<template>
  <div class="GalleryTop">
    <h2 class="heading">Photo <span class="gall">Gallery</span></h2>
    <div class="polaroids">
      <div class="polaroid">
        <div id="picture"></div>
        <a
          target="_blank"
          class="name"
          href="https://photos.google.com/share/AF1QipOYeR5YLHq9mxkLMNOxsy6GI0wJzsKZ1QtiosJ_6--tEVz50-SVxMpwHfYwgIfQhA?key=YWk2MG80dnNWMU5VRU5zTjJac002b0JyVUM1Y1NR"
          >MSK/MBK Panel @CareerCon</a
        >
      </div>
      <div class="polaroid">
        <div id="picture"></div>
        <a
          class="name"
          target="_blank"
          href="https://photos.google.com/share/AF1QipPHuyh8L3zE-Fz0U5EeUr0bGCSJK2vu1ZZ5_hi6fVtLBVEJLp7QLtIXP1CT07SrMA?key=YXpJSnNuMlM5Ql8zeTREeXpSQ0RYRWlQTkdENnF3"
          >#MSKSI January 17, 2020</a
        >
      </div>
      <div class="polaroid">
        <div id="picture"></div>
        <a
          target="_blank"
          class="name"
          href="https://photos.google.com/share/AF1QipMKY5scJY9x9zIzB16j0AiGUByxebmmJMpJe3qBv-PwBXagdDD8hNkeDEUNNl02hg?key=X0MwSzBGUndkOThyQmkxdjV2OFlsdnJmNC1pdDdB"
          >#MSKSI December 16, 2020</a
        >
      </div>
      <div class="polaroid">
        <div id="picture"></div>
        <a
          target="_blank"
          class="name"
          href="https://photos.google.com/share/AF1QipMcWfeOIP5pSD-Yn-llhK1EHDN-Wc5daek0AcDC0wDxp8cmQiwDufl8-v2H-A7_6A?key=anlJNndFTG44Y3hsZ2x5cXAtbGtSNnZrVW8wQWp3"
          >#MSKSI March 6, 2020</a
        >
      </div>
      <div class="polaroid">
        <div id="picture"></div>
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
  margin-top: 3rem;
  width: 25rem;
  margin-left: auto;
  margin-right: auto;
  display: block;
  font-weight: bolder;
}
#picture {
  height: 20rem;
  z-index: 1;
  background-color: rgb(194, 194, 194);
  width: 20rem;
  margin: 3rem;
  margin-top: 4.5rem;
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
}
.polaroid {
  margin-top: 10rem;
  width: 26rem;
  height: 38rem;
  background-color: white;
}
@media only screen and (max-width: 1500px) {
  .polaroid {
    width: 25rem;
    height: 35rem;
  }
  .polaroids {
    width: 85vw;
    margin-left: 10rem;
  }
  .name {
    font-size: 1.6rem;
    margin-top: 5rem;
  }
  .polaroids {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}
@media only screen and (max-width: 510px) {
  .polaroids {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 87vw;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0rem;
  }
  .polaroid {
    width: auto;
    height: 35rem;
    margin-top: 5rem;
  }
  .name {
    font-size: var(--h5);
    margin-top: 3rem;
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
