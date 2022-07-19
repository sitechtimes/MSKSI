<template>
  <div class="NewCarousel">
    <div class="cardList">
      <button @click="swapCards(left)" class="left-btn">
        <div class="icon">
          <p>L</p>
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
      <button @click="swapCards(right)" class="right-btn">
        <div class="icon">
          <p>R</p>
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
          prevCardEl.style.zIndex = '2'
          nextCardEl.style.zIndex = '3'

          currentCardEl.classList.add('prev--card')
          prevCardEl.classList.add('next--card')
          nextCardEl.classList.add('current--card')
        } else if (direction === 'left') {
          prevCardEl.style.zIndex = '3'
          nextCardEl.style.zIndex = '2'

          currentCardEl.classList.add('next--card')
          prevCardEl.classList.add('current--card')
          nextCardEl.classList.add('prev--card')
        }
      }
      swapCardsClass()
    },
  },
}
</script>

<style scoped>
.NewCarousel {
  width: 100%;
  height: 95rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--navyblue);
  overflow: hidden;
}
button {
  --btn-size: 65px;
  border: none;
  position: absolute;
  background-color: red;
  height: var(--btn-size);
  width: var(--btn-size);
  top: 56%;
  z-index: 5;
}
img {
  height: 50rem;
  width: 50rem;
}
.right-btn {
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
  width: 100;
  height: 100;
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
.card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
