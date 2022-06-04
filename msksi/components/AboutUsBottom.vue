<template>
  <div id="AboutUsBottom">
    <h2 class="gao">Goals and Outcomes</h2>
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
.texti {
  color: white;
  font-weight: lighter;
  width: 90%;
  margin-left: 11rem;
  margin-right: 11rem;
  display: block;
  margin-top: 5rem;
  margin-bottom: auto;
  font-family: 'Cairo', sans-serif;
  color: var(--white);
  text-align: left;

  justify-content: center;
  font-size: var(--four);
}
#AboutUsBottom {
  background-color: #333043;
  height: 95rem;
}
.gao {
  font-size: var(--h2);
  text-align: center;
  color: var(--darkpink);
  font-family: 'Black Han Sans';
  padding-top: 8rem;
  font-weight: lighter;
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
@media only screen and (max-width: 1500px){
  .texti{
    font-size: var(--subheadingjum);
  }
  #AboutUsBottom {
  background-color: #333043;
  height: 75rem;
}
.will{
  margin-top: 4rem;
  font-weight: lighter;
}
.gao {

  padding-top: 7rem;
  font-weight: lighter;
}
}
@media only screen and (max-width: 510px) {
  #AboutUsBottom {
    height: 87rem;
  }
  .texti {
    margin-top: 2rem;
    font-size: var(--h5);
    width: 78%;
    margin-left: auto;
    margin-right: auto;
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
    margin-left: 4rem;
    font-weight: lighter;
    margin-top: 4rem;
  }
}
</style>
