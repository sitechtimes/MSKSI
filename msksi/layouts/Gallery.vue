<template>
  <div>
<Navbar />
<div class="Gallerytop">
    <h2 class="heading"> Photo <span class="gall">Gallery</span></h2>
    <h3 class="subheading">Album Links</h3>
    <div class="polaroids">
      <div class="polaroid">
        <div id="picture"> </div>
        <h4 class="name">MSK/MBK Panel @CareerCon</h4>
      </div>
      <div class="polaroid">
        <div id="picture"> </div>
        <h4 class="name">#MSKSI January 17, 2020</h4>
      </div>
      <div class="polaroid">
        <div id="picture"> </div>
        <h4 class="name">#MSKSI December 16, 2020</h4>
      </div>
      <div class="polaroid">
        <div id="picture"> </div>
        <h4 class="name">#MSKSI March 6, 2020</h4>
      </div>
      <div class="polaroid">
        <div id="picture"> </div>
        <h4 class="name">#MSKSI Miscellaneous</h4>
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

</style>