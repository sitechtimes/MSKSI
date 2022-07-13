<template>
    <div class="app">
        <div class="cardList">
            <button @click="swapCards(left)" class="left btn">
                <div class="icon">
                    <!-- icon goes here -->
                </div>
            </button>
                <div class="card-wrapper">
                    <div class="current-card">
                        <div class="cardimg">
                            <!-- img here -->
                        </div>
                    </div>
                    <div class="next-card">
                        <div class="cardimg">
                            <!-- img here -->
                        </div>
                    </div>
                    <div class="prev-card">
                        <div class="cardimg">
                            <img src="" alt="">
                        </div>
                    </div>
                </div>
                <button class="right btn">
                <div class="icon">
                    <!-- icon goes here -->
                </div>
            </button>
        </div>
    </div>
</template>

<script>
const cardsContainerEl = document.querySelector(".card-wrapper")
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