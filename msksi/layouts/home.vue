<template>
  <div>
    <Navbar />
    <div class="hometop">
      <div class="alignright">
        <h2 class="heading mysis">My Sister’s</h2>
        <div class="line2">
          <img
            id="temp-logo"
            src="https://media.discordapp.net/attachments/747595261395861545/971942403323871262/unknown.png"
            alt=""
          />
          <h2 class="heading keeper">Keeper</h2>
        </div>

        <h3 class="si">Staten Island</h3>
      </div>
    </div>

    <div class="homespotlight">
      <transition name="arrowbutton">
        <div class="arrowbutton" @mouseover="a = true" v-show="!a"></div>
      </transition>
      <transition name="readmore">
        <div class="readmore" @mouseout="a = false" v-show="a"></div>
      </transition>

      <h2 class="heading commspot">Community Spotlight</h2>
      <div class="spotlight-images">
        <img
          id="spotlight"
          src="https://www.yosemitelakespark.org/wp-content/uploads/2021/02/ylp-spotlight.png"
          alt=""
        />
        <div id="temp-img"></div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: false,
    }
  },
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
  font-size: var(--h2);
  width: 35rem;
  text-align: right;
  margin-top: 10rem;
  margin-left: 75%;
}

.homespotlight {
  height: 100rem;
  background-color: var(--white);
  position: relative;
}

.spotlight-images {
  width: 68rem;
  height: 75rem;
  position: relative;
}

#spotlight {
  width: 80rem;
  margin-left: 2rem;
  margin-top: -0.25rem;
  filter: saturate(80%);
}

#temp-img {
  border: solid 2px red;
  width: 40rem;
  height: 40rem;
  border-radius: 50%;
  position: absolute;
  bottom: 0%;
  right: 0%;
  background-color: white;
}

.commspot {
  color: var(--darkpink);
  position: absolute;
  text-align: center;
  top: 5rem;
  margin-left: 30rem;
  margin-right: auto;
  left: 0;
  right: 0;
}

.arrowbutton {
  height: 10rem;
  width: 8rem;
  background-color: var(--tpnavyblue);
  position: absolute;
  right: 0;
  top: 50%;
  border-radius: 2rem 0 0 2rem;
}

.readmore {
  height: 125rem;
  width: 125rem;
  background-color: var(--tpnavyblue);
  clip-path: polygon(100% 27%, 68% 100%, 100% 100%);
  position: absolute;
  bottom: 0;
  right: 0;
}

.arrowbutton-leave-active,
.arrowbutton-enter-active,
.readmore-leave-active,
.readmore-enter-active {
  transition: all 0.5s;
}

.arrowbutton-enter,
.arrowbutton-leave-to,
.readmore-enter,
.readmore-leave-to {
  opacity: 0;
}

.arrowbutton-enter-from,
.arrowbutton-leave-to {
  transform: scaleX(1.5);
}

.readmore-enter-from,
.readmore-leave-to {
  transform: translateX(4rem);
}
/* @media only screen and (max-width: 1500px) {
  .keeper {
    color: var(--darkpink);
    font-size: 12rem;
    text-align: right;
    width: 80%;
  }
} */ ;
</style>
