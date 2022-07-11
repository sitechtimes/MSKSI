<template>
  <div id="AboutUsBottom">
    <h2 class="heading gao">Goals and Outcomes</h2>
    <h3 class="will">MSKSI members will:</h3>
    <h4 class="texti">
      Be able to adapt healthy social and emotional habits that will support
      building positive internal self-esteem. Be mindful how others appear and
      show up. Have grace, dignity and leave room for error and forgiveness.
    </h4>
    <h4 class="texti">
      Have a voice, opportunity and forum to grow in the MSKSI community. MSKSI
      focuses on equity in support of all students with a lens on our
      marginalized groups; however MSKSI is not just black and brown students,
      all are welcome.
    </h4>
  </div>
</template>
<script>
export default {
  name: 'AboutUsBottom',
  methods: {},
}
</script>
<style scoped>
#AboutUsBottom {
  background-color: #333043;
  padding-bottom: 10rem;
}
.heading {
  text-align: center;
  color: var(--darkpink);
  font-family: 'Black Han Sans';
}
.will {
  font-size: var(--h3);
  color: var(--yellow);
  text-align: left;
  font-family: 'Black Han Sans';
  margin-left: 11rem;
  margin-top: 8rem;
  font-weight: lighter;
}
.texti {
  color: white;
  font-weight: lighter;
  margin: 11rem;
  display: block;
  margin-top: 6rem;
  margin-bottom: auto;
  font-family: 'Cairo', sans-serif;
  color: var(--white);
  text-align: left;
  justify-content: center;
  font-size: var(--four);
}
.goal {
  color: var(--navyblue);
}
.our {
  color: var(--darkpink);
  font-size: var(--h1);
}
.mission {
  color: var(--yellow);
  font-size: var(--h1);
}
@media only screen and (max-width: 1500px) {
  #AboutUsBottom {
    padding-bottom: 8rem;
  }
  .texti {
    font-size: var(--subheadingjum);
    margin-top: 4rem;
  }
  .will {
    margin-top: 4rem;
    font-weight: lighter;
    font-size: var(--h4);
  }
  .gao {
    padding-top: 7rem;
    font-weight: lighter;
    font-size: var(--h2);
  }
}
@media only screen and (max-width: 1032px) {
  .gao {
    font-size: var(--h2);
  }
  .will {
    margin: 3rem 8rem 0 8rem;
  }
  .texti {
    font-size: var(--h5);
    margin: 2rem 8rem 0 8rem;
  }
  #AboutUsBottom {
    padding-bottom: 6rem;
  }
}
@media only screen and (max-width: 770px) {
  #AboutUsBottom {
    padding-bottom: 6rem;
  }
  .texti {
    margin: 2rem 6rem 0 6rem;
  }
  h2 {
    text-align: center;
    width: 100%;
  }
  .gao {
    font-size: var(--h3);
    text-align: center;
    font-family: 'Black Han Sans';
    font-weight: lighter;
    padding-top: 5rem;
  }
  .will {
    font-size: var(--h5);
    text-align: left;
    font-family: 'Black Han Sans';
    margin: 2rem 6rem 0 6rem;
    font-weight: lighter;
    margin-top: 4rem;
  }
}
@media only screen and (max-width: 550px) {
  .texti {
    margin: 2rem 4rem 0 4rem;
    font-size: var(--h6);
  }
  h2 {
    text-align: center;
    width: 100%;
  }
  .gao {
    font-size: var(--h4);
    text-align: center;
    font-family: 'Black Han Sans';
    font-weight: lighter;
    padding-top: 5rem;
  }
  .will {
    margin: 2rem 4rem 0 4rem;
  }
}
</style>
