<template>
  <div>
    <div class="hometop">
      <div class="alignright">
        <h2 class="heading mysis">My Sister’s</h2>
        <div class="line2">
          <img
            id="temp-logo"
            src="https://cutewallpaper.org/24/heart-clip-heart/clip-art-hearts-clip-art-two-hearts-clipart-panda-free-clipart-images--heart-clip-art-clip-art-free-clip-art.gif"
            alt=""
          />
          <h2 class="heading keeper">Keeper</h2>
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
.heading {
  margin-left: 0;
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
  .si {
    margin-top: 5rem;
  }
  .mysis {
    padding-top: 23rem;
  }
}
@media only screen and (max-width: 1200px) {
  .mysis {
    text-align: center;
    margin-left: 0;
    margin-right: 0;
  }
  .heading {
    margin-left: 0;
    margin-right: 0;
    font-size: 9.5rem;
  }
  .keeper {
    width: 52rem;
  }
  .si {
    font-size: var(--h4);
    width: 25rem;
    text-align: right;
    margin-top: 3rem;
  }
  #temp-logo {
    width: auto;
    height: 14rem;
    position: absolute;
    bottom: 5%;
    right: 42rem;
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
  .si {
    font-size: var(--subheadingjum);
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
