<template>
  <div>
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

/* @media only screen and (max-width: 1500px) {
  .keeper {
    color: var(--darkpink);
    font-size: 12rem;
    text-align: right;
    width: 80%;
  }
} */ ;
</style>
