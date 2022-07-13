<template>
    <div class="carouselmain">
        <slot></slot>

        <button @click="$emit(`next`)" class="next"> > </button>
        <button @click="$emit(`prev`)" class="prev">  < </button>
        <!-- <input type="image" class="next" src="~/assets/images/carouselright"> -->
    </div>
</template>

<script>
export default {
    name: 'Carousel',

}
</script>

<style scoped>
.carouselmain{
    position: relative;
    width: 30rem;
    height: 30rem;
    overflow: hidden;
}
.next{
    position: absolute;
    top: calc(50% - 20px);
    height: 3rem;
    width: 6rem;
    right: 0;
    border: none;
    font-size: 2rem;
    background: none;
}
.prev{
    position: absolute;
    top: calc(50% - 20px);
    height: 3rem;
    width: 6rem;
    left: 0;
    border: none;
    font-size: 2rem;
    background: none;
}
button:active, button:hover {
    outline: none;
    cursor: pointer;
}
</style>