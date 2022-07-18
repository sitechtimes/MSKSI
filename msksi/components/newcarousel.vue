<template>
    <div class="app">
        <div class="cardList">
            <button @click="swapCards(left)" class="left-btn">
                <div class="icon">
                    <p>L</p>
                </div>
            </button>
                <div class="card-wrapper" ref="card-wrapper">
                    <div class="current--card">
                        <div class="cardimg">
                            <img src="https://randomwordgenerator.com/img/picture-generator/57e5d4444d50ab14f1dc8460962e33791c3ad6e04e507440752f73dd944bc6_640.jpg" alt="">
                        </div>
                    </div>
                    <div class="next--card">
                        <div class="cardimg">
                            <img src="https://randomwordgenerator.com/img/picture-generator/54e3dd404c5aaf14f1dc8460962e33791c3ad6e04e5074417c2f7dd6954cc1_640.jpg" alt="">
                        </div>
                    </div>
                    <div class="prev--card">
                        <div class="cardimg">
                            <img src="https://randomwordgenerator.com/img/picture-generator/53e3d44a4950aa14f1dc8460962e33791c3ad6e04e507440722d72d5944ccd_640.jpg" alt="">
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
    name: 'CarouselNew',
    methods: {
        swapCards(direction){
            const cardsContainerEl = this.$refs["card-wrapper"]
            const currentCardEl = cardsContainerEl.querySelector(".current--card");
            const prevCardEl = cardsContainerEl.querySelector(".prev--card");
            const nextCardEl = cardsContainerEl.querySelector(".next--card");
            swapCardsClass();
            function swapCardsClass(){
                currentCardEl.classList.remove(".current--card")
                prevCardEl.classList.remove(".prev--card")
                nextCardEl.classList.remove(".next--card")

                currentCardEl.style.zIndex = "50";

                if (direction === "right") {
                    prevCardEl.style.zIndex = "20";
                    nextCardEl.style.zIndex = "30";

                    currentCardEl.classList.add(".prev--card");
                    prevCardEl.classList.add(".next--card");
                    nextCardEl.classList.add(".current--card");
                } else if (direction === "left"){
                    prevCardEl.style.zIndex = "30";
                    nextCardEl.style.zIndex = "20";

                    currentCardEl.classList.add(".next--card");
                    prevCardEl.classList.add(".current--card");
                    nextCardEl.classList.add("prev--card");
                }
            }
        }
    }
}
</script>

<style scoped>
.app{
    position: relative;
    width: 100%;
    height: 90rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--navyblue);
    overflow: hidden;
}
button{
    --btn-size: 35px;
    border: none;
    background: none;
    position: absolute;
    background-color: red;
    height: var(--btn-size);
    width: var(--btn-size);
    top: 50%;
    transform: translate(-50%);
    z-index: 100;
}
.right-btn{
    right: 29.3%;
}
.cardList {
    height: auto;
    width: calc(3 * var(--card-width));
}
.card-wrapper{
    position: relative;
    width: 100%;
    height: 100%;
    perspective: 1000px;
}

.current--card {
    width: 100%;
    height: 100%;
    display: inline-block;
    user-select: none;
    z-index: -1;
    position: relative;
}
.prev--card {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) translateX(-220px) rotateY(25deg) scale(.9);
    width: 100;
    height: 100;
    display: inline-block;
    user-select: none;
    opacity: 0.6;
}
.next--card {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) translateX(220px) rotateY(-25deg) scale(.9);
    width: 100%;
    height: 100%;
    display: inline-block;
    user-select: none;
    opacity: 0.6;
}
.card::before{
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: opacity var(--card-transition-duration) var(--card-transition-easing);
}

</style>