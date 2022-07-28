<template>
  <div class="joinusmid">
    <div id="info">
      <div id="textgroup">
        <h3 class="subheading wbsm wbsmtext">Website & Social Media Manager</h3>
        <ul id="wbsm">
          <li class="text wbsmtext">
            Maintain the MSKSI website with the most current information,
            agendas, opportunities etc
          </li>
          <li class="text wbsmtext">
            Highlight our MSKSI members for their work professionally,
            educationally and personally.
          </li>
        </ul>
      </div>

      <div class="image-container">
        <img
          id="picture"
          src="~/assets/images/social.png"
          alt="woman on social media"
        />
        <form
          target="_blank"
          action="https://docs.google.com/forms/d/e/1FAIpQLSdLleMNkyNTnnFrRaDa_cKdIi1B3mEL_bXRyhrxpzT3pGzzxA/viewform"
        >
          <button class="button yellow joinbtn">Join Us!</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'JoinUsMid',
  mounted() {
    this.scrollFadeGeneral()
  },
  methods: {
    scrollFadeGeneral() {
      const genTL = this.$gsap.timeline({
        scrollTrigger: {
          trigger: '.wbsm',
          start: 'top bottom-=20%',
        },
      })
      genTL.fromTo(
        '.wbsmtext',
        {
          y: 40,
          opacity: 0,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.5,
        }
      )
    },
  },
}
</script>

<style scoped>
.joinbtn {
  cursor: url('../assets/images/hoverBtnCursor.png'), auto;
  font-size: 3rem;
}
.joinbtn:hover {
  transform: scale(1.05);
}
.joinusmid {
  padding-bottom: 10rem;
  background-color: white;
}
#info {
  display: flex;
  flex-direction: row;
}
#textgroup {
  width: 72%;
}
.text {
  margin-left: 14rem;
  margin-right: 4rem;
  line-height: 2;
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
  margin-top: 6rem;
}
.wbsm {
  color: rgba(220, 53, 92, 1);
  margin-top: 12rem;
  font-size: var(--h2);
}
#wbsm {
  color: var(--navyblue);
  margin-top: 4rem;
}
li {
  margin-right: 0;
}
.wbsmr {
  color: var(--darkpink);
}
@media only screen and (max-width: 1500px) {
  .wbsm {
    font-size: var(--h3);
  }
  .joinusmid {
    margin-top: 0rem;
  }
  .image-container {
    margin-top: 7rem;
    margin-right: 8rem;
  }
  #picture {
    width: 33rem;
    height: 33rem;
  }
}
@media only screen and (max-width: 1032px) {
  .subheading {
    font-size: var(--subheadingju);
  }
  .image-container {
    margin-right: 6rem;
  }
  #textgroup {
    width: 70%;
  }
  .wbsm {
    margin-top: 10rem;
  }
  #wbsm {
    margin-left: 5rem;
    margin-right: 4rem;
  }
  .text {
    margin-left: 8rem;
    margin-right: 2rem;
  }
  #picture {
    width: 28rem;
    height: 28rem;
    margin-bottom: 1rem;
  }
  .image-container {
    margin-top: 8rem;
    margin-left: 0rem;
  }
}
@media only screen and (max-width: 770px) {
  .joinusmid {
    padding-bottom: 4rem;
  }
  .wbsm {
    font-size: var(--h4);
    margin: 0;
    margin-top: 8rem;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  #picture {
    width: 24rem;
    height: 24rem;
    display: block;
    margin: auto;
    margin-bottom: 4rem;
  }
  .image-container {
    margin-top: 1rem;
    flex-direction: row;
    display: flex;
    margin-right: auto;
    margin-left: auto;
  }
  #wbsm {
    margin-left: 2rem;
    padding-bottom: 2rem;
    flex-direction: row;
  }
  #textgroup {
    width: 90%;
    margin-right: auto;
    margin-left: auto;
  }
  #info {
    flex-direction: column;
  }
  .joinbtn {
    width: 16rem;
    height: 5rem;
    font-size: var(--h5);
    margin: 5rem;
    margin-top: 8rem;
  }
  .text {
    margin-top: 2rem;
    margin-left: 5rem;
  }
}

@media only screen and (max-width: 500px) {
  #info {
    flex-direction: column;
  }
  #picture {
    width: 20rem;
    height: 20rem;
    margin: 0rem auto 0rem auto;
  }
  .text {
    margin-top: 3rem;
    margin-bottom: 0;

    width: 90%;
    line-height: 2;
  }
  #wbsm {
    padding-bottom: 2rem;
    margin-top: 0rem;
  }
  .wbsm {
    margin: 5rem;
    margin-bottom: 2.5rem;
    text-align: center;
    font-size: var(--subheadingjum);
  }
  .image-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0;
  }
  .button {
    margin: 0 4rem 4rem 4rem;
  }
}
</style>
