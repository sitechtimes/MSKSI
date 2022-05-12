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
      <div class="readmore"></div>

      <div class="text-holder">
        <h2 class="heading commspot">Community Spotlight</h2>
        <p class="commspot-text">
          hi guys im so cool like its really amazing im amazing this is a nice
          page i love it sm i love life #thriving we love it here everyone does
          we should really have more mental health days
        </p>
      </div>
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

.text-holder {
  position: absolute;
  border: solid 2px red;
  height: 100%;
  margin-left: 72rem;
  left: 0;
  right: 0;
  text-align: left;
  display: flex;
  justify-content: left;
  flex-direction: column;
}
.commspot {
  color: var(--darkpink);
  left: 0;
  right: 0;
  top: 0;
  margin-left: 0;
  padding-top: 0;
  margin-right: 12rem;
}

.commspot-text {
  font-size: var(--h3);
  color: var(--navyblue);
  font-family: 'ABeeZee', sans-serif;
  margin-top: 3rem;
  margin-right: 25rem;
  line-height: 5rem;
  border: solid 2px red;
}

.readmore {
  height: 125rem;
  width: 125rem;
  background-color: var(--tpnavyblue);
  clip-path: polygon(100% 27%, 68% 100%, 100% 100%);
  position: absolute;
  bottom: 0;
  right: 0;
  transition: all 0.3s;
  z-index: 10;
}

.readmore:hover {
  background-color: var(--navyblue);
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
