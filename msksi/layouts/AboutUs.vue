<template>
      <div>
<Navbar />
<div class="AboutUsTop">
<h2 class="heading"> <span class="h our">Our</span> <span class="h mission">Mission</span></h2>
<h3 class="text">My Sister’s Keeper Staten Island (MSKSI) founded in November 2018, creates a support system to build a community for social, emotional, and academic support and leadership empowerment for MSKSI members from elementary to high school students in District 31. MSKSI fosters opportunities to build leadership, encourage sisterhood and build inner confidence (self-esteem) through workshops, sister circles, leadership events and community-based projects. My Sister’s Keeper Staten Island empowers young people to become impactful/inspiring, self-motivating, powerful transformative leaders. Giving a safe space and opportunity to our marginalized MSKSI young people in order to have a voice, respect and rapport in a diverse community</h3>
</div>
<div class="AboutUsMid">
  <div class="left">
    <h2 class=" v msksi"> MSKSI</h2>
    <h2 class="v vision"> VISION</h2>

  </div>
  <div id="right">

  </div>
</div>

<Footer />
  </div>
</template>
<style scoped>
#right{
  width: 50%;
margin-left: 50%;
  background-color: blue;
    font-family: 'Black Han Sans'; 
    color: var(--navyblue);
    font-size: var(--h4);
}
.goal{
  color: var(--navyblue);
}
.v{
  margin-top: auto;
  margin-bottom: auto;
  display: block;
}
.vision{
  color: var(--navyblue);
  font-size: var(--h1);
    margin-top: 30rem;

}
.msksi{
  color: var(--darkpink);
  font-size: var(--h1);
  margin-top: 50rem;
}
.AboutUsMid{
  text-align: center;
  background-color: white;
  height: 100rem;
}
.left{
  width: 50%;
  height: 100rem;
    font-family: 'Black Han Sans';
}
.our{
color: var(--darkpink);
font-size: var(--h2);
}
.mission{
color: var(--yellow);
font-size: var(--h2);
}
.AboutUsTop{
    background-color: var(--navyblue);
    height: 100rem;
}
.text{
    margin-left: auto;
    margin-right: auto;
    margin-top: 10rem;
    margin-bottom: auto;
    font-family: 'Cairo', sans-serif;
    color: var(--white);
    text-align: left;
    font-size: var(--h3);
    width: 90%;
    justify-content: center;
}
@media only screen and (max-width: 810px) {
.text{
  margin-top: 2rem;
  font-size: var(--h5);
  width: 80%;
}
.AboutUsTop{
      height: 125rem;
}
.vision{
  color: var(--navyblue);
  font-size: var(--h3);
    margin-top: 30rem;

}
.msksi{
  color: var(--darkpink);
  font-size: var(--h3);
  margin-top: 50rem;
}
.heading{
margin-left: 3rem;
padding-top: 10.5rem;
}
.h{
  font-size: var(--h3);
margin-top: 0;
padding-top: 0;
}


}

</style>