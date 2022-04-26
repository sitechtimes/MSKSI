<template>
  <div>
    <Navbar />
    <div class="hometop">
      <div class="alignright">
        <h2 class="heading mysis">My Sister’s</h2>
        <h2 class="heading keeper">Keeper</h2>
      </div>

      <h3 class="si">Staten Island</h3>
    </div>

    <div class="homespotlight"></div>
    <Footer />
  </div>
</template>
<style scoped>
.alignright {
  border: 2px solid red;
  width: fit-content;
  display: flex;
  align-content: right;
  height: fit-content;
  flex-direction: column;
  transform: translateX(50%);
}
.mysis {
  font-size: 12rem;
  text-align: right;
  padding-top: 30rem;
}
.keeper {
  color: var(--darkpink);
  font-size: 12rem;
  text-align: right;

  padding-top: 5rem;
}
.hometop {
  background-color: var(--navyblue);
  height: 100rem;
}
.si {
  font-family: 'ABeeZee', sans-serif;
  color: var(--yellow);
  font-size: var(--h3);
  width: 90%;
  text-align: right;
  margin-top: 10rem;
}

.homespotlight {
  height: 10rem;
  background-color: var(--white);
}

/* @media only screen and (max-width: 1500px) {
  .keeper {
    color: var(--darkpink);
    font-size: 12rem;
    text-align: right;
    width: 80%;
  }
} */
</style>
