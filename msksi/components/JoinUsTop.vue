<template>
  <div class="joinustop">
    <h2 class="heading fade">Join Us Today!</h2>
    <div id="info">
      <div id="textgroup">
        <h3 class="subheading subc subctext">Sub Committee</h3>
        <ul id="subc">
          <li class="text subctext fade">Sign in-Attendance Assist</li>
          <li class="text subctext">Session Feedback/Tracking and follow up</li>
          <li class="text subctext">
            Keep the attendance sign in for meetings in chat
          </li>
          <li class="text subctext">Transformation Tables</li>
          <li class="text subctext">Managing website & calendar</li>
        </ul>
      </div>
      <div class="image-container">
        <img
          id="picture"
          src="https://res.cloudinary.com/dzzja5n1u/image/upload/c_scale,w_300/v1658233391/subcom_lrb2ca.png"
          alt="remote meeting"
        />
        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSe2NJzLuFUyTc_8Jcmn4DhyH5qfBWbKtwRjYrSzCFyERI8r1Q/viewform"
          target="_blank"
        >
          <button class="button pink joinbtn">Join Us!</button>
        </form>
      </div>
    </div>
  </div>
</template>
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
.image-container {
  text-align: center;
  margin-top: 2rem;
  margin-left: 4rem;
}
#picture {
  margin-top: 8rem;
  height: 30rem;
  width: 30rem;
}
.joinustop {
  background-color: #333043;
  padding-bottom: 8rem;
}

.pink {
  background-color: var(--darkpink);
  color: white;
  filter: drop-shadow(3px 4px 3px black);
  margin-top: 4rem;
}

#subc {
  list-style-type: circle;
  color: white;
  margin-top: 2rem;
  padding-bottom: 5rem;
  flex-direction: row;
}
.subc {
  color: var(--darkpink);
  font-size: var(--h2);
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.text {
  font-family: 'Be Vietnam Pro', sans-serif;
  margin-left: 15rem;
  line-height: 7rem;
}
@media only screen and (max-width: 1500px) {
  .text {
    margin-left: 12rem;
    margin-top: 0rem;
  }
  #subc {
    margin-left: 2rem;
    padding-bottom: 2rem;
  }
  .subheading {
    font-size: var(--subheadingju);
    margin-left: 11rem;
    margin-top: 2rem;
    padding-bottom: 0;
  }
  .text {
    margin-left: 12rem;
    margin-top: 0.5rem;
  }
  .joinusmid {
    height: 75rem;
  }
  #picture {
    width: 28rem;
    height: 28rem;
    margin-top: 5rem;
  }
  .image-container {
    margin-top: 1rem;
    margin-right: 5rem;
    margin-left: 2rem;
  }
}
@media only screen and (max-width: 1200px) {
  #picture {
    width: 24rem;
    height: 24rem;
  }
  .image-container {
    margin-top: 6rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }
  .text {
    margin-left: 6rem;
  }
  #textgroup {
    width: 70%;
  }
  .subheading {
    margin-left: 6rem;
  }
}

@media only screen and (max-width: 770px) {
  #picture {
    width: 22rem;
    height: 22rem;
  }
  #textgroup {
    width: 100%;
    padding-left: 0;
  }
  #info {
    display: flex;
    flex-direction: column;
  }
  .text {
    margin-left: 8rem;
  }
  .subc {
    color: var(--darkpink);
    font-size: var(--h3);
    margin-left: 4rem;
    margin-top: 0.2rem;
  }
  #subc {
    margin-top: 0.5rem;
  }
  .heading {
    margin-top: 0;
    margin-left: 4rem;
  }
  .button {
    width: 16rem;
    height: 5rem;
    font-size: var(--h5);
    font-weight: bolder;
    border-radius: 20rem;
    font-family: 'Sora';
    border: none;
    margin: 8rem;
    margin-top: 12rem;
  }
  .subheading {
    font-size: var(--subheadingjum);
    text-align: center;
  }
  .image-container {
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0rem;
  }
}
@media only screen and (max-width: 500px) {
  #picture {
    width: 17rem;
    height: 17rem;
    margin-left: 10rem;
  }
  .text {
    margin-top: 2rem;
    margin-bottom: 0;
    line-height: 3;
    width: 100%;
  }
  #subc {
    margin-top: 0rem;
    margin-left: -1.8rem;
    font-size: var(--h6);
    width: 95vw;
  }
  .subheading {
    font-size: var(--subheadingjum);
    margin-top: 0;
  }
  .image-container {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin: 0;
    margin-bottom: 2rem;
  }
  .joinbtn {
    margin-top: 10rem;
    margin-left: 5rem;
  }
}
</style>
<script>
export default {
  name: 'JoinUsTop',
  mounted() {
    this.scrollFadeGeneral()
    this.bounce()
  },
  methods: {
    scrollFadeGeneral() {
      const genTL = this.$gsap.timeline({})
      genTL
        .fromTo(
          '.fade',
          {
            y: 40,
            opacity: 0,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.3,
            duration: 0.5,
          }
        )
        .fromTo(
          '.subctext',
          {
            y: 40,
            opacity: 0,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.5,
          },
          '<+0.3'
        )
    },
    bounce() {
      const bounceTL = this.$gsap.timeline({
        repeat: -1,
        yoyo: true,
      })
      bounceTL
        .to('#picture', {
          y: -10,
          duration: 1.3,
        })
        .to('#picture', {
          y: 0,
          duration: 1.3,
        })
    },
  },
}
</script>
