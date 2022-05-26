<template>
     <div class="hometop">
      <h2 class="homelogo mysis">My Sister’s</h2>
      <h2 class="homelogo keeper">Keeper</h2>
      <h3 class="si">Staten Island</h3>
    </div>
</template>

<script>
export default {
  name: 'HomeTop',
}
</script>

<style scoped>
.homelogo {
  margin-top: 2rem;
  font-weight: lighter;
}
.mysis {
  font-size: 13rem;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30rem;
  display: flex;
  justify-content: center;
  color: var(--yellow);
  font-family: 'Black Han Sans';
}
.keeper {
  color: var(--darkpink);
  font-size: var(--h1);
  font-family: 'Black Han Sans';
  text-align: right;
  width: 42.5%;
  font-size: 13rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: right;
}
.heading {
  margin-top: 3rem;
}
.hometop {
  background-color: var(--navyblue);
  height: 100rem;
}
.si {
  font-family: 'ABeeZee', sans-serif;
  color: var(--yellow);
  font-size: var(--h2);
  width: 82%;
  text-align: right;
  margin-top: 4rem;
}
@media only screen and (max-width: 1500px) {
  .hometop {
    height: 80rem;
  }
}
@media only screen and (max-width: 1032px) {
  .hometop {
    height: auto;
  }
  .hometop {
    background-color: var(--navyblue);
    height: 100rem;
  }
    .mysis {
  margin-top: 2rem;
  font-size: var(--h1);
  font-weight: lighter;
  text-align: right;
}
.keeper {
  margin-top: 2rem;
  font-size: var(--h1);
  font-weight: lighter;
  text-align: right;
  margin-right: 6rem;

}
.si{
  font-size: var(  --h3);

}
}
@media only screen and (max-width: 510px) {
  .hometop {
    height: 95rem;
  }
  .mysis {
  margin-top: 2rem;
  font-size: var(--h2);
  font-weight: lighter;
  text-align: right;
}
.keeper {
  margin-top: 2rem;
  font-size: var(--h2);
  font-weight: lighter;
  text-align: right;
  margin-right: 6rem;

}
.si{
  font-size: var(  --subheadingjum);

}
}
</style>