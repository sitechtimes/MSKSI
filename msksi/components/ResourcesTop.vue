<template>
  <div class="resourcestop">
    <h2 class="heading">Resources</h2>
    <div id="resources">
      <div class="resource">
        <img src="~/assets/images/folder.png" alt="folder" />
        <a
          target="_blank"
          id="link"
          href="https://sites.google.com/strongschools.nyc/msksi/resources#h.vefx57yqjvc2"
          >MSKSI Video Folder</a
        >
      </div>
      <div class="resource">
        <img src="~/assets/images/jamboard.png" alt="jamboard" />
        <a
          target="_blank"
          id="link"
          href="https://sites.google.com/strongschools.nyc/msksi/resources#h.3zdell8jwjmb"
          >June 11, 2021 Jamboard Vision-board Reflections</a
        >
      </div>
      <div class="resource">
        <img src="~/assets/images/padlet.png" alt="padlet logo" />
        <a
          target="_blank"
          id="link"
          href="https://sites.google.com/strongschools.nyc/msksi/resources#h.2ejb8tqf6z7a"
          >April 9 MSKSI Padlet for Breakouts</a
        >
      </div>
      <div class="resource">
        <img src="~/assets/images/journal.png" alt="journal" />
        <a
          target="_blank"
          id="link"
          href="https://docs.google.com/presentation/u/0/d/17DbBKlW0LjksZ3NsXBlewAGMp1v4YNWDP85bbhJEwTQ/copy"
          >MSKSI Journal</a
        >
      </div>
      <div class="resource">
        <img src="~/assets/images/drive.png" alt="google drive logo" />
        <a
          target="_blank"
          id="link"
          href="https://docs.google.com/document/d/11fbuSuNiU4O6g6RKTeAxfixFOV89Dd1W1wO5CEcbwmQ/edit"
          >Background-Vision Board</a
        >
      </div>
      <div class="resource">
        <a target="_blank" id="link" href=""
          >VoiceThread from the MSKSI Meeting January 8, 2021</a
        >
        <ul>
          <h4 class="item">Gathering inspiration</h4>
          <h4 class="item">Thinking outside the box and failing</h4>
          <h4 class="item">Ideas for journaling and goal setting</h4>
          <h4 class="item">Projects & connecting with others</h4>
        </ul>
      </div>

      <div class="resource">
        <img src="~/assets/images/jamboard2.png" alt="jamboard" />
        <a
          target="_blank"
          id="link"
          href="https://jamboard.google.com/d/1I0G1z3-7R96nD9EAgRI4ncikXWkw8AhpdrRZC3JOtIw/viewer"
          >Jamboard January 8, 2021 Gratitude Prompts link
        </a>
      </div>
      <div class="resource">
        <a
          id="link"
          href="https://sites.google.com/strongschools.nyc/msksi/resources#h.xere2vvav6n9"
          >Let's hear from you!
        </a>
        <h3>
          Take some time as your journal, goal set or continue to work on a
          vision board and jot down somethings you need from your MSKSI team and
          the adults supporting you in MSKSI. Fill out the anonymous form and
          share with us YOUR needs.
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResourcesTop',
}
</script>
<style scoped>
.resource:hover {
  transform: scale(1.1);
}
h3 {
  font-size: var(--h6);
  font-family: 'Cairo', sans-serif;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
#resources {
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 6rem;
}
.resource {
  margin-top: 5rem;
  height: 30rem;
  width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: 0.5s ease-in-out;
}
.resourcestop {
  background-color: #333043;
}
.heading {
  color: var(--yellow);
}
img {
  height: 15rem;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-top: 3rem;
}
#link {
  color: #333043;
  font-size: var(--h5);
  font-family: 'Cairo', sans-serif;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
}
.item {
  color: #333043;
  font-family: 'Cairo', sans-serif;
  text-align: center;
  font-size: var(--h6);
}
ul {
  margin-top: 0.2rem;
  margin-left: auto;
  margin-right: auto;
}
@media only screen and (max-width: 1500px) {
  .resource {
    width: 30rem;
    margin-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    background-color: rgb(255, 255, 255);
    border-radius: 2rem;
    margin-left: 2rem;
  }
  .resourcestop {
    background-color: #333043;
  }
  img {
    height: 14rem;
  }
  #link {
    color: #333043;
    font-size: var(--h5);
    font-family: 'Cairo', sans-serif;
    text-align: center;
    margin-top: 1rem;
  }
}
@media only screen and (max-width: 720px) {
  .heading {
    margin-left: 4rem;
    margin-top: 0rem;
  }
  img {
    height: 13rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4rem;
  }
  #link {
    font-size: var(--h6);
  }
  #resources {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 5rem;
  }
  .resource {
    margin-top: 3rem;
    width: 25rem;
    height: 25rem;
  }
  h3 {
    font-size: var(--one);
  }
}
@media only screen and (max-width: 710px) {
  #resources {
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 5rem;
  }
  .resource {
    margin-top: 3rem;
    width: 25rem;
    height: 25rem;
    margin-right: 2rem;
    margin-left: 2rem;
  }
  h3 {
    font-size: var(--smallText);
  }
}

@media only screen and (max-width: 620px) {
  .heading {
    font-size: var(--h4);
    text-align: center;
    margin-left: 0;
  }

  #resources {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-bottom: 5rem;
  }
  .resource {
    margin-top: 3rem;
    width: 25rem;
    height: 25rem;
    display: flex;
    flex-wrap: wrap;
    background-color: rgb(255, 255, 255);
    border-radius: 2rem;
    padding-bottom: 2rem;
  }
  img {
    height: 10rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4rem;
  }
  #link {
    font-size: var(--h6);
  }
  h3 {
    font-size: var(--one);
  }
  .resource:hover {
    transform: scale(1.05);
  }
}
</style>

