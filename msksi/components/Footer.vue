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
          href="https://en.wikipedia.org/wiki/Instagram"
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
          href="https://planethome.eco/tiktok-challenge-inspires-global-trash-cleanup/"
          target="_blank"
          class="icon"
          ><div class="backing">
            <span class="hoverselect selecttiktok"></span>
            <img
              class="iconimg tiktok"
              src="~/assets/images/tiktok-white.png"
              alt=""
            /></div
        ></a>
        <a
          href="https://support.google.com/mail/?hl=en#topic=7065107"
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
  width: 30rem;
  height: 6rem;
  border-radius: 5rem;
  margin-left: 50%;
  transform: translateX(-50%);
  /* border: solid 0.5rem var(--yellow);
  background-color: var(--yellow); */
}
.buttons {
  display: flex;
  justify-content: space-around;
  width: 25rem;
  height: 5rem;
  margin: 1rem auto 0 50%;
  transform: translateX(-50%);
}

.backing {
  height: 6rem;
  width: 6rem;

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
  margin-top: 0rem;
}
.icon:hover .hoverselect {
  background-color: rgb(255, 255, 255);
  /*  border: solid 0.5rem var(--yellow); */
}
.icon:hover .iconimg {
  filter: saturate(100%);
}

.backing:hover .tiktok {
  content: url(~/assets/images/tiktok.png);
}
.hoverselect {
  position: absolute;
  /*  height: 7.75rem;
  width: 7.75rem; */
  height: 6rem;
  width: 6rem;
  border-radius: 6rem;
  margin-top: 0rem;
  z-index: -1;
  transition: all 0.2s;
}

/*media queries*/

@media only screen and (max-width: 1320px) {
  #footer {
    height: 27rem;
  }
  .contactus {
    padding-top: 7rem;
    margin-left: 0;
    font-size: 2rem;
  }

  .highlighter {
    width: 26rem;
    height: 5rem;
  }
  .buttons {
    width: 22rem;
  }
  .icon {
    margin-top: 1rem;
  }
  .backing {
    margin: auto;
  }
  .icon,
  .backing {
    height: 3rem;
    width: 3rem;
  }
  .iconimg {
    height: 2rem;
  }
  .instagram,
  .tiktok {
    height: 2.5rem;
  }
  .hoverselect {
    width: 5.5rem;
    height: 5.5rem;
  }
}
@media only screen and (max-width: 1030px) {
  .icon:hover .hoverselect {
    background-color: transparent;
  }
  .icon:hover .iconimg {
    filter: saturate(0) brightness(5);
  }
  .backing:hover .tiktok {
    content: url(~/assets/images/tiktok-white.png);
  }
}
@media only screen and (max-width: 500px) {
  #footer {
    height: 25rem;
  }
  .contactus {
    padding-top: 6rem;
  }
  .icon {
    margin-top: 1.75rem;
  }
  .icon,
  .backing {
    height: 1.5rem;
    width: 1.5rem;
  }
  .iconimg {
    height: 1.8rem;
  }
  .instagram,
  .tiktok {
    height: 2.2rem;
  }
  .gmail {
    height: 1.7rem;
  }
  .buttons {
    width: 18rem;
  }
  .highlighter {
    width: 22rem;
    height: 5rem;
  }
}
</style>

<script>
export default {
  name: 'Footer',
}
</script>
