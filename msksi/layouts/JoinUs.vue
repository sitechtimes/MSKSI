<template>
  <div>
    <Navbar />
    <div class="joinustop">
      <h2 class="heading">Join Us Today!</h2>
      <h3 class="subheading subc">Sub Comittee</h3>
      <ul id="subc">
        <li class="text">Sign in-Attendance Assist</li>
        <li class="text">Session Feedback/Tracking and follow up</li>
        <li class="text">
          Keeping the attendance sign in for the meetings (in chat)
        </li>
        <li class="text">Transformation Tables</li>
        <li class="text">Managing website & calendar</li>
      </ul>
      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSe2NJzLuFUyTc_8Jcmn4DhyH5qfBWbKtwRjYrSzCFyERI8r1Q/viewform"
        target="_blank"
      >
        <button class="button pink">Join Us!</button>
      </form>
    </div>
    <div class="joinusmid">
      <h3 class="subheading wbsm">Website & Social Media Manager</h3>
      <ul id="wbsm">
        <li class="text">Sign in-Attendance Assist</li>
        <li class="text">Session Feedback/Tracking and follow up</li>
        <li class="text">
          Keeping the attendance sign in for the meetings (in chat)
        </li>
        <li class="text">Transformation Tables</li>
        <li class="text">Managing website & calendar</li>
      </ul>
      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSdLleMNkyNTnnFrRaDa_cKdIi1B3mEL_bXRyhrxpzT3pGzzxA/viewform"
      >
        <button class="button yellow" target="_blank">Join Us!</button>
      </form>
    </div>
    <Footer />
  </div>
</template>
<style scoped>
.button {
  padding: 1.2rem;
  margin-top: 10rem;
  margin-left: 80%;
  position: sticky;
  left: 125rem;
  width: 22rem;
  height: 8rem;
  font-size: var(--h3);
  border-radius: 20rem;
  font-family: 'Black Han Sans';
  border: none;
  cursor: pointer;
}

.button:active {
  animation: press 0.2s 1 linear;
}
@keyframes press {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.92);
  }
  to {
    transform: scale(1);
  }
}
.pink {
  background-color: var(--darkpink);
  color: white;
  filter: drop-shadow(3px 4px 3px rgba(204, 203, 203, 0.75));
}
.yellow {
  color: var(--navyblue);
  background-color: var(--yellow);
  filter: drop-shadow(5px 5px 4px rgba(117, 117, 117, 0.75));
}
#subc {
  list-style-type: circle;
  color: white;
  margin-top: 2rem;
}
.subc {
  color: var(--darkpink);
  font-size: var(--h2);
}
.joinustop {
  background-color: var(--navyblue);
  height: 65rem;
}
.text {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: var(--h3);
  margin-left: 15rem;
  margin-top: 0.5rem;
}
.joinustop {
  height: 100rem;
}
.joinusmid {
  height: 100rem;
  background-color: white;
  margin-top: 20rem;
}
.wbsm {
  font-size: var(--h2);
  color: rgba(220, 53, 92, 1);
}
#wbsm {
  list-style-type: circle;
  color: var(--navyblue);
  margin-top: 2rem;
}
.wbsmr {
  color: var(--darkpink);
}
@media only screen and (max-width: 1500px) {
  .joinusmid {
    height: 66rem;
  }
  .joinustop {
    height: 85rem;
  }
  .text {
    font-size: var(--list);
  }
  .subheading {
    font-size: var(--subheadingju);
  }
  .button {
    margin-top: 7.5rem;
    position: sticky;
    left: 11rem;
    width: 20rem;
    height: 5.5rem;
  }
  .text {
    font-size: var(--h3);
    margin-left: 12rem;
    margin-top: 0.5rem;
  }

  .subheading {
    margin-left: 6rem;
  }
  .joinustop {
    height: 85rem;
  }
  .joinusmid {
    height: 75rem;
  }
  .wbsm {
    margin-top: 0;
  }

  .joinusmid {
    margin-top: 10rem;
  }
}
@media only screen and (max-width: 810px) {
  .joinustop {
    height: 95rem;
  }
  .joinusmid {
    height: 95rem;
  }
  .text {
    margin-left: 8rem;
    font-size: var(--h5);
  }
  .subc {
    color: var(--darkpink);
    font-size: var(--h3);
    margin-left: 4rem;
    margin-top: 2rem;
  }
  .wbsm {
    font-size: var(--h3);
    margin-left: 8rem;
    margin-top: 0rem;
    margin-left: 4rem;
  }
  .heading {
    font-size: var(--h3);
    margin-top: 0;
  }
  .button {
    margin-top: 5rem;
    width: 16rem;
    height: 4.5rem;
    font-size: var(--h4);
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
</style>
