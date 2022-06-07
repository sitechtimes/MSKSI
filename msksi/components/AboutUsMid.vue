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
}
.left {
  width: 50%;
  height: 100%;
  font-family: 'Black Han Sans';
  padding-bottom: 10rem;
  padding-top: 2rem;
}
.v {
  margin-top: auto;
  margin-bottom: auto;
  display: block;
}
.msksi {
  color: var(--darkpink);
  font-size: var(--h1);
  padding-top: 9rem;
}
.vision {
  color: var(--navyblue);
  font-size: var(--h1);
}
#right {
  width: 50%;
  margin-left: 50%;
  font-family: 'Black Han Sans';
  margin-top: 3rem;
}
#video {
  padding: 5rem;
  padding-bottom: 6rem;
  border-style: none;
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
  .AboutUsMid {
    text-align: center;
    background-color: white;
    padding-bottom: 10rem;
  }
  .list {
    font-size: var(--subheadingjum);
    margin-top: -68rem;
    line-height: 1.5;
  }
}
@media only screen and (max-width: 510px) {
  .left {
    width: 100%;
    height: 65rem;
    font-family: 'Black Han Sans';
  }
  .v {
    text-align: center;
  }

  #right {
    margin-left: auto;
    width: 75%;
    margin-right: auto;
  }

  .list {
    font-size: var(--h5);
    margin-top: -32rem;
    display: block;
    text-align: left;
    margin-left: 1.5rem;
    margin-right: auto;
  }

  .AboutUsMid {
    text-align: center;
    background-color: white;
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
    padding: 5rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    height: 35%;
  }
}
</style>
