<template>
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
        target="_blank">
        <button class="button pink">Join Us!</button>
      </form>
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
  filter: drop-shadow(3px 4px 3px black);
}

#subc {
  list-style-type: circle;
  color: white;
  margin-top: 2rem;
}
.subc {
  color: var(--darkpink);
  font-size: var(--h2);
  padding-top: 2rem;
  padding-bottom: 2rem;
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
  line-height: 6rem;
}
.joinustop {
  height: 100rem;
}
.joinusmid {
  height: 100rem;
  background-color: white;
  margin-top: 20rem;
}

@media only screen and (max-width: 1500px) {
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

}
@media only screen and (max-width: 810px) {
  .joinustop {
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
<script>
export default {
  name: 'JoinUsTop',
  methods: {},
}

</script>