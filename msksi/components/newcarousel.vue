<template>
  <div class="NewCarousel">
    <div class="cardList" ref="cardList">
      <button @click="swapCards(left), LeftCardRotate()" class="left btn">
        <div class="icon">
          <img
            src="~assets/images/CarouselArrow.png"
            alt=""
            class="left arrow"
          />
        </div>
      </button>
      <div class="card-wrapper" ref="card-wrapper">
        <div class="current--card" ref="current--card">
          <div class="cardimg">
            <img
              src="https://randomwordgenerator.com/img/picture-generator/57e5d4444d50ab14f1dc8460962e33791c3ad6e04e507440752f73dd944bc6_640.jpg"
              alt=""
              class="next.img"
            />
          </div>
        </div>
        <div class="next--card" ref="next--card">
          <div class="cardimg">
            <img
              src="https://randomwordgenerator.com/img/picture-generator/54e3dd404c5aaf14f1dc8460962e33791c3ad6e04e5074417c2f7dd6954cc1_640.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="prev--card" ref="prev--card">
          <div class="cardimg">
            <img
              src="https://randomwordgenerator.com/img/picture-generator/53e3d44a4950aa14f1dc8460962e33791c3ad6e04e507440722d72d5944ccd_640.jpg"
              alt=""
              class="prev.img"
            />
          </div>
        </div>
      </div>
      <button @click="swapCards(right), RightCardRotate()" class="right btn">
        <div class="icon">
          <img
            src="~assets/images/CarouselArrow.png"
            alt=""
            class="right arrow"
          />
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewCarousel',
  data() {
    return {
      right: 'right',
      left: 'left',
    }
  },
  methods: {
    swapCards(direction) {
      const cardsContainerEl = this.$refs['card-wrapper']
      function swapCardsClass() {
        const currentCardEl = cardsContainerEl.querySelector('.current--card')
        const prevCardEl = cardsContainerEl.querySelector('.prev--card')
        const nextCardEl = cardsContainerEl.querySelector('.next--card')
        currentCardEl.classList.remove('current--card')
        prevCardEl.classList.remove('prev--card')
        nextCardEl.classList.remove('next--card')

        if (direction === 'right') {
          currentCardEl.classList.add('prev--card')
          prevCardEl.classList.add('next--card')
          nextCardEl.classList.add('current--card')
        } else if (direction === 'left') {
          currentCardEl.classList.add('next--card')
          prevCardEl.classList.add('current--card')
          nextCardEl.classList.add('prev--card')
        }
      }
      swapCardsClass()
    },
    cardSwitch() {},
    RightCardRotate() {
      const timeline = this.$gsap.timeline()
      timeline
        .from('.current--card', {
          x: 100,
          duration: 0.6,
          ease: 'back.out(1.7)',
        })
        .from(
          '.next--card',
          {
            x: -100,
            delay: 0,
            duration: 0.3,
            ease: 'back.out(1.7)',
          },
          '-=.5'
        )
        .from(
          '.prev--card',
          {
            x: -500,
            delay: 0,
            duration: 0.5,
            ease: 'back.out(1.7)',
          },
          '-=.5'
        )
      timeline.set('.current--card', { clearProps: true })
      timeline.set('.next--card', { clearProps: true })
      timeline.set('.prev--card', { clearProps: true })
    },
    LeftCardRotate() {
      const timeline = this.$gsap.timeline()
      timeline
        .from('.current--card', {
          x: -100,
          duration: 0.6,
          ease: 'back.out(1.7)',
        })
        .from(
          '.next--card',
          {
            x: 10,
            delay: 0,
            duration: 0.6,
            ease: 'back.out(1.7)',
          },
          '-=.5'
        )
        .from(
          '.prev--card',
          {
            x: 2,
            delay: 0,
            duration: 0.6,
            ease: 'back.out(1.7)',
          },
          '-=.5'
        )
      timeline.set('.current--card', { clearProps: true })
      timeline.set('.next--card', { clearProps: true })
      timeline.set('.prev--card', { clearProps: true })
    },
  },
}
</script>

<style scoped>
.NewCarousel {
  width: 100%;
  height: 80rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--navyblue);
  overflow: hidden;
  padding: 0 0 2rem 0;
}
.btn {
  --btn-size: 65px;
  border: none;
  position: absolute;
  background: none;
  height: var(--btn-size);
  width: var(--btn-size);
  top: 46%;
  z-index: 5;
  transition: all 0.2s;
}
.btn:hover {
  transform: scale(1.15);
}
img {
  height: 50rem;
  width: 50rem;
}

.arrow {
  height: 4rem;
  width: 4rem;
}
.right.arrow {
  transform: rotate(180deg);
}
.left.btn {
  left: 32%;
}
.right.btn {
  right: 35%;
}
.cardList {
  width: calc(3 * var(--card-width));
}
.card-wrapper {
  width: 100%;
  height: 100%;
  perspective: 1000px;
}
.current--card {
  width: 100%;
  height: 100%;
  display: inline-block;
  z-index: 3;
  position: relative;
}
.prev--card {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) translateX(-220px) rotateY(25deg) scale(0.9);
  width: 100%;
  height: 100%;
  display: inline-block;
  opacity: 0.6;
  z-index: 2;
}
.next--card {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) translateX(220px) rotateY(-25deg) scale(0.9);
  width: 100%;
  height: 100%;
  display: inline-block;
  opacity: 0.6;
  z-index: 2;
}
@media screen and (max-width: 1032px) {
  img {
    height: 35rem;
    width: 35rem;
  }
  .btn {
    z-index: 4;
    top: 50%;
  }
  .left.btn {
    left: 25%;
  }
  .right.btn {
    right: 25%;
  }
}
@media screen and (max-width: 800px) {
  img {
    height: 31rem;
    width: 31rem;
  }
  .next--card {
    left: 10%;
  }
  .prev--card {
    left: 90%;
  }
  .btn {
    z-index: 4;
    top: 50%;
  }
  .left.btn {
    left: 20%;
  }
  .right.btn {
    right: 20%;
  }
}
@media screen and (max-width: 500px) {
  .NewCarousel {
    height: 80rem;
    padding-bottom: 5rem;
  }
  img {
    height: 25rem;
    width: 25rem;
  }
  .next--card {
    left: 20%;
    top: 10%;
    transform: rotateY(-30deg);
  }
  .prev--card {
    left: -20%;
    top: 10%;
    transform: rotateY(30deg);
  }
  .arrow {
    height: 2rem;
    width: 2rem;
  }
  .btn {
    z-index: 4;
    top: 50%;
  }
  .left.btn {
    left: 15%;
  }
  .right.btn {
    right: 15%;
  }
}
</style>
