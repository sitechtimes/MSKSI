<template>
<div class="newmonth">
    <h2> {{ month }} </h2>
    <h3> {{ subheader }} </h3>
    <p> {{ description }} </p>
<!-- img will go here -->
</div>
</template>

<script>

export default {
   name: 'MonthPost',
   props: {
    month: String,
    subheader: String,
    description: String,
  },
}
</script>

<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@700&family=Sora:wght@800&display=swap');
h2 {
    font-size: var(--h1);
    color: var(--yellow);
    text-align: center;
    font-family: 'Sora', sans-serif;
}
h3 {
    font-size: var(--h2);
    color: var(--darkpink);
    text-align: center;
    font-family: 'Sora', sans-serif;
}
p {
    font-size: var(--h4);
    margin: 2rem 2rem 0 2rem;
    font-family: 'Be Vietnam Pro', sans-serif;
    color: var(--white);
}
</style>