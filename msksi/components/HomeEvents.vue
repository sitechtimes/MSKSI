<template>
    <div class="homeevents">
      <h1 class="eventheader">Upcoming Events</h1>
      <div class="eventpreviews">
        <EventPopUp v-for="event in events"
       :key="event.eventname"
       :eventname="event.eventname"
       :eventmonth="event.eventmonth"
       :eventdate="event.eventdate"
       /></div>
       
    </div>
</template>

<script>
export default {
  name: `HomeEvents`,
  components: {
   
  },
  data(){
    return {
      events: [],
    }
  },
  async fetch(){
    this.events = await this.$content(`eventpreview`).limit(3).fetch()
  },
}
</script>

<style scoped>
.homeevents {
  height: 100rem;
  background-color: var(--darkpink);
  padding: 7rem;
  }
.eventheader {
    font-size: var(--h1);
    text-align: center;
    font-family: 'Black Han Sans', sans-serif;
    color: var(--white);
  }
.eventpreviews{
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 10rem;
  }
</style>