<template>
  <div>
    <Navbar />
    <div class="hometop">
      <h2 class="heading mysis">My Sister’s</h2>
      <h2 class="heading keeper">Keeper</h2>
      <h3 class="si">Staten Island</h3>
    </div>

    <Footer />
  </div>
</template>
<style scoped>
.mysis {
  font-size: 13rem;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30rem;
}
.keeper {
  color: var(--darkpink);
  font-size: 13rem;
  text-align: right;
  width: 65.5%;
  padding: 0;
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
  .mysis {
    padding-top: 25rem;
  }
  .keeper {
    color: var(--darkpink);
    font-size: 12rem;
    text-align: right;
    width: 80%;
    margin-top: 1rem;
    padding-top: 2rem;
  }
  .si {
    padding-top: 0rem;
    margin-top: 3rem;
  }
  .hometop {
    height: 80rem;
  }
}
@media only screen and (max-width: 1032px) {
  .hometop {
    height: auto;
  }
  .mysis {
    margin-left: 2rem;
    margin-top: 8rem;
  }
  .keeper {
    margin-top: 1rem;
    margin-left: 5rem;
  }
  .si {
    font-size: var(--h4);
  }
  .hometop {
    background-color: var(--navyblue);
    height: 100rem;
  }
}
@media only screen and (max-width: 400px) {
  .mysis {
    padding-top: 25rem;
  }
  .keeper {
    color: var(--darkpink);
    font-size: 12rem;
    text-align: right;
    width: 80%;
    margin-top: 1rem;
    padding-top: 2rem;
  }
  .si {
    padding-top: 0rem;
    margin-top: 3rem;
  }
  .hometop {
    height: 80rem;
  }
}
</style>
