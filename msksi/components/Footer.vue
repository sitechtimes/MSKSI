<template>
  <div id="footer">
    <h2 class="contactus footer-text">Contact Us</h2>
    <div class="combo">
      <div class="buttons">
        <a
          href="https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/downloads/twitter-external-brand-guidelines-01272021.pdf"
          target="_blank"
          class="logoicon"
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
          class="logoicon"
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
          class="logoicon"
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
          class="logoicon"
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
  background-color: var(--navyblue);
  text-align: center;
  bottom: 0px;
  width: 100%;
  height: 22rem;
}
.contactus {
  font-size: var(--subheadingjum);
  font-family: 'Sora', sans-serif;
  padding-top: 5rem;
  color: var(--darkpink);
  padding-bottom: 2rem;
}
.combo {
  text-align: center;
}
.buttons {
  display: flex;
  justify-content: space-around;
  width: 25rem;
  height: 5rem;
  margin-left: auto;
  margin-right: auto;
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
}
.instagram,
.tiktok {
  height: 3rem;
}
.gmail {
  height: 2.3rem;
}

.logoicon {
  transition: all 0.9s;
  z-index: 100;
}
.iconimg:hover,
.backing:hover {
  cursor: url('~/assets/images/hoverBtnCursor.png'), auto;
}

.logoicon:hover .hoverselect {
  transform: scale(1);
  /*  border: solid 0.5rem var(--yellow); */
}
.logoicon:hover .iconimg {
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

@media only screen and (max-width: 1032px) {
  .backing {
    margin: auto;
  }
  /* .logoicon,
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
  } */
  .hoverselect {
    width: 5.5rem;
    height: 5.5rem;
  }
}
@media only screen and (max-width: 1032px) {
  .logoicon:hover .hoverselect {
    transform: scale(0);
  }
  .backing:hover .tiktok {
    content: url(~/assets/images/tiktok-white.png);
  }
}
@media only screen and (max-width: 770px) {
  #footer {
    height: 20rem;
  }
  .contactus {
    padding-top: 4rem;
  }
}
@media only screen and (max-width: 500px) {
  #footer {
    height: 18rem;
  }
  .contactus {
    padding-top: 4rem;
    padding-bottom: 1rem;
  }
  /* .logoicon,
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
  } */
  .buttons {
    width: 18rem;
  }
}
</style>

<script>
export default {
  name: 'Footer',
}
</script>
