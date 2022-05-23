<template>
    <div class="previewcard">
        <h2 class="eventname"> {{ event }} </h2>
        <h3 class="eventmonth"> {{ eventmonth }}</h3>
        <h1 class="eventnumber"> {{ eventdate }}</h1>
        <a href="">Read More...</a>
    </div>
</template>

<script>
export default {
    name: `EventPopUp`,
}
</script>

<style scoped>
.previewcard{
    height: 30rem;
}
.eventname{
    font-size: var(--h3);
}
.eventmonth {
    font-size: var(--h3);
}
.eventnumber{
    font-size: var(--h2);
}
</style>