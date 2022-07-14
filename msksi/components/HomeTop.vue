<template>
  <div>
    <div class="hometop">
      <div class="alignright">
        <h2 class="name mysis">My Sister’s</h2>
        <div class="line2">
          <img id="logo-img" src="~/assets/images/logo.png" alt="msksi logo" />
          <h2 class="name keeper">Keeper</h2>
        </div>

        <h3 class="si">Staten Island</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeTop',
}
</script>

<style scoped>
.hometop {
  background-color: var(--navyblue);
  padding-bottom: 30rem;
}
.name {
  font-size: var(--h1);
  font-family: 'Black Han Sans';
  font-weight: lighter;
  color: var(--yellow);
  padding-top: 7rem;
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
  font-size: 13rem;
  text-align: right;
  padding-top: 30rem;
}
.line2 {
  display: flex;
  height: fit-content;
  flex-direction: row;
  justify-content: right;
  align-content: center;
}

.keeper {
  color: var(--darkpink);
  font-size: 13rem;
  text-align: right;
  padding-top: 0rem;
  margin-top: 2rem;
}

#logo-img {
  width: auto;
  height: 18rem;
  margin-right: 3.5rem;
}

.si {
  font-family: 'ABeeZee', sans-serif;
  color: var(--yellow);
  font-size: var(--h3);
  width: 35rem;
  text-align: right;
  margin-top: 3rem;
  margin-left: 75%;
}
@media only screen and (max-width: 1500px) {
  .hometop {
    background-color: var(--navyblue);
    padding-bottom: 30rem;
  }
  .name {
    margin-left: 0;
    margin-right: 0;
    font-size: 11rem;
  }
  .keeper {
    width: 45rem;
    margin-top: 1rem;
  }
  .si {
    margin-top: 2rem;
    font-size: var(--h4);
    margin-left: 64%;
  }
  #logo-img {
    width: auto;
    height: 14.5rem;
    margin-right: 1rem;
  }
}
@media only screen and (max-width: 1032px) {
  .mysis {
    text-align: center;
    margin-left: 0;
    margin-right: 0;
  }
  .name {
    margin-left: 0;
    margin-right: 0;
    font-size: 9.5rem;
  }
  .keeper {
    width: 37rem;
    text-align: left;
  }
  .si {
    font-size: 3rem;
    width: 28rem;
    text-align: right;
    margin-top: 1rem;
  }
  #logo-img {
    width: auto;
    height: 12.5rem;
    margin-right: 2.5rem;
  }
}
@media only screen and (max-width: 770px) {
  .hometop {
    padding-bottom: 20rem;
  }
  .mysis {
    padding-top: 20rem;
    text-align: center;
    margin-left: 0;
    margin-right: 0;
  }
  .name {
    font-size: var(--h2);
    margin-left: 0;
    margin-right: 0;
  }
  .line2 {
    width: 41.5rem;
  }
  .keeper {
    font-size: var(--h2);
    width: 23.5rem;
  }
  .si {
    font-size: var(--h5);
    width: 47rem;
    text-align: right;
    margin-left: 0%;
  }
  #logo-img {
    height: 8.5rem;
    margin-right: 2rem;
  }
}
@media only screen and (max-width: 500px) {
  .name {
    font-size: var(--h3);
  }
  .line2 {
    margin-right: 3rem;
    width: initial;
  }
  .keeper {
    font-size: var(--h3);
    width: 18rem;
  }
  .si {
    font-size: var(--h6);
    width: 33rem;
  }
  #logo-img {
    height: 6.5rem;
    margin-right: 1rem;
  }
}
</style>
