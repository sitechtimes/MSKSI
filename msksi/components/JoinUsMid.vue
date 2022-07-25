<template>
        <div class="joinusmid">
      <h3 class="subheading wbsm">Website & Social Media Manager</h3>
      <ul id="wbsm">
        <li class="text">Maintain the MSKSI website with the most current information, agendas, opportunities etc</li>
        <li class="text">Highlight our MSKSI members for their work professionally, educationally and personally.</li>
      </ul>
      <form
        target="_blank"
        action="https://docs.google.com/forms/d/e/1FAIpQLSdLleMNkyNTnnFrRaDa_cKdIi1B3mEL_bXRyhrxpzT3pGzzxA/viewform"
      >
        <button class="button yellow">Join Us!</button>
      </form>
    </div>
</template>
<script>
export default {
  name: 'JoinUsMid',
  methods: {},
}

</script>

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

.button:hover{
  transform: scale(1.2);
  transition: transform .75s;

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
.yellow {
  color: var(--navyblue);
  background-color: var(--yellow);
  filter: drop-shadow(5px 5px 4px grey);
}
.text {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: var(--h3);
  margin-left: 15rem;
  margin-top: 5rem;
  line-height: 5rem;
}
.joinusmid {
  height: 75rem;
  background-color: white;
  margin-top: 20rem;
}
.wbsm {
  font-size: var(--h2);
  margin-top: -4rem;
  color: rgba(220, 53, 92, 1);
  padding-top: 0;
}
#wbsm {
  list-style-type: circle;
  color: var(--navyblue);
  margin-top: 4rem;
}
.wbsmr {
  color: var(--darkpink);
}
@media only screen and (max-width: 1500px) {
  .joinusmid {
    height: 66rem;
  }
  .wbsm {
    margin-top: 0;
  }

  .joinusmid {
    margin-top: 10rem;
  }
  #picture {
    width: 33rem;
    height: 33rem;
  }
}
@media only screen and (max-width: 1200px) {
  .subheading {
    font-size: var(--subheadingju);
  }
  #textgroup {
    width: 70%;
  }
  .text {
    margin-left: 8rem;
    font-size: var(--h5);
  }
  .wbsm {
    margin-left: 6rem;
  }
  #picture {
    width: 25rem;
    height: 25rem;
  }
  .image-container {
    margin-top: 6rem;
    margin-left: 0rem;
  }
}
@media only screen and (max-width: 770px) {
  .subheading {
    font-size: var(--subheadingjum);
    text-align: center;
  }
  #picture {
    width: 24rem;
    height: 24rem;
    display: block;
    margin: auto;
    margin-bottom: 4rem;
  }
  .image-container {
    margin-top: 1rem;
    flex-direction: row;
    display: flex;
    margin-right: auto;
    margin-left: auto;
  }
  #wbsm {
    margin-left: 2rem;
    padding-bottom: 2rem;
    flex-direction: row;
  }
  #textgroup {
    width: 90%;
    margin-left: 0;
  }
  #info {
    flex-direction: column;
  }
  .button {
    margin-top: 9rem;
    margin-left: 4rem;
  }
  .text {
    margin-top: 2rem;
  }
}

@media only screen and (max-width: 500px) {
  #info {
    flex-direction: column;
  }
  #picture {
    width: 20rem;
    height: 20rem;
    top: 0;
    margin-top: 1rem;
  }
  .text {
    margin-top: 0;
    margin-bottom: 0;
    line-height: 3;
    width: 100%;
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
@media only screen and (max-width: 510px){
  .joinusmid {
    height: 95rem;
  }
  .text {
    margin-top: 0;
    margin-bottom: 0;
    
  }
  #wbsm {
    margin-left: -1.8rem;
    font-size: var(--h6);
    width: 95vw;
  }

  .button {
    margin-top: 5rem;
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
  }
  .button {
    margin-top: 8rem;
    margin-left: 1rem;
  }
}
</style>