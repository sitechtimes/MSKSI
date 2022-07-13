<template>
    <div class="app">
        <div class="cardList">
            <button @click="swapCards(left)" class="left btn">
                <div class="icon">
                    <P>L</P>
                </div>
            </button>
                <div class="card-wrapper">
                    <div class="current-card">
                        <div class="cardimg">
                            <img src="https://randomwordgenerator.com/img/picture-generator/57e5d4444d50ab14f1dc8460962e33791c3ad6e04e507440752f73dd944bc6_640.jpg" alt="">
                        </div>
                    </div>
                    <div class="next-card">
                        <div class="cardimg">
                            <img src="https://randomwordgenerator.com/img/picture-generator/54e3dd404c5aaf14f1dc8460962e33791c3ad6e04e5074417c2f7dd6954cc1_640.jpg" alt="">
                        </div>
                    </div>
                    <div class="prev-card">
                        <div class="cardimg">
                            <img src="https://randomwordgenerator.com/img/picture-generator/53e3d44a4950aa14f1dc8460962e33791c3ad6e04e507440722d72d5944ccd_640.jpg" alt="">
                        </div>
                    </div>
                </div>
                <button class="right btn">
                <div class="icon">
                    <P>L</P>
                </div>
            </button>
        </div>
    </div>
</template>

<script>
const cardsContainerEl = this.$refs["card-wrapper"]
export default {
    name: 'CarouselNew',
    methods: {
        swapCards(direction){
            const currentCardEl = cardsContainerEl.querySelector(".current-card");
            const prevCardEl = cardsContainerEl.querySelector(".prev-card");
            const nextCardEl = cardsContainerEl.querySelector(".next-card");
            swapCardsClass();
            function swapCardsClass(){
                currentCardEl.classList.remove(".current-card")
                prevCardEl.classList.remove(".prev-card")
                nextCardEl.classList.remove(".next-card")

                currentCardEl.style.zIndex = "50";

                if (direction === "right") {
                    prevCardEl.style.zIndex = "20";
                    nextCardEl.style.zIndex = "30";

                    currentCardEl.classList.add(".prev-card");
                    prevCardEl.classList.add(".next-card");
                    nextCardEl.classList.add(".current-card");
                } else if (direction === "left"){
                    prevCardEl.style.zIndex = "30";
                    nextCardEl.style.zIndex = "20";

                    currentCardEl.classList.add(".next-card");
                    prevCardEl.classList.add(".current-card");
                    nextCardEl.classList.add("prev-card");
                }
            }
        }
    }
}
</script>