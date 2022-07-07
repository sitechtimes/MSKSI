<template>
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
}
.v {
  margin-top: auto;
  margin-bottom: auto;
  display: block;
}
.msksi {
  color: var(--darkpink);
  font-size: var(--h1);
  margin-top: 9rem;
}
.vision {
  color: var(--navyblue);
  font-size: var(--h1);
}
#right {
  width: 50%;
  font-family: 'Cairo', sans-serif;
  /* padding: 7rem;
  padding-left: 10rem; */
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
  }
  #right {
    margin-left: auto;
    margin-right: auto;
    width: 50rem;
    padding: 0;
  }
  .msksi {
    color: var(--darkpink);
    font-size: var(--h2);
    margin-top: 4rem;
  }
  .vision {
    color: var(--navyblue);
    font-size: var(--h2);
  }
  #video {
    margin: 2rem 0 2.5rem 0;
    height: 36.5vw;
    width: 60vw;
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
    text-align: center;
    background-color: white;
    display: inline-block;
    padding-bottom: 0rem;
  }
  .left {
    width: 100%;
  }
  .v {
    text-align: center;
  }
  .msksi {
    color: var(--darkpink);
    font-size: var(--h3);
  }
  #right {
    margin-left: auto;
    width: 75%;
    margin-right: auto;
    padding: 5rem;
    width: fit-content;
    padding-top: 0;
  }

  .list {
    font-size: var(--h4);
    display: block;
    text-align: left;
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
    margin: 2rem 0 2.5rem 0;
    height: 43vw;
    width: 70vw;
  }
  #video-container {
    width: 100%;
  }
}
</style>
