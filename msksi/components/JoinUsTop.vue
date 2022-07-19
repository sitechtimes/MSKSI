<template>
  <div class="joinustop">
    <h2 class="heading">Join Us Today!</h2>
    <div id="info">
      <div id="textgroup">
        <h3 class="subheading subc">Sub Committee</h3>
        <ul id="subc">
          <li class="text">Sign in-Attendance Assist</li>
          <li class="text">Session Feedback/Tracking and follow up</li>
          <li class="text">
            Keeping the attendance sign in for meetings in chat
          </li>
          <li class="text">Transformation Tables</li>
          <li class="text">Managing website & calendar</li>
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
          <button class="button pink">Join Us!</button>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
.button {
  cursor: url('../assets/images/hoverBtnCursor.png'), auto;
  /* cursor: pointer; */
}

.button:hover {
  transform: scale(1.2);
  transition: transform 0.75s;
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
}
#picture {
  margin-top: 8rem;
  height: 30rem;
  width: 30rem;
}
.joinustop {
  background-color: var(--secondarybackground);
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
  margin-top: 0.5rem;
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
    margin-right: 10rem;
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
@media only screen and (max-width: 770px) {
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
    font-size: var(--h3);
    margin-top: 0;
    margin-left: 4rem;
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
  .subheading {
    font-size: var(--subheadingjum);
  }
}
@media only screen and (max-width: 500px) {
  .text {
    margin-top: 0;
    margin-bottom: 0;
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
    flex-direction: column;
    margin: 0;
    margin-bottom: 2rem;
  }
}
</style>
<script>
export default {
  name: 'JoinUsTop',
  methods: {},
}
</script>
