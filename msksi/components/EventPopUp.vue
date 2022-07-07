<template>
    <div class="previewcard">
        <div class="dates">
        <p class="eventmonth"> {{ eventmonth }}</p>
        <h1 class="eventnumber"> {{ eventdate }}</h1>
        </div>
        <p class="eventname"> {{ eventname }} </p>
        <div class="cal-button">
            <a class="calendarlink" href="/Calendar">Read More...</a>
        </div>
        <a class="cal-arrow" href="/Calendar">></a>
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
    padding-top: 3rem;
}
.dates{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}
.eventname{
    font-size: 5rem;
    color: var(--white);
    text-align: left;
    padding: 0 0 0 2.5rem;
}
.eventmonth {
    font-size: var(--h3);
    color: var(--white);
    font-size: 7rem;
}
.eventnumber{
    font-size: 16rem;
    color: var(--white);
    font-family: 'Black Han Sans', sans-serif;
    padding: 0 2rem 0 0;
}
.cal-button{
    text-align: right;
    padding: 1.5rem 3rem 0 0;
    
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
.cal-arrow{
    color: var(--white);
    display: none;
    text-decoration: none;
}
@media screen and (max-width: 1500px){
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
    padding-left: 2.3rem;
}
.cal-arrow{
    display: none;
}
}
@media screen and (max-width: 500px){
    .previewcard{
        height: 20rem;
        width: 20rem;
        background: none;
        display: flex;
        flex: auto;
        align-items: center;
        margin-top: 0;
        padding: 0 0 0 0;
    }
    .dates{
        padding: 1.5rem 2.6rem 0 2.6rem;
        background-color: var(--navyblue);
        border-radius: 2rem;
        display: block;
        height: 14rem;
        width: 14rem;
    }
    .eventnumber{
        font-size: 6.2rem;
        padding: 0 0 0 0;
        text-align: right;
    }
    .eventmonth{
        font-size: 4.5rem;
    }
    .eventname{
        font-size: 2.5rem;
        padding-left: 2.1rem;
    }
    .cal-button{
        display: none;
    }
    .cal-arrow{
        display: flex;
        font-size: var(--h4);
        padding: 0 0 0 1rem;
    }
}
</style>