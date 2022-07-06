<template>
  <div class="joinustop">
    <h2 class="heading">Join Us Today!</h2>
    <div id="info">
      <div id="textgroup"> 
      <h3 class="subheading subc">Sub Committee</h3>
    <ul id="subc">
      <li class="text">Sign in-Attendance Assist</li>
      <li class="text">Session Feedback/Tracking and follow up</li>
      <li class="text">Keeping the attendance sign in for meetings in chat</li>
      <li class="text">Transformation Tables</li>
      <li class="text">Managing website & calendar</li>
    </ul>
    </div>
    
       <div class="image"> 
          <img
            id="picture"
            src="~/assets/images/subcom.png"
            alt="remote meeting"/>
          </div> 
    </div>
    <form
      action="https://docs.google.com/forms/d/e/1FAIpQLSe2NJzLuFUyTc_8Jcmn4DhyH5qfBWbKtwRjYrSzCFyERI8r1Q/viewform"
      target="_blank"
    >
      <button class="button pink">Join Us!</button>
    </form>
  </div>
</template>
<style scoped>
#info{
  display: flex;
  flex-direction: row;
}
#textgroup{
  width: 75%;
}
#picture{
margin-top: 14rem;
height: 30rem;
widows: 30rem
;
} 
.image{
    justify-content: end;
    margin-right: 10rem;
}
.joinustop {
  background-color: #333043;
  padding-bottom: 8rem;
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
  font-size: var(--h3);
  margin-left: 15rem;
  margin-top: 0.5rem;
  line-height: 6rem;
}

@media only screen and (max-width: 1500px) {
  .text {
    font-size: var(--list);
    margin-left: 12rem;
    margin-top: 0rem;
  }
  .heading {
    margin-left: 11rem;
  }
  #subc {
    margin-left: 2rem;
    padding-bottom: 2rem;
  flex-direction: row;
  }
  .subheading {
    font-size: var(--subheadingju);
    margin-left: 11rem;
    margin-top: 2rem;
    padding-bottom: 0;
  }
  #picture{
  width: 28rem;
  height: 28rem;
  margin-top: 13rem;
} 
.image{
  margin-top: 1rem;
  flex-direction: row;
     display: flex;
    justify-content:end;
    margin-right: 10rem;
}
}
@media only screen and (max-width: 1000px) {
  #picture{
  width: 25rem;
  height: 25rem;
} 
.image{
  margin-top: 3rem;
  flex-direction: column;
     display: flex;
    justify-content: center;

}
  #subc {
    margin-left: 2rem;
    padding-bottom: 2rem;
  flex-direction: row;
  }
  #textgroup{
    width: 90%;
  }
}
@media only screen and (max-width: 770px) {
  .text {
    margin-left: 8rem;
    font-size: var(--h5);
  }
    #picture{
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
.image{
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
  #textgroup{
    width: 80%;
  }
  #info{
    flex-direction: column;
  }
}

@media only screen and (max-width: 510px) {
  #info{
    flex-direction: column;
  }
  #picture{
  position: relative;
  top: 0;
  margin-bottom: 2rem;
  margin-top: 2rem;
}
  .text {
    margin-top: 0;
    margin-bottom: 0;
  }
  #subc {
    margin-top: 0rem;
    margin-left: -1.8rem;
    font-size: var(--h6);
    width: 95vw;
    flex-direction: column;
  }
  .text {
    margin-left: 8rem;
    font-size: var(--h5);
  }
  .subc {
    color: var(--darkpink);
    font-size: var(--h3);
    margin-left: 4rem;
  }
  .heading {
    font-size: var(--h3);
    margin-top: 0;
    margin-left: 4rem;
  }
  .subheading {
    font-size: var(--subheadingjum);
    margin-top: 0;
  }
  .image {
    display: flex;
    justify-content: center;
    flex-direction: row;
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
