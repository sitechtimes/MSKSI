<template>
    <div class="homeevents">
      <h1 class="eventheader">Upcoming Events</h1>
      <div class="eventpreviews">
        <EventPopUp v-for="event in events"
       :key="event.eventname"
       :eventname="event.eventname"
       :eventmonth="event.eventmonth"
       :eventdate="event.eventdate"
       />
       </div>
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
  background-color: var(--darkpink);
  padding: 7rem;
  }
.eventheader {
    font-size: var(--h1);
    text-align: center;
    font-family: 'Sora', sans-serif;
    color: var(--white);
    padding-top: 4rem;
  }
.eventpreviews{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 12rem 0 14rem 0;
  }
  @media screen and (max-width: 1200px){
    .eventpreviews{
      padding: 7rem 0 10rem 0;
    }
  }
</style>