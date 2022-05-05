<template>
  <div>
    <Navbar />
    <div class="hometop">
      <div class="alignright">
        <h2 class="heading mysis">My Sister’s</h2>
        <h2 class="heading keeper">Keeper</h2>
        <h3 class="si">Staten Island</h3>
      </div>
    </div>

    <div class="homespotlight">
      <img
        id="spotlight"
        src="https://www.yosemitelakespark.org/wp-content/uploads/2021/02/ylp-spotlight.png"
        alt=""
      />
    </div>
    <Footer />
  </div>
</template>
<style scoped>
.hometop {
  background-color: var(--navyblue);
  height: 100rem;
}
.alignright {
  width: fit-content;
  display: flex;
  align-content: right;
  height: fit-content;
  flex-direction: column;
  margin: auto;
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

.si {
  font-family: 'ABeeZee', sans-serif;
  color: var(--yellow);
  font-size: var(--h3);
  width: 25rem;
  text-align: right;
  margin-top: 10rem;
  margin-left: 75%;
}

.homespotlight {
  height: 100rem;
  background-color: var(--white);
}

#spotlight {
  margin-left: 2rem;
  margin-top: 20rem;
}

@keyframes rotateLight {
  0% {
    transform: rotate(90);
  }
  100% {
    transform: rotate(0);
  }
}

@media (prefers-reduced-motion: no-preference) {
  #spotlight {
    animation-name: rotateLight;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
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
