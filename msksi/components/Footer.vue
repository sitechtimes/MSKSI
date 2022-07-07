<template>
  <div id="footer">
    <h2 class="contactus footer-text">Contact Us</h2>
    <div class="combo">
      <div class="highlighter"></div>
      <div class="buttons">
        <a
          href="https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/downloads/twitter-external-brand-guidelines-01272021.pdf"
          target="_blank"
          class="icon"
        >
          <div class="backing">
            <span class="hoverselect selecttwitter"></span>
            <img
              class="iconimg twitter"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
              alt=""
            />
          </div>
        </a>
        <a
          href="https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/downloads/twitter-external-brand-guidelines-01272021.pdf"
          target="_blank"
          class="icon"
          ><div class="backing">
            <span class="hoverselect selectinstagram"></span>
            <img
              class="iconimg instagram"
              src="~/assets/images/insta2.jpg"
              alt=""
            /></div
        ></a>
        <a
          href="https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/downloads/twitter-external-brand-guidelines-01272021.pdf"
          target="_blank"
          class="icon"
          ><div class="backing">
            <span class="hoverselect selecttiktok"></span>
            <img
              class="iconimg tiktok"
              src="~/assets/images/tiktok.png"
              alt=""
            /></div
        ></a>
        <a
          href="https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/downloads/twitter-external-brand-guidelines-01272021.pdf"
          target="_blank"
          class="icon"
          ><div class="backing">
            <span class="hoverselect selectgmail"></span>
            <img
              class="iconimg gmail"
              src="~/assets/images/gmail.png"
              alt=""
            /></div
        ></a>
      </div>
    </div>
  </div>
</template>
<style scoped>
#footer {
  background-color: rgb(23, 18, 43);
  text-align: center;
  bottom: 0px;
  width: 100%;
  height: 30rem;
}

.contactus {
  font-size: var(--h4);
  font-family: 'Black Han Sans';
  padding-top: 8rem;
  font-weight: lighter;
  color: var(--yellow);
  padding-bottom: 2rem;
}

.buttons {
  display: flex;
  justify-content: space-between;
  width: 35rem;
  height: 5rem;
  margin: 2rem auto 0 50%;
  transform: translateX(-50%);
}

.iconimg {
  height: 4rem;
  width: auto;
  transition: all 0.1s;
  filter: saturate(0);
}
.instagram {
  height: 5rem;
}
.tiktok {
  height: 4.5rem;
}
.gmail {
  height: 3.5rem;
}
.icon {
  transition: all 0.9s;
  z-index: 100;
}

.icon:hover .hoverselect {
  visibility: visible;
}
.icon:hover .iconimg {
  filter: saturate(100%);
}

.icon:hover ~ .highlighter-top {
  visibility: visible;
}

a {
  width: 8rem;
}
.backing {
  height: 8rem;
  width: 8rem;
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.highlighter {
  position: absolute;
  width: 42rem;
  height: 8rem;
  border-radius: 5rem;

  margin: 0rem auto 0 50%;
  transform: translateX(-50%);
  background-color: var(--white);
}
.highlighter-top {
  z-index: 10;
  margin-left: 0rem;
  visibility: hidden;
}

.hoverselect {
  position: absolute;
  height: 10rem;
  width: 10rem;
  border-radius: 6rem;
  margin-top: 0rem;
  background-color: var(--white);
  border: solid 1rem var(--yellow);
  z-index: -1;
  visibility: hidden;
}

@media only screen and (max-width: 1320px) {
  .contactus {
    margin-left: 0;
  }
  a {
    width: 6rem;
  }
  .backing {
    height: 6rem;
    width: 6rem;
  }
}
</style>

<script>
export default {
  name: 'Footer',
}
</script>
