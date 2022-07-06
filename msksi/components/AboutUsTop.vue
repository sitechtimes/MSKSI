<template>
  <div class="AboutUsTop">
    <h2 class="heading">Our <span class="h mission">Mission</span></h2>
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
.AboutUsTop {
  padding-bottom: 9rem;
  background-color: #333043;
}
.mission {
  color: var(--darkpink);
  font-size: var(--h1);
}
.text {
  margin: 4rem 11rem 0 11rem;
  font-family: 'Cairo', sans-serif;
  color: var(--white);
  text-align: left;
  font-size: var(--four);
  justify-content: center;
}
@media only screen and (max-width: 1500px) {
  .text {
    font-size: var(--subheadingjum);
  }
}
@media only screen and (max-width: 1032px) {
  .heading {
    text-align: center;
    margin-left: 0;
  }
  h2 {
    font-size: var(--h2);
  }
  .mission {
    font-size: var(--h2);
  }
  .text {
    margin: 4rem 8rem 0 8rem;
    font-size: var(--h5);
  }
}
@media only screen and (max-width: 770px) {
  .AboutUsTop {
    padding-bottom: 5rem;
  }
  h2 {
    font-size: var(--h3);
    margin-top: 0;
    padding-top: 0;
  }
  .mission {
    font-size: var(--h3);
  }
  .heading {
    padding-top: 3rem;
  }
  .text {
    margin-top: 2rem;
    font-size: var(--h5);
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
