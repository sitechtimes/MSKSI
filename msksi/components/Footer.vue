<template>
  <div id="footer">
    <h2 class="contactus footer-text">Contact Us</h2>
    <div class="combo">
      <div id="highlighter"></div>
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
  padding-bottom: 2rem;
}
.combo {
  margin-top: 1rem;
}
.buttons {
  display: flex;
  justify-content: space-between;
  width: 35rem;
  height: 5rem;
  margin: 0rem auto 0 14.5rem;
}
.iconimg {
  height: 4rem;
  width: auto;
  filter: saturate(0);
  transition: all 0.1s;
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
}

.icon:hover .iconimg {
  filter: saturate(100%);
}

.icon:hover .hoverselect {
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
#highlighter {
  position: absolute;
  width: 40rem;
  height: 7rem;
  background-color: rgba(255, 255, 255, 0.164);
  border-radius: 4rem;
  margin: 0.5rem auto 0 12rem;
}

.hoverselect {
  position: absolute;
  height: 8.5rem;
  width: 8.5rem;
  border-radius: 5.5rem;
  margin-top: -0.2rem;
  background-color: rgba(255, 255, 255, 0.76);
  border: solid 2px gray;
  visibility: hidden;
}

@media only screen and (max-width: 1320px) {
  #footer {
    text-align: center;
  }
  .contactus {
    margin-left: 0;
  }
  .buttons {
    margin: 1rem auto 0 50%;
    transform: translateX(-50%);
    width: 32rem;
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
