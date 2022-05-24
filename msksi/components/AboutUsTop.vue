<template>
  <div class="AboutUsTop">
    <h2 class="heading">
   Our <span class="h mission">Mission</span>
    </h2>
    <h3 class="text">
      My Sister’s Keeper Staten Island (MSKSI) founded in November 2018, creates
      a support system to build a community for social, emotional, and academic
      support and leadership empowerment for MSKSI members from elementary to
      high school students in District 31. MSKSI fosters opportunities to build
      leadership, encourage sisterhood and build inner confidence (self-esteem)
      through workshops, sister circles, leadership events and community-based
      projects. My Sister’s Keeper Staten Island empowers young people to become
      impactful/inspiring, self-motivating, powerful transformative leaders.
      Giving a safe space and opportunity to our marginalized MSKSI young people
      in order to have a voice, respect and rapport in a diverse community.
    </h3>
  </div>
</template>
<script>
export default {
  name: 'AboutUsTop',
  methods: {},
}
</script>
<style scoped>
.mission{
  color: var(--darkpink);
  font-size: var(--h2);
}
.h2{
  font-size: var(--h2);
}
.AboutUsTop {
  background-color: var(--navyblue);
  height: 100rem;
}
.text {
  margin-left: auto;
  margin-right: auto;
  margin-top: 5.5rem;
  margin-bottom: auto;
  font-family: 'Cairo', sans-serif;
  color: var(--white);
  text-align: left;
  font-size: var(--h3);
  width: 88%;
  justify-content: center;
}
@media only screen and (max-width: 1500px) {
  .AboutUsTop {
    height: 85rem;
  }
  .text {
    margin-top: 5rem;
    font-size: var(--h4);
  }
}

@media only screen and (max-width: 810px) {
  .AboutUsTop {
    height: 95rem;
    z-index: 1;
  }
  .h {
    font-size: var(--h3);
    margin-top: 0;
    padding-top: 0;
  }
  .heading {
    margin-left: 3rem;
    padding-top: 10.5rem;
  }
  .text {
    margin-top: 2rem;
    font-size: var(--h5);
    width: 80%;
  }
}
</style>
