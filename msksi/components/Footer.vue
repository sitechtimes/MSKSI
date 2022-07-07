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
              src="~/assets/images/insta-cool.png"
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
  background-color: var(--darknavyblue);
  text-align: center;
  bottom: 0px;
  width: 100%;
  height: 30rem;
}

.contactus {
  font-size: 2.5rem;
  font-family: 'Black Han Sans';
  padding-top: 8rem;
  font-weight: lighter;
  color: var(--yellow);
  padding-bottom: 2rem;
}

.highlighter {
  position: absolute;
  width: 32rem;
  height: 7rem;
  border-radius: 5rem;
  margin: 0rem auto 0 50%;
  transform: translateX(-50%);
  border: solid 0.5rem var(--yellow);
}
.buttons {
  display: flex;
  justify-content: space-between;
  width: 25rem;
  height: 5rem;
  margin: 1rem auto 0 50%;
  transform: translateX(-50%);
}

a {
  margin-top: 0.5rem;
}
.backing {
  height: 6rem;
  width: 6rem;
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.iconimg {
  height: 2.5rem;
  width: auto;
  transition: all 0.1s;
  filter: saturate(0) brightness(5);
}
.instagram,
.tiktok {
  height: 3rem;
}
.gmail {
  height: 2.3rem;
}

.icon {
  transition: all 0.9s;
  z-index: 100;
}
.icon:hover .hoverselect {
  background-color: var(--white);
  border: solid 0.5rem var(--yellow);
}
.icon:hover .iconimg {
  filter: saturate(100%);
}
.icon:hover ~ .highlighter-top {
  visibility: visible;
}

.hoverselect {
  position: absolute;
  height: 7.75rem;
  width: 7.75rem;
  border-radius: 6rem;
  margin-top: 0rem;
  z-index: -1;
  transition: all 0.2s;
}

@media only screen and (max-width: 1320px) {
  .contactus {
    margin-left: 0;
  }
  a {
    width: 6rem;
    height: 6rem;
    margin-top: 0.5rem;
  }
}

@media only screen and (max-width: 500px) {
  .contactus {
    font-size: 3.2rem;
  }
  a {
    margin-top: 1.75rem;
  }
  .backing,
  a {
    height: 2.5rem;
    width: 2.5rem;
  }
  .iconimg {
    height: 2.5rem;
  }
  .instagram,
  .tiktok {
    height: 3rem;
  }
  .gmail {
    height: 2.3rem;
  }
  .buttons {
    width: 20rem;
  }
  .highlighter {
    width: 30rem;
    height: 6rem;
    border: solid 0.5rem var(--yellow);
  }
  .hoverselect {
    height: 7.5rem;
    width: 7.5rem;
  }
  .icon:hover .hoverselect {
    border: solid 0.5rem var(--yellow);
  }
}
</style>

<script>
export default {
  name: 'Footer',
}
</script>
