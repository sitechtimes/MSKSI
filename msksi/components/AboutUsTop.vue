<template>
  <div class="AboutUsTop">
    <div>
      <a href='#play' id='target1' class='target'><button @click="playMethod" id=play></button></a>
      <button @click="pauseMethods" id=pause></button>
    </div>
    <h2 class="heading">Our <span class="h mission">Mission</span></h2>
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
      utterance.rate = 10;
      utterance.volume = 10;
      utterance.text = this.textarea;
        speechSynthesis.speak(utterance);
        console.log(this.textarea);
      
      if (this.paused === true ){
        window.speechSynthesis.resume();
        // resume();
      }
    },
    pauseMethods(){
      speechSynthesis.pause();
      this.paused = true;
      // pause();
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
  background-image: url(https://rpsthecoder.github.io/js-speech-synthesis/play.svg);
}

#play:focus {
  background-image: url(https://rpsthecoder.github.io/js-speech-synthesis/play1.svg);
}

#pause {
  background-image: url(https://rpsthecoder.github.io/js-speech-synthesis/pause.svg);
}

#pause:focus {
  background-image: url(https://rpsthecoder.github.io/js-speech-synthesis/pause1.svg);
}


@media only screen and (max-width: 1500px) {
  .AboutUsTop {
    height: 85rem;
  }
  .text {
    font-size: var(--subheadingjum);
  }
}
@media only screen and (max-width: 824px) {
  .heading {
    margin-left: 8rem;
  }
  .text {
    margin: 4rem 8rem 0 8rem;
  }
}
@media only screen and (max-width: 510px) {
  .AboutUsTop {
    height: 95rem;
  }
  h2 {
    font-size: var(--h3);
    margin-top: 0;
    padding-top: 0;
  }
  .mission {
    font-size: var(--h3);
  }
  .heading {
    margin-left: 4.5rem;
    padding-top: 10.5rem;
  }
  .text {
    margin-top: 2rem;
    font-size: var(--h5);
    width: 80%;
  }
}
</style>
