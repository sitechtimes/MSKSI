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
  display: flex;
  justify-content: center;
  align-items: center;
}
.left {
  font-family: 'Black Han Sans';
}
.v {
  margin-top: auto;
  margin-bottom: auto;
  display: block;
  text-align: center;
}
.msksi {
  color: var(--darkpink);
  font-size: var(--h1);
}
.vision {
  color: var(--navyblue);
  font-size: var(--h1);
}
#right {
  width: 50%;
  font-family: 'Black Han Sans';
  padding: 7rem;
  padding-left: 10rem;
}
#video {
  padding: 5rem;
  padding-bottom: 6rem;
  border-style: none;
}
.list {
  font-size: var(--h3);
  color: var(--navyblue);
  display: block;
  text-align: left;
  line-height: 4rem;
  width: 120%;
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
@media only screen and (max-width: 510px) {
  .AboutUsMid {
    text-align: center;
    background-color: white;
    display: inline-block;
    padding-bottom: 6rem;
  }
  #right {
    margin-left: auto;
    margin-right: auto;
    width: 30rem;
    padding: 0;
  }
  .list {
    font-size: var(--h5);
    display: block;
    text-align: left;
    margin-left: 1.5rem;
    margin-right: auto;
    width: 30rem;
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
    height: 22rem;
    width: auto;
  }
}
</style>
