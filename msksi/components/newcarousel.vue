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
      timeline.from('.current--card', {
        x: 100,
        duration: 0.5,
      })
    },
    LeftCardRotate() {
      const timeline = this.$gsap.timeline()
      timeline
        .from('.current--card', {
          x: -100,
          duration: 0.5,
        })
        .from('.prev--card', {
          ease: 'power1.out',
          duration: 0.2,
          y: -2,
          rotation: 1,
        })
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
  left: 30%;
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
  user-select: none;
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
  user-select: none;
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
  user-select: none;
  opacity: 0.6;
  z-index: 2;
}
</style>
