<template>
    <div class="carouselmain">
        <slot></slot>

        <button @click="$emit(`next`)" class="next"> > </button>
        <button @click="$emit(`prev`)" class="prev"> < </button>
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
}
.prev{
    position: absolute;
    top: calc(50% - 20px);
    height: 3rem;
    width: 6rem;
    left: 0;
    border: none;
    font-size: 2rem;
}
button:active, button:hover {
    outline: none;
    cursor: pointer;
}
</style>