<template>
  <div class="AboutUsMid">
    <div class="left">
      <h2 class="heading v msksi">MSKSI</h2>
      <div id="video-container">
        <iframe
          id="video"
          src="https://drive.google.com/file/d/1JlT8gnYTEr3YedSs970C7dVHHq5K43eM/preview"
          allow="autoplay"
          poster="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
        ></iframe>
      </div>
      <h2 class="heading v vision">VISION</h2>
    </div>
    <div id="right">
      <ol class="list">
        <li>
          Become empowered and take an active lead in their education process.
        </li>
        <li>Support peers in developing positive, sisterly relationships.</li>
        <li>
          Build community, accountability and collaborative relationships among
          their peers.
        </li>
        <li>
          Adopt healthy social emotional habits that support building positive
          internal self-esteem.
        </li>
        <li>
          Partner with positive role models to create lasting impactful
          relationships.
        </li>
        <li>
          Be supported with transitions from elementary school to college
          (College and Career Readiness).
        </li>
        <li>
          Engage in community-based projects to build civic awareness and
          participation.
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutUsMid',
  methods: {},
}
</script>
<style scoped>
.AboutUsMid {
  text-align: center;
  background-color: white;
  height: 85rem;
}
.left {
  width: 50%;
  height: 100%;
  font-family: 'Black Han Sans';
  margin: 10rem 0 10rem 0;
}
.msksi {
  color: var(--darkpink);
  padding-top: 0;
}
.vision {
  color: var(--navyblue);
  font-size: var(--h1);
}
#right {
  width: 50%;
}
#video-container {
  width: 100%;
  text-align: center;
}
#video {
  padding: 5rem;
  margin-top: -1rem;
  border-style: none;
  width: 85%;
  height: 62%;
}
.list {
  font-size: var(--h3);
  color: var(--navyblue);
  margin-top: -82rem;
  margin-right: 10rem;
  display: block;
  text-align: left;
  line-height: 4rem;
  width: 95%;
  margin: 8rem 0 8rem 0;
  font-family: 'Cairo', sans-serif;
}

li {
  margin-top: 2rem;
}
@media only screen and (max-width: 1500px) {
  .list {
    font-size: var(--subheadingjum);
    line-height: 1.5;
  }
}
@media only screen and (max-width: 1018px) {
  .AboutUsMid {
    text-align: center;
    background-color: white;
    display: inline-block;
    padding-bottom: 6rem;
  }
  .left {
    width: 100vw;
  }
  #right {
    margin-left: auto;
    margin-right: auto;
    width: 50rem;
    padding: 0;
  }
  .list {
    font-size: var(--h4);
    display: block;
    text-align: left;
    margin: 3rem 0 0 3.5rem;
  }
  .msksi {
    color: var(--darkpink);
    font-size: var(--h1);
    margin-top: 4rem;
  }
  .vision {
    color: var(--navyblue);
    font-size: var(--h1);
  }
  #video {
    margin: 2rem 0 2.5rem 0;
    height: 38vw;
    width: 65vw;
  }
  #video-container {
    width: 100%;
  }
}
@media only screen and (max-width: 512px) {
  .AboutUsMid {
    padding-bottom: 0rem;
  }
  #right {
    margin: 0 3rem 0 0rem;
    width: fit-content;
    padding: 2rem;
    padding-top: 0;
    padding-bottom: 5rem;
  }
  .left {
    margin: 2rem 0 0rem 0;
  }
  .list {
    font-size: var(--h5);
    line-height: 2rem;
  }
  .msksi {
    color: var(--darkpink);
    font-size: var(--h3);
    margin-top: 4rem;
  }
  .vision {
    color: var(--navyblue);
    font-size: var(--h3);
  }
  #video {
    margin: 1rem 0 1.5rem 0;
  }
  #video-container {
    width: 100%;
  }
}
</style>
