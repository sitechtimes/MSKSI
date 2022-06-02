<template>
  <div id="footer">
    <h2 class="contactus">Contact Us</h2>
    <h3 class="contacts">blankblankblank@email.com</h3>
    <div class="buttons">
      <a
        class="backing twitter"
        href="https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/downloads/twitter-external-brand-guidelines-01272021.pdf"
        target="_blank"
      >
        <img
          class="icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
          alt=""
        />
      </a>
      <button class="icon instagram"></button>
      <button class="icon tiktok"></button>
      <button class="icon gmail"></button>
    </div>
  </div>
</template>
<style scoped>
#footer {
  background-color: var(--navyblue);
  text-align: center;
  justify-content: center;
  bottom: 0px;
  width: 100%;
  padding-bottom: 3rem;
}
.contacts {
  color: var(--white);
  margin-top: 2rem;
  font-weight: lighter;
  font-size: var(--h5);
  font-family: 'ABeeZee', sans-serif;
}
.contactus {
  color: var(--darkpink);
  font-size: var(--h3);
  font-family: 'Black Han Sans';
  padding-top: 3.5rem;
  font-weight: lighter;
}
.buttons {
  margin-top: 3rem;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  width: 20%;
}
.icon {
  height: 4rem;
  width: 4rem;
}
.backing {
  background-color: white;
  height: 5rem;
  width: 5rem;
  border-radius: 1rem;
}
@media only screen and (max-width: 1032px) {
  #footer {
    width: 100%;
    padding-bottom: 2rem;
  }
  .buttons {
    margin-top: 3rem;
    width: 50%;
  }
  .icon {
    height: 3rem;
    width: 3rem;
    border-radius: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
}
@media only screen and (max-width: 510px) {
  #footer {
    height: 22rem;
    margin-bottom: 0;
  }
}
.icon {
  cursor: pointer;
}
</style>

<script>
export default {
  name: 'Footer',
}
</script>
