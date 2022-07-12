<template>
    <div class="app">
        <carousel
        @next="next"
        @prev="prev"
        >
            <carousel-slide v-for="(slide,index) in slides" 
            :key="slide" 
            :index="index"
            :visibleSlide="visibleSlide"
            >
                <img :src="slide">
            </carousel-slide>
        </carousel>
    </div>
</template>

<script>
import Carousel from '../components/Carousel.vue';
import CarouselSlide from '../components/CarouselSlide';
export default {
    name: 'GalleryCarousel',
    data(){
        return {
            slides: [
                'https://randomwordgenerator.com/img/picture-generator/55e7dd454256a914f1dc8460962e33791c3ad6e04e50744172297bd5914ac6_640.jpg',
                'https://randomwordgenerator.com/img/picture-generator/54e4d5454e51a514f1dc8460962e33791c3ad6e04e5074417d2d73dc9149c4_640.jpg',
                'https://randomwordgenerator.com/img/picture-generator/54e6d4424c55ab14f1dc8460962e33791c3ad6e04e5074417d2e72d6914ac3_640.jpg',
                'https://randomwordgenerator.com/img/picture-generator/soap-bubbles-3517247_640.jpg',
                'https://randomwordgenerator.com/img/picture-generator/57e7dd474c50ad14f1dc8460962e33791c3ad6e04e5074417c2d78d1954cc7_640.jpg',
            ],
            visibleSlide: 0,
        }
    },
    computed: {
        slidesLen() {
            return this.slides.length;
        }
    },
    methods: {
        next(){
            if(this.visibleSlide >= this.slidesLen - 1){
                this.visibleSlide = 0;
            }else {
                this.visibleSlide++;
            }
        },
        prev(){
            if(this.visibleSlide <= 0){
                this.visibleSlide = this.slidesLen - 1;
            }else {
                this.visibleSlide--;
            }
        },
    },
    components : {
        Carousel,
        CarouselSlide
    }
}
</script>

<style scoped>
.app{
    display: flex;
    justify-content: center;
    height: 90rem;
    background-color: var(--navyblue);
}
img{
    height: 30rem;
    width: 30rem;
}
.carousel{
    padding-top: 6rem;
    height: 60rem;
}
</style>