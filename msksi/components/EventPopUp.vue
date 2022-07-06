<template>
    <div class="previewcard">
        <div class="dates">
        <h3 class="eventmonth"> {{ eventmonth }}</h3>
        <h1 class="eventnumber"> {{ eventdate }}</h1>
        </div>
        <h2 class="eventname"> {{ eventname }} </h2>
        <div class="cal-button">
            <a class="calendarlink" href="/Calendar">Read More...</a>
        </div>
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
@import url('https://fonts.googleapis.com/css2?family=ABeeZee&display=swap');
.previewcard{
    height: 45rem;
    width: 45rem;
    background-color: var(--navyblue);
    border-radius: 2rem;
    font-family: 'ABeeZee', sans-serif;
    font-weight: 400;
    padding: 1rem 0 0 0;
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
    text-align: left;
    padding: 0 0 0 3rem;
    margin-right: 20rem;
}
.eventmonth {
    font-size: var(--h3);
    color: var(--white);
    padding-top: 6rem;
    font-size: 7rem;
}
.eventnumber{
    font-size: 16rem;
    color: var(--white);
    font-family: 'Black Han Sans', sans-serif;
    /* padding: 0 2rem 0 0; */
}
.cal-button{
    text-align: right;
    padding: 2rem 2rem 0 0;
    
}
.calendarlink {
    color: var(--white);
    font-size: var(--h4);
    text-decoration: none;
    transition: all .2s;
}
.calendarlink:hover {
    color: var(--darkpink);
}
@media screen and (max-width: 1200px){
.previewcard{
    height: 38rem;
    width: 38rem;
    margin-top: 5rem;
}
.eventnumber{
    font-size: 14rem;
}
.eventmonth{
    font-size: 6rem;
}
.eventname{
    font-size: 4rem;
}
}
</style>