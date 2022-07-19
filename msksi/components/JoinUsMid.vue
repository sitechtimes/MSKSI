<template>
  <div class="joinusmid">
    <div id="info">
      <div id="textgroup">
        <h3 class="subheading wbsm">Website & Social Media Manager</h3>
        <ul id="wbsm">
          <li class="text">
            Maintain the MSKSI website with the most current information,
            agendas, opportunities etc
          </li>
          <li class="text">
            Highlight our MSKSI members for their work professionally,
            educationally and personally.
          </li>
        </ul>
      </div>

      <div class="image-container">
        <img
          id="picture"
          src="https://res.cloudinary.com/dzzja5n1u/image/upload/c_scale,w_400/v1658163434/social_a4dawq.png"
          alt="woman on social media"
        />
        <form
          target="_blank"
          action="https://docs.google.com/forms/d/e/1FAIpQLSdLleMNkyNTnnFrRaDa_cKdIi1B3mEL_bXRyhrxpzT3pGzzxA/viewform"
        >
          <button class="button yellow">Join Us!</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'JoinUsMid',
  methods: {},
}
</script>

<style scoped>
#info {
  display: flex;
  flex-direction: row;
}
#textgroup {
  width: 75%;
}
#picture {
  width: 40rem;
  height: 40rem;
}
.yellow {
  color: var(--navyblue);
  background-color: var(--yellow);
  filter: drop-shadow(5px 5px 4px grey);
}
.image-container {
  text-align: center;
}
.text {
  font-family: 'Be Vietnam Pro', sans-serif;
  margin-left: 15rem;
  margin-top: 5.5rem;
  line-height: 6rem;
  width: 60vw;
  line-height: 7rem;
}
.joinusmid {
  padding-bottom: 8rem;
  background-color: white;
  margin-top: 15rem;
}
.wbsm {
  font-size: var(--h2);
  margin-top: -4rem;
  color: rgba(220, 53, 92, 1);
  padding-top: 0;
}
#wbsm {
  list-style-type: circle;
  color: var(--navyblue);
  margin-top: 4rem;
  padding-bottom: 5rem;
}
.wbsmr {
  color: var(--darkpink);
}
/* .button{
  cursor: url('../images/hoverBtnCursor.png'), auto;
} */
@media only screen and (max-width: 1500px) {
  .subheading {
    font-size: var(--subheadingju);
    margin-left: 11rem;
  }
  .text {
    margin-left: 12rem;
    margin-top: 0.2rem;
  }
  .wbsm {
    margin-top: 0;
  }
  .joinusmid {
    margin-top: 10rem;
  }
  #picture {
    width: 35rem;
    height: 35rem;
  }
}
@media only screen and (max-width: 1032px) {
  .text {
    margin-left: 8rem;
  }
  #picture {
    width: 21rem;
    height: 21rem;
    position: sticky;
    margin-top: 0rem;
    display: block;
    margin: auto;
    padding: 0;
    margin-right: auto;
    margin-bottom: 4rem;
  }
  .image-container {
    margin-top: 1rem;
    flex-direction: column;
    display: flex;
    justify-content: flex-end;
  }
  #subc {
    margin-left: 2rem;
    padding-bottom: 2rem;
    flex-direction: row;
  }
  #textgroup {
    width: 80%;
  }
  #info {
    flex-direction: column;
  }
}
@media only screen and (max-width: 810px) {
  .text {
    margin-left: 8rem;
  }
  .wbsm {
    margin-left: 8rem;
    margin-left: 4rem;
  }
}
@media only screen and (max-width: 770px) {
  #picture {
    width: 21rem;
    height: 21rem;
    position: relative;
    margin-top: 0rem;
    display: block;
    margin: auto;
    margin-bottom: 4rem;
  }
  .image-container {
    margin-top: 1rem;
    flex-direction: column;
    display: flex;
    justify-content: flex-end;
    margin-right: 10rem;
  }
  #wbsm {
    margin-left: 2rem;
    padding-bottom: 2rem;
    flex-direction: row;
  }
  #textgroup {
    width: 80%;
  }
  #info {
    flex-direction: column;
  }
  .button {
    margin-top: 7rem;
    width: 16rem;
    height: 4.5rem;
    font-size: var(--h5);
    font-weight: lighter;
    border-radius: 20rem;
    font-family: 'Black Han Sans';
    border: none;
    margin: 4rem;
  }
}

@media only screen and (max-width: 510px) {
  #info {
    flex-direction: column;
  }
  #picture {
    width: 25rem;
    height: 25rem;
    position: relative;
    top: 0;
    margin-bottom: 4rem;
    margin-top: 1rem;
  }
  .text {
    margin-top: 0;
    margin-bottom: 0;
  }
  #wbsm {
    margin-left: -1.8rem;
    padding-bottom: 2rem;
  }
  .subheading {
    font-size: var(--subheadingjum);
  }
  .image-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0;
  }
}
</style>
