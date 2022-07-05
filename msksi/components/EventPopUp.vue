<template>
    <div class="previewcard">
        <div class="dates">
        <h3 class="eventmonth"> {{ eventmonth }}</h3>
        <h1 class="eventnumber"> {{ eventdate }}</h1>
        </div>
        <h2 class="eventname"> {{ eventname }} </h2>
        <router-link class="calendarlink" to="/Calendar"> Read More... </router-link>
    </div>
</template>

<script>
export default {
    name: `EventPopUp`,
    props: {
    eventname: String,
    eventmonth: String,
    eventdate: Number,
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=ABeeZee&family=Black+Han+Sans&display=swap');
.previewcard{
    height: 45rem;
    width: 45rem;
    background-color: var(--navyblue);
    border-radius: 2rem;
    font-family: 'ABeeZee', sans-serif;
    padding: 1rem;
}
.dates{
    padding-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2rem;
}
.eventname{
    font-size: var(--h3);
    color: var(--white);
}
.eventmonth {
    font-size: var(--h3);
    color: var(--white);
    padding-top: 6rem;
}
.eventnumber{
    font-size: 16rem;
    color: var(--white);
    font-family: 'Black Han Sans', sans-serif;
}
.calendarlink {
    color: var(--white);
    font-size: var(--h4);
}

</style>