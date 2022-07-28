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
  margin-top: 5rem;
  line-height: 5rem;
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
}
.wbsmr {
  color: var(--darkpink);
}
@media only screen and (max-width: 1500px) {
  .subheading {
    font-size: var(--subheadingju);
    margin-left: 11rem;
  }
  .wbsm {
    margin-top: 0;
  }
  .joinusmid {
    margin-top: 10rem;
  }
  #picture {
    width: 33rem;
    height: 33rem;
  }
}
@media only screen and (max-width: 1200px) {
  .subheading {
    font-size: var(--subheadingju);
  }
  #textgroup {
    width: 70%;
  }
  .text {
    margin-left: 8rem;
  }
  .wbsm {
    margin-left: 6rem;
  }
  #picture {
    width: 25rem;
    height: 25rem;
  }
  .image-container {
    margin-top: 6rem;
    margin-left: 0rem;
  }
}
@media only screen and (max-width: 770px) {
  .subheading {
    font-size: var(--subheadingjum);
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
    margin-left: 0;
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
  }
}

@media only screen and (max-width: 500px) {
  #info {
    flex-direction: column;
  }
  #picture {
    width: 20rem;
    height: 20rem;
    top: 0;
    margin-top: 1rem;
  }
  .text {
    margin-top: 0;
    margin-bottom: 0;
    line-height: 3;
    width: 90%;
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
    flex-direction: row;
    margin: 0;
  }
  .joinbtn {
    margin-top: 8rem;
    margin-left: 1rem;
  }
}
</style>
