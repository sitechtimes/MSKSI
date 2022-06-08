<template>
<div class="newmonth">
    <h2> {{ month }} </h2>
    <h3> {{ subheader }} </h3>
    <div class="postcontent">
        <p> {{ description }} </p>
        <img :src="image" alt="" />
    </div>
</div>
</template>

<script>

export default {
   name: 'MonthPost',
   props: {
    month: String,
    subheader: String,
    description: String,
    image: String,
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
    padding-top: 8rem;
}
h3 {
    font-size: var(--h2);
    color: var(--darkpink);
    text-align: center;
    font-family: 'Sora', sans-serif;
}
p {
    font-size: 3rem;
    padding: 1rem 4rem 2rem 4rem;
    font-family: 'Be Vietnam Pro', sans-serif;
    color: var(--white);
}
img {
    height: 40rem;
    padding-right: 5rem;
    padding-top: 2rem;
}
.postcontent {
    display: flex;
    padding: 5rem 6rem 0 6rem;
}
.newmonth{
    padding-bottom: 8rem;
}

@media screen and (max-width: 390px){
    .postcontent{
        display: inline-block;
        padding: 2rem 0 0 0;
    }
    h2 {
        font-size: var(--h2);
    }
    h3{
        font-size: var(--h4);
    }
    p{
        font-size: var(--h5);
    }
    img{
        height: 20rem;
        margin: 0 4rem 0 0;
    }
}
</style>