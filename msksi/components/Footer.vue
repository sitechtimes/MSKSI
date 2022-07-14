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
          href="https://www.instagram.com/_sammytheseagull/?hl=en"
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
          href="https://www.tiktok.com/@charlidamelio?lang=en"
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
          href="https://mail.google.com/mail/?view=cm&fs=1&to=mwhalen3@schools.nyc.gov"
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
  height: 25rem;
}

.contactus {
  font-size: 2.2rem;
  font-family: 'Black Han Sans';
  padding-top: 7rem;
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
  margin: 0.5rem auto 0 50%;
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
.iconimg:hover,
.backing:hover {
  cursor: url('~/assets/images/hoverBtnCursor.png'), auto;
}

.icon:hover .hoverselect {
  transform: scale(1);
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
  background-color: rgb(255, 255, 255);
  transform: scale(0);
  height: 6rem;
  width: 6rem;
  border-radius: 6rem;
  margin-top: 0rem;
  z-index: -1;
  transition: all 0.2s ease-in-out;
}

/*media queries*/

@media only screen and (max-width: 1320px) {
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
    transform: scale(0);
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
