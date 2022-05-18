<template>
  <div>
    <Navbar />
    <div class="hometop">
      <div class="mainlogo">
        <h2 class="homelogo" id="mysis">My Sister’s</h2>
        <h2 class="homelogo" id="keeper">Keeper</h2>
        <h3 class="homelogo" id="si">Staten Island</h3>
      </div>
    </div>

    <Footer />
  </div>
</template>
<style scoped>
.hometop {
  background-color: var(--navyblue);
  height: 100rem;
}
.mainlogo {
  text-align: right;
  font-family: 'Black Han Sans';
}
.homelogo {
  margin-top: 2rem;
  font-size: 13rem;
  display: inline-block;
}
#mysis {
  padding-top: 30rem;
  color: var(--yellow);
  text-align: center;
}
#keeper {
  color: var(--darkpink);
  display: block;
}
#si {
  font-family: 'ABeeZee', sans-serif;
  color: var(--yellow);
  font-size: var(--h2);
  width: 82%;
  text-align: right;
  margin-top: 4rem;
  display: block;
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
}
@media only screen and (max-width: 400px) {
  .hometop {
    height: 80rem;
  }
}
</style>
