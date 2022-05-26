<template>
    <div class="previewcard">
        <h3 class="eventmonth"> {{ eventmonth }}</h3>
        <h1 class="eventnumber"> {{ eventdate }}</h1>
        <h2 class="eventname"> {{ eventname }} </h2>
        <a href="">Read More...</a>
    </div>
</template>

<script>
export default {
    name: `EventPopUp`,
    props: {
    eventname: String,
    eventmonth: String,
    eventdate: String,
  },
}
</script>

<style scoped>
.previewcard{
    height: 30rem;
}
.eventname{
    font-size: var(--h3);
    color: var(--white);
}
.eventmonth {
    font-size: var(--h3);
    color: var(--white);
}
.eventnumber{
    font-size: var(--h2);
    color: var(--white);
}
</style>