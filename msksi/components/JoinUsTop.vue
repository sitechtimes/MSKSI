<template>
  <div class="joinustop">
    <h2 class="heading">Join Us Today!</h2>
    <h3 class="subheading subc">Sub Committee</h3>
    <ul id="subc">
      <li class="text">Sign in-Attendance Assist</li>
      <li class="text">Session Feedback/Tracking and follow up</li>
      <li class="text">Keeping the attendance sign in for meetings in chat</li>
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
  font-size: var(--four);
  border-radius: 20rem;
  font-family: 'Black Han Sans';
  border: none;
  cursor: pointer;
}

.button:hover {
  transform: scale(1.2);
  transition: transform 0.75s;
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
  background-color: #333043;
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
@media only screen and (max-width: 1500px) {
  .joinustop {
    height: 100rem;
  }
  .text {
    font-size: var(--list);
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
}
@media only screen and (max-width: 770px) {
  .text {
    font-size: var(--h3);
    margin-left: 12rem;
    margin-top: 0.5rem;
  }
  .joinusmid {
    height: 75rem;
  }
}
@media only screen and (max-width: 810px) {
  .joinustop {
    height: 100rem;
  }
  .text {
    margin-left: 8rem;
    font-size: var(--h5);
  }
  .subc {
    color: var(--darkpink);
    font-size: var(--h3);
    margin-left: 4rem;
    margin-top: 0.2rem;
  }
  .subheading {
    font-size: var(--subheadingjum);
    margin-top: 0;
  }
}
</style>
<script>
export default {
  name: 'JoinUsTop',
  methods: {},
}
</script>
