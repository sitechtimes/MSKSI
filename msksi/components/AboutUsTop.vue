<template>
  <div class="AboutUsTop">
    <div class="blockText">
      <h2 class="heading">Our <span class="h mission">Mission</span></h2>
      <button @click="playMethod" id=play></button>
      <button @click="pauseMethods" id=pause>
        <font-awesome-icon @click="pauseIcon" v-if="!this.iconHidden" :icon="['far', 'circle-pause']"  class="pause"></font-awesome-icon>
        <font-awesome-icon @click="activePauseIcon" v-if="!this.iconNotHidden" :icon="['fas', 'circle-pause']" class="pause"></font-awesome-icon>
      </button>
    </div>
    <h3 id="text" class="text">
        {{ textarea }}
    </h3>
  </div>
</template>
<script>
// import { resourceLimits } from 'worker_threads'

export default {
  name: 'AboutUsTop',
  data(){
    return{
      textarea: `      My Sister’s Keeper Staten Island (MSKSI) founded in November 2018, creates
      a support system to build a community for social, emotional, and academic
      support and leadership empowerment for MSKSI members from elementary to
      high school students in District 31. MSKSI fosters opportunities to build
      leadership, encourage sisterhood and build inner confidence (self-esteem)
      through workshops, sister circles, leadership events and community-based
      projects. My Sister’s Keeper Staten Island empowers young people to become
      impactful/inspiring, self-motivating, powerful transformative leaders.
      Giving a safe space and opportunity to our marginalized MSKSI young people
      in order to have a voice, respect and rapport in a diverse community.`,
      paused: false,
      iconHidden: false,
      iconNotHidden: true,
    }
  },
  head (){
    return{
      htmlAttrs: {lang:'en'}
    }
  },
  mounted(){
     if ('speechSynthesis' in window) {
     console.log('works') /* speech synthesis supported */
  }
  else {
     console.log('no works') /* speech synthesis not supported */
  }
  },
  methods: {
    playMethod(){
      const utterance = new SpeechSynthesisUtterance();
      let voices = []
      voices = window.speechSynthesis.getVoices();
      utterance.voice = voices[0];
      utterance.volume = 10;
      utterance.text = this.textarea;
      speechSynthesis.speak(utterance);

      this.iconHidden = false;
      this.iconNotHidden = true;
      if (this.paused === true ){
        window.speechSynthesis.resume();
        // resume();
      }
    },
    pauseMethods(){
      speechSynthesis.pause();
      this.paused = true;
      // pause();
    },
    pauseIcon(){
      this.iconHidden = true;
      this.iconNotHidden = false;
    },
    activePauseIcon(){
      this.iconHidden = false;
      this.iconNotHidden = true;
    }
  },
}
</script>
<style scoped>
.AboutUsTop {
  padding-bottom: 9rem;
  background-color: #333043;
}
.mission {
  color: var(--darkpink);
  font-size: var(--h1);
}

.AboutUsTop {
  background-color: #333043;
  height: 100rem;
}
.blockText{
  display:flex;
  align-items: center;
  margin-right:1rem;
}

.text {
  margin: 4rem 11rem 0 11rem;
  font-family: 'Cairo', sans-serif;
  color: var(--white);
  text-align: left;
  font-size: var(--four);
  justify-content: center;
}
/* test buttons */
button {
  background: none;
  border: none;
  cursor: pointer;
  height: 48px;
  outline: none;
  padding: 0;
  width: 48px;
}

#play {
  background-image: url("~/assets/images/pinkPlayBtn.png");
}

#play:focus {
  background-image: url("~/assets/images/pinkPlayed.png");
}

#pause {
  /* background-image: url("~/assets/images/pauseBtn.png"); */
  font-size: 7.5rem;
  color: var(--darkpink);
}

/* #pause:focus {
  background-image: url(https://rpsthecoder.github.io/js-speech-synthesis/pause1.svg);
} */


@media only screen and (max-width: 1500px) {
  .mission {
    font-size: var(--h2);
  }
  .text {
    font-size: var(--subheadingjum);
  }
}
@media only screen and (max-width: 1032px) {
  .mission {
    font-size: var(--h2);
  }
  .text {
    margin: 3rem 8rem 0 8rem;
    font-size: var(--h5);
  }
}
@media only screen and (max-width: 770px) {
  .AboutUsTop {
    padding-bottom: 5rem;
  }
  .mission {
    font-size: var(--h3);
  }
  .text {
    margin-top: 2rem;
    font-size: var(--h5);
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
}
@media only screen and (max-width: 500px) {
  .mission {
    font-size: var(--h4);
  }
  .text {
    margin-top: 2rem;
    font-size: var(--h6);
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
