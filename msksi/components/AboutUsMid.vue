<template>
  <div class="AboutUsMid">
    <div class="left">
      <h2 class="heading v msksi">MSKSI</h2>
      <div class="buttonRow">
    </div>
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
  methods: {
  },
}
</script>
<style scoped>
.AboutUsMid {
  text-align: center;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left {
  width: 50%;
  font-family: 'Black Han Sans';
  margin: 10rem 0 10rem 0;
}
.msksi {
  color: var(--darkpink);
  padding-top: 0;
}
.vision {
  color: var(--navyblue);
  padding-top: 1.2rem;
}
#right {
  width: 50%;
}
#video-container {
  width: 100%;
  text-align: center;
}
#video {
  height: 22vw;
  width: 35vw;
  margin: 2rem 0 2rem 0;
}
.list {
  font-size: var(--h3);
  color: var(--navyblue);
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
    font-size: var(--h4);
  }
}
@media only screen and (max-width: 1032px) {
  .AboutUsMid {
    text-align: center;
    background-color: white;
    display: inline-block;
    padding-bottom: 6rem;
  }
  .left {
    width: 100vw;
    margin: 7rem 0 4rem 0;
  }
  #right {
    margin-left: auto;
    margin-right: auto;
    width: 70rem;
    padding: 0;
  }
  #video {
    margin: 2rem 0 2.5rem 0;
    height: 36.5vw;
    width: 60vw;
  }
  .vision {
    padding-top: 0.5rem;
  }
  .list {
    font-size: var(--h4);
    display: block;
    text-align: left;
    margin: 3rem 0 0 3.5rem;
  }
  #video-container {
    width: 100%;
  }
}
@media only screen and (max-width: 770px) {
  .AboutUsMid {
    padding-bottom: 2rem;
  }
  #right {
    padding: 5rem;
    padding-top: 0rem;
    width: fit-content;
  }
  #video {
    margin: 2rem 0 2.5rem 0;
    height: 43vw;
    width: 70vw;
  }
  #video-container {
    width: 100%;
  }
}
@media only screen and (max-width: 500px) {
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
    margin-top: 4rem;
  }
  .vision {
    padding-top: 0rem;
  }
  #video {
    margin: 1rem 0 1.5rem 0;
  }
  #video-container {
    width: 100%;
  }
}
</style>
