<template>
  <div id="AboutUsBottom">
    <h2 class="heading gao">Goals and Outcomes</h2>
    <h3 class="subheading will">MSKSI members will:</h3>
    <h4 class="text texti">
      Be able to adapt healthy social and emotional habits that will support
      building positive internal self-esteem. Be mindful how others appear and
      show up. Have grace, dignity and leave room for error and forgiveness.
    </h4>
    <h4 class="text texti">
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
  font-family: 'Sora', sans-serif;
  font-weight: bolder;
  font-style: normal;
}
.will {
  color: var(--yellow);
}
.texti {
  display: block;
  color: var(--white);
  justify-content: center;
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
    margin-top: 4rem;
  }
  .will {
    margin-top: 4rem;
  }
}
@media only screen and (max-width: 1032px) {
  .will {
    margin: 3rem 8rem 0 8rem;
  }
  .texti {
    margin: 2rem 8rem 0 8rem;
  }
  #AboutUsBottom {
    padding-bottom: 6rem;
  }
}
@media only screen and (max-width: 770px) {
  .texti {
    margin: 2rem 6rem 0 6rem;
  }
  h2 {
    text-align: center;
    width: 100%;
  }
  .will {
    margin: 2rem 6rem 0 6rem;
    margin-top: 4rem;
  }
}
@media only screen and (max-width: 500px) {
  .texti {
    margin: 2rem 4rem 0 4rem;
  }
  h2 {
    text-align: center;
    width: 100%;
  }
  .will {
    margin: 2rem 4rem 0 4rem;
  }
}
</style>
