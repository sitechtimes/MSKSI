<template>
  <div id="footer">
    <h2 class="contactus footer-text">Contact Us</h2>

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
          <img class="icon gmail" src="~/assets/images/gmail.png" alt="" /></div
      ></a>
    </div>
  </div>
</template>
<style scoped>
#footer {
  background-color: rgb(23, 18, 43);
  text-align: left;
  bottom: 0px;
  width: 100%;
  height: 30rem;
}

.contactus {
  font-size: var(--h4);
  font-family: 'Black Han Sans';
  padding-top: 8rem;
  font-weight: lighter;
  color: var(--white);
  margin-left: 12rem;
  padding-bottom: 3rem;
}

.buttons {
  display: flex;
  margin-left: 10rem;
  margin-right: auto;
  justify-content: space-between;
  width: 35rem;
  height: 5rem;
}
.icon {
  height: 4rem;
  width: auto;
  filter: saturate(0);
  transition: all 0.2s;
}
.instagram {
  height: 5rem;
}
.tiktok {
  height: 4.5rem;
  filter: invert() saturate(0);
}
.gmail {
  height: 3.5rem;
}
.icon:hover {
  filter: saturate(100%);
}
.tiktok:hover {
  filter: invert() saturate(100%);
}
.backing {
  height: 8rem;
  width: 8rem;
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 1320px) {
  #footer {
    text-align: center;
  }
  .contactus {
    margin-left: 0;
  }
  .buttons {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>

<script>
export default {
  name: 'Footer',
}
</script>
