<template>
  <div>
    <Navbar />
    <div class="AboutUsTop">
      <h2 class="heading">
        <span class="h our">Our</span> <span class="h mission">Mission</span>
      </h2>
      <h3 class="text">
        My Sister’s Keeper Staten Island (MSKSI) founded in November 2018,
        creates a support system to build a community for social, emotional, and
        academic support and leadership empowerment for MSKSI members from
        elementary to high school students in District 31. MSKSI fosters
        opportunities to build leadership, encourage sisterhood and build inner
        confidence (self-esteem) through workshops, sister circles, leadership
        events and community-based projects. My Sister’s Keeper Staten Island
        empowers young people to become impactful/inspiring, self-motivating,
        powerful transformative leaders. Giving a safe space and opportunity to
        our marginalized MSKSI young people in order to have a voice, respect
        and rapport in a diverse community.
      </h3>
    </div>
    <div class="AboutUsMid">
      <div class="left">
        <h2 class="v msksi">MSKSI</h2>
        <iframe
          id="video"
          src="https://drive.google.com/file/d/1JlT8gnYTEr3YedSs970C7dVHHq5K43eM/preview"
          width="600"
          height="400"
          allow="autoplay"
          poster="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
        ></iframe>
        <h2 class="v vision">VISION</h2>
      </div>
      <div id="right">
        <ol class="list">
          <li> Become empowered and take an active lead in their education process.</li>
          <li> Support peers in developing positive, sisterly relationships.</li>
          <li> Build community, accountability and collaborative relationships among their peers.</li>
          <li> Adopt healthy social emotional habits that support building positive internal self-esteem.</li>
          <li> Partner with positive role models to create lasting impactful relationships.</li>
          <li> Be supported with transitions from elementary school to college (College and Career Readiness).</li>
          <li> Engage in community-based projects to build civic awareness and participation.</li>
        </ol>
      </div>
    </div>
    <div id="AboutUsBottom">
      <h2 class="gao"> Goals and Outcome</h2>
      <h3 class="will"> MSKSI members will:</h3>
      <h4 class="texti">Be able to adapt healthy social and emotional habits that will support building positive internal self-esteem. Be mindful how others appear and show up. Have grace, dignity and leave room for error and forgiveness. Have a voice, opportunity and forum to grow in the MSKSI community. MSKSI focuses on equity in support of all students with a lens on our marginalized groups; however MSKSI is not just black and brown students, all are welcome.</h4>
    </div>
    <Footer />
  </div>
</template>
<style scoped>
.texti{
  color: white;
  font-size: var(--h4);
  text-align: left;
      font-family: 'Black Han Sans';
      font-weight: lighter;
      width: 90%;
      margin-left: 5rem;
      margin-top: 5rem;
}
#AboutUsBottom{
  background-color: var(--navyblue);
  height: 95rem;
}
.gao{
  font-size: var(--h2);
  text-align: center;
  color: var(--darkpink);
    font-family: 'Black Han Sans';
    padding-top: 8rem;
    font-weight: lighter;
}
.will{
  font-size: var(--h3);
  color: var(--yellow);
  text-align: left;
    font-family: 'Black Han Sans';
        margin-left: 4rem;
    margin-top: 4rem;
        font-weight: lighter;
}
li{
  margin-top: 1rem;
}
#right {
  width: 50%;
  margin-left: 50%;
  font-family: 'Black Han Sans';
  color: var(--navyblue);
  font-size: var(--h4);
  z-index: 100;
  margin-top: 0;
}
.goal {
  color: var(--navyblue);
}
.v {
  margin-top: auto;
  margin-bottom: auto;
  display: block;
}
.vision {
  color: var(--navyblue);
  font-size: var(--h1);
}
.msksi {
  color: var(--darkpink);
  font-size: var(--h1);
  margin-top: 22rem;
}
.AboutUsMid {
  text-align: center;
  background-color: white;
  height: 100rem;
  display: inline;
}
.left {
  width: 50%;
  height: 100rem;
  font-family: 'Black Han Sans';
}
.our {
  color: var(--darkpink);
  font-size: var(--h2);
}
.mission {
  color: var(--yellow);
  font-size: var(--h2);
}
.AboutUsTop {
  background-color: var(--navyblue);
  height: 100rem;
}
.text {
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
.list{
  font-size: var(--h3);
  color: var(--navyblue);
  margin-top: -85rem;
  margin-bottom: 40rem;
  display: block;
  text-align: left;
}
#video {
  padding: 5rem;
  border-style: none;
}
@media only screen and (max-width: 1500px) {
  .AboutUsTop {
    height: 85rem;
  }
  .text {
    margin-top: 5rem;
    font-size: var(--h4);
  }
  .AboutUsMid {
    text-align: center;
    background-color: white;
    height: 56rem;
  }
  .left {
    width: 50%;
    height: 65rem;
    font-family: 'Black Han Sans';
  }
  .msksi {
    color: var(--darkpink);
    font-size: var(--h1);
    margin-top: 17rem;
  }
  .vision {
    color: var(--navyblue);
    font-size: var(--h1);
  }
}
@media only screen and (max-width: 810px) {
  .text {
    margin-top: 2rem;
    font-size: var(--h5);
    width: 80%;
  }
  .AboutUsTop {
    height: 95rem;
    z-index: 1;
  }
  .vision {
    color: var(--navyblue);
    font-size: var(--h3);
  }
  .msksi {
    color: var(--darkpink);
    font-size: var(--h3);
    margin-top: 6rem;
  }
  .left{
    width: 100%;
  }
  .heading {
    margin-left: 3rem;
    padding-top: 10.5rem;
  }
  .h {
    font-size: var(--h3);
    margin-top: 0;
    padding-top: 0;
  }
  .v{
    text-align: center;
  }
  #video {
    width: 100%;
    height: 55%;
left: auto;
right: auto;
display: block;
  border-style: none;
}
.AboutUsMid{
  height: 95rem;
}
#right{
  margin-left: 0;
  width: 90%;
  margin-top: 40rem;
}
.list{
  font-size: var(--h4);
  color: var(--navyblue);
  margin-top: -55rem;
  margin-bottom: 10rem;
  display: block;
  text-align: left;
margin-left: 5rem;
}
.gao{
  font-size: var(--h3);
  text-align: center;
    font-family: 'Black Han Sans';
    font-weight: lighter;
}
.will{
  font-size: var(--h5);
  text-align: left;
    font-family: 'Black Han Sans';
    margin-left: 4rem;
    font-weight: lighter;
    margin-top: 4rem;
}
}

</style>
