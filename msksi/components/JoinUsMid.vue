<template>
  <div class="joinusmid">
    <div id="info">
    
        <div id="textgroup">
          <h3 class="subheading wbsm">Website & Social Media Manager</h3>
           <ul id="wbsm">
           <li class="text">
            Maintain the MSKSI website with the most current information, agendas,
            opportunities etc
          </li>
          <li class="text">
            Highlight our MSKSI members for their work professionally, educationally
            and personally.
          </li>
        </ul>

        </div>
       
            <div class="image">
              <img
            id="picture"
                src="~/assets/images/social.png"
                alt="woman on social media"/>
    </div>
    </div>
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
#info{
  display: flex;
  flex-direction: row;
}
#textgroup{
  width: 75%;
}
#picture{
  width: 35rem;
  height: 35rem;
  margin-top: 4rem;
} 
.image{
     display: flex;
    justify-content: end;
    margin-right: 10rem;
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
  margin-top: 5.5rem;
  line-height: 6rem;
  width: 60vw;
  line-height: 6rem;
  display: inline-block
}
.joinusmid {
  padding-bottom: 8rem;
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
  margin-top: 2rem;
  padding-bottom: 5rem;
}
.wbsmr {
  color: var(--darkpink);
}
@media only screen and (max-width: 1500px) {
  .subheading {
    font-size: var(--subheadingju);
    margin-left: 11rem;
  }
  .text {
    font-size: var(--list);
    margin-left: 12rem;
    margin-top: 0.2rem;
  }
  .wbsm {
    margin-top: 0;
  }
  .joinusmid {
    margin-top: 10rem;
  }
  #picture{
  width: 28rem;
  height: 28rem;
} 
.image{
  margin-top: 1rem;
  flex-direction: row;
     display: flex;
    justify-content: flex-end;
    margin-right: 10rem;
}
}
@media only screen and (max-width: 810px) {
  .text {
    margin-left: 8rem;
    font-size: var(--h5);
  }
  .wbsm {
    font-size: var(--h3);
    margin-left: 8rem;
    margin-left: 4rem;
  }
}
@media only screen and (max-width: 510px) {
    #info{
    flex-direction: column;
  }
  #picture{
  width: 25rem;
  height: 25rem;
  position: relative;
  top: 0;
  margin-bottom: 4rem;
  margin-top: 1rem;
}
  .text {
    margin-top: 0;
    margin-bottom: 0;
  }
  #wbsm {
    margin-left: -1.8rem;
    font-size: var(--h6);
    padding-bottom: 2rem;
  }
  .subheading {
    font-size: var(--subheadingjum);
  }
  .image {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin: 0;
  }
}
</style>
