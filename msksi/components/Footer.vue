<template>
  <div id="footer">
    <h2 class="contactus">Contact Us</h2>
    <h3 class="contacts">blankblankblank@email.com</h3>
    <div class="buttons">
      <a
        href="https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/downloads/twitter-external-brand-guidelines-01272021.pdf"
        target="_blank"
      >
        <div class="backing">
          <img
            class="icon twitter"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
            alt=""
          />
        </div>
      </a>
      <a
        href="https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/downloads/twitter-external-brand-guidelines-01272021.pdf"
        target="_blank"
        ><div class="backing">
          <img
            class="icon instagram"
            src="~/assets/images/insta2.jpg"
            alt=""
          /></div
      ></a>
      <a
        href="https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/downloads/twitter-external-brand-guidelines-01272021.pdf"
        target="_blank"
        ><div class="backing">
          <img
            class="icon tiktok"
            src="~/assets/images/tiktok.png"
            alt=""
          /></div
      ></a>
      <a
        href="https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/downloads/twitter-external-brand-guidelines-01272021.pdf"
        target="_blank"
        ><div class="backing">
          <img
            class="icon gmail"
            src="https://res.cloudinary.com/dzzja5n1u/image/upload/c_scale,w_36/v1658158832/gmail_t1edxi.png"
            alt=""
          /></div
      ></a>
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
  font-family: 'Sora';
  padding-top: 3.5rem;
  font-weight: bolder;
}
.buttons {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-evenly;
  width: 40rem;
  padding: 2rem;
  padding-top: 1.5rem;
}
.icon {
  width: auto;
  filter: saturate(0);
  transition: all 0.2s;
}
.twitter {
  height: 3rem;
}
.instagram {
  height: 4rem;
}
.tiktok {
  height: 3.5rem;
  filter: invert() saturate(0);
}
.gmail {
  height: 3rem;
}
.icon:hover {
  filter: saturate(100%);
}
.tiktok:hover {
  filter: invert() saturate(100%);
}
.backing {
  height: 5rem;
  width: 5rem;
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon {
  cursor: pointer;
}
@media only screen and (max-width: 1032px) {
  .contactus {
    font-size: var(--h4);
  }
  .icon {
    filter: saturate(100%);
  }
}
@media only screen and (max-width: 770px) {
  .contactus {
    font-size: var(--h4);
  }
  .buttons {
    width: 35rem;
  }
}
@media only screen and (max-width: 520px) {
  .contactus {
    font-size: 2.5rem;
  }
  .contacts {
    font-size: var(--h6);
  }
  .buttons {
    width: 28rem;
    padding: 1rem;
  }
  .icon {
    height: 2.5rem;
  }
  .instagram {
    height: 3rem;
  }
}
</style>

<script>
export default {
  name: 'Footer',
}
</script>
