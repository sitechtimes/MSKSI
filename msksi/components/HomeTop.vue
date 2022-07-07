<template>
  <div>
    <div class="hometop">
      <div class="alignright">
        <h2 class="name mysis">My Sister’s</h2>
        <div class="line2">
          <img
            id="temp-logo"
            src="https://cutewallpaper.org/24/heart-clip-heart/clip-art-hearts-clip-art-two-hearts-clipart-panda-free-clipart-images--heart-clip-art-clip-art-free-clip-art.gif"
            alt=""
          />
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
  height: 100rem;
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
  position: relative;
}

.keeper {
  color: var(--darkpink);
  font-size: 13rem;
  text-align: right;
  padding-top: 3rem;
  width: 50rem;
  margin-right: 0%;
}

#temp-logo {
  /* border: solid 2px red; */
  width: auto;
  height: 18rem;
  position: absolute;
  bottom: 5%;
  right: 57rem;
}

.si {
  font-family: 'ABeeZee', sans-serif;
  color: var(--yellow);
  font-size: var(--h3);
  width: 35rem;
  text-align: right;
  margin-top: 10rem;
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
  .si {
    margin-top: 2rem;
    font-size: var(--h4);
    margin-left: 64%;
  }
  #temp-logo {
    width: auto;
    height: 16rem;
    position: absolute;
    bottom: 5%;
    right: 47rem;
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
    width: 52rem;
  }
  .si {
    font-size: 3rem;
    width: 28rem;
    text-align: right;
    margin-top: 3rem;
  }
  #temp-logo {
    width: auto;
    height: 12rem;
    position: absolute;
    bottom: 5%;
    right: 42rem;
  }
}
@media only screen and (max-width: 770px) {
  .hometop {
    height: 95rem;
  }
  .mysis {
    padding-top: 20rem;
    text-align: center;
    margin-left: 0;
    margin-right: 0;
  }
  .name {
    font-size: var(--h3);
    margin-left: 0;
    margin-right: 0;
  }
  .keeper {
    margin-top: 2rem;
    font-size: var(--h2);
    font-weight: lighter;
    text-align: right;
    margin-right: 6rem;
  }
  .si {
    font-size: var(--h6);
    width: 35rem;
    text-align: right;
    margin-top: 0.8rem;
    margin-left: 0%;
  }
  #temp-logo {
    width: auto;
    height: 5rem;
    position: absolute;
    bottom: 5%;
    right: 24rem;
  }
}
</style>
