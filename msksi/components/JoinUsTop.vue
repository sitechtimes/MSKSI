<template>
  <div class="joinustop">
    <h2 class="heading">Join Us Today!</h2>
    <div id="info">
      <div id="textgroup">
        <h3 class="subheading subc">Sub Committee</h3>
        <ul id="subc">
          <li class="text">Sign in-Attendance Assist</li>
          <li class="text">Session Feedback/Tracking and follow up</li>
          <li class="text">Keep the attendance sign in for meetings in chat</li>
          <li class="text">Transformation Tables</li>
          <li class="text">Managing website & calendar</li>
        </ul>
      </div>
      <div class="image-container">
        <img
          id="picture"
          src="https://res.cloudinary.com/dzzja5n1u/image/upload/q_100/v1658233391/MSKSI/subcom_lrb2ca.png"
          alt="remote meeting"
        />
        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSe2NJzLuFUyTc_8Jcmn4DhyH5qfBWbKtwRjYrSzCFyERI8r1Q/viewform"
          target="_blank"
        >
          <button class="button pink">Join Us!</button>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
.joinustop {
  background-color: #333043;
  padding-bottom: 8rem;
}
.button {
  padding: 1.2rem;
  margin-top: 10rem;
  margin-left: 80%;
  position: sticky;
  left: 125rem;
  width: 22rem;
  height: 8rem;
  font-size: var(--four);
  border-radius: 20rem;
  font-family: 'Black Han Sans';
  border: none;
  cursor: pointer;
}
#info {
  display: flex;
  flex-direction: row;
}
#textgroup {
  width: 70%;
  text-align: left;
}
.image-container {
  text-align: center;
  margin-top: 2rem;
}
#picture {
  margin-top: 8rem;
  height: 35rem;
  width: 35rem;
}
.pink {
  background-color: var(--darkpink);
  color: white;
  filter: drop-shadow(3px 4px 3px black);
  margin-top: 5rem;
}
#subc {
  color: white;
  margin-top: 2rem;
  padding-bottom: 5rem;
  flex-direction: row;
  margin-left: 4rem;
  line-height: 1;
}
.subc {
  color: var(--darkpink);
  font-size: var(--h2);
}
@media only screen and (max-width: 1500px) {
  #subc {
    margin-left: 1rem;
    padding-bottom: 2rem;
  }
  .subc {
    font-size: var(--h3);
    margin-top: 5rem;
  }
  .text {
    margin-left: 13rem;
    margin-right: 3rem;
  }
  .joinusmid {
    height: 75rem;
  }
  #picture {
    width: 26rem;
    height: 26rem;
    margin-top: 5rem;
  }
  .image-container {
    margin-top: 7rem;
    margin-right: 5rem;
    margin-left: 2rem;
  }
}
@media only screen and (max-width: 1032px) {
  .subheading {
    font-size: var(--subheadingju);
  }
  #picture {
    width: 24rem;
    height: 24rem;
  }
  .image-container {
    margin-top: 6rem;
    margin-left: 2rem;
    margin-right: 7rem;
  }
  .text {
    margin-right: 1rem;
  }
  #textgroup {
    width: 70%;
  }
}

@media only screen and (max-width: 770px) {
  #picture {
    width: 22rem;
    height: 22rem;
    margin-left: 3.5rem;
    margin-top: 2rem;
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
    margin: 2rem 4rem 0 8rem;
  }
  .subheading {
    color: var(--darkpink);
    margin: 0;
    text-align: center;
    margin-top: 3rem;
    font-size: var(--h4);
  }
  #subc {
    margin-top: 3rem;
    margin-left: 3.5rem;
    margin-right: 3.5rem;
    margin: 3rem 3.5rem 0 3.5rem;
  }
  .button {
    width: 16rem;
    height: 4.5rem;
    font-size: var(--h5);
    font-weight: bolder;
    border-radius: 20rem;
    font-family: 'Sora', sans-serif;
    border: none;
    margin: 4rem;
    margin-top: 11rem;
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
  .joinustop {
    padding-bottom: 4rem;
  }
  #picture {
    width: 17rem;
    height: 17rem;
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;
  }
  .text {
    margin-top: 2rem;
    margin-bottom: 0;
    line-height: 1.3;
    margin-left: 5rem;
    margin-right: 7rem;
  }
  #subc {
    margin-top: 2rem;
    font-size: var(--h6);
    margin-right: auto;
    margin-left: 4rem;
  }

  .heading {
    font-size: var(--h3);
    margin-left: 4rem;
  }
  .button {
    margin-top: 6rem;
    width: 16rem;
    height: 4.5rem;
    font-size: var(--h5);
    font-weight: lighter;
    border-radius: 20rem;
    font-family: 'Black Han Sans';
    border: none;
    margin-left: auto;
    display: block;
    margin-right: auto;
  }
  .subheading {
    font-size: var(--subheadingjum);
    margin-top: 4rem;
  }
  .image-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .button {
    margin: 4rem;
  }
}
</style>
<script>
export default {
  name: 'JoinUsTop',
  methods: {},
}
</script>
