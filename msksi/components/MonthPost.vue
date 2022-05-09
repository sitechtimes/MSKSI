<template>
<div class="newmonth">
    <h2> {{ month }} </h2>
    <h3> {{ subheader }} </h3>
    <p> {{ desc }} </p>
<!-- img will go here -->
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
h2 {
    font-size: var(--h2);
    color: var(--yellow);
}
h3 {
    font-size: var(--h3);
    color: var(--darkpink);
}
</style>