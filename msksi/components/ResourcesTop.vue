<template>
  <div class="resourcestop">
    <h2 class="heading">Resources</h2>
    <div id="resources">
      <div class="resource">
        <img src="https://res.cloudinary.com/dzzja5n1u/image/upload/c_scale,w_147/v1658158400/folder_ceqsbs.png" alt="folder" />
        <a
          target="_blank"
          id="link"
          href="https://sites.google.com/strongschools.nyc/msksi/resources#h.vefx57yqjvc2"
          >MSKSI Video Folder</a
        >
      </div>
      <div class="resource">
        <img src="https://res.cloudinary.com/dzzja5n1u/image/upload/c_scale,w_266/v1658158427/jamboard_ss2kz9.png" alt="jamboard" />
        <a
          target="_blank"
          id="link"
          href="https://sites.google.com/strongschools.nyc/msksi/resources#h.3zdell8jwjmb"
          >June 11, 2021 Jamboard Vision-board Reflections</a
        >
      </div>
      <div class="resource">
        <img src="https://res.cloudinary.com/dzzja5n1u/image/upload/c_scale,w_150/v1658158440/padlet_fioxqe.png" alt="padlet logo" />
        <a
          target="_blank"
          id="link"
          href="https://sites.google.com/strongschools.nyc/msksi/resources#h.2ejb8tqf6z7a"
          >April 9 MSKSI Padlet for Breakouts</a
        >
      </div>
      <div class="resource">
        <img src="https://res.cloudinary.com/dzzja5n1u/image/upload/c_scale,w_266/v1658158421/journal_vdoeki.png" alt="journal" />
        <a
          target="_blank"
          id="link"
          href="https://docs.google.com/presentation/u/0/d/17DbBKlW0LjksZ3NsXBlewAGMp1v4YNWDP85bbhJEwTQ/copy"
          >MSKSI Journal</a
        >
      </div>
      <div class="resource">
        <img src="https://res.cloudinary.com/dzzja5n1u/image/upload/c_scale,w_167/v1658158021/drive_uikidy.png" alt="google drive logo" />
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
        <img src="https://res.cloudinary.com/dzzja5n1u/image/upload/c_scale,w_266/v1658158424/jamboard2_piqvce.png" alt="jamboard" />
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
  grid-gap: 7rem;
  justify-items: center;
  grid-template-rows: auto;
  padding-bottom: 10rem;
  margin: 6rem 11rem 0 11rem;
}
.resource {
  height: 30rem;
  width: 30rem;
  border-radius: 2rem;
  background-color: white;
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
  margin: 0 auto 0 auto;
  display: block;
}

#link {
  color: #333043;
  font-size: var(--h5);
  font-family: 'Cairo', sans-serif;
  width: 80%;
  margin-top: 2rem;
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
  img {
    height: 14rem;
  }
}
@media only screen and (max-width: 1032px) {
  #resources {
    margin-left: 8rem;
    margin-right: 8rem;
  }
  .resource:hover {
    transform: scale(1);
  }
}
@media only screen and (max-width: 770px) {
  img {
    height: 13rem;
    margin-left: auto;
    margin-right: auto;
  }
  #link {
    font-size: var(--h6);
  }
  #resources {
    margin-top: 4rem;
  }
  .resource {
    margin-top: 0rem;
    width: 25rem;
    height: 25rem;
  }
  h3 {
    font-size: var(--one);
  }
  ul {
    font-size: var(--one);
  }
}
@media only screen and (max-width: 500px) {
  img {
    height: 7.5rem;
  }
  #link {
    font-size: var(--h6);
    margin-top: 1rem;
    line-height: 2rem;
  }
  .item {
    font-size: var(--tiny);
    line-height: 1.5rem;
  }
  h3 {
    font-size: var(--tiny);
    line-height: 1.5rem;
  }
  #resources {
    margin-left: 5rem;
    margin-right: 5rem;
  }
  .resource {
    width: 18rem;
    height: 18rem;
  }
  .resource:hover {
    transform: scale(1.05);
  }
}
</style>
