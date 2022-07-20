<template>
    <div @mouseover="gifHover" @mouseleave="gifLeave" class="previewcard">
        <div class="eventinfo">
        <div class="dates">
        <p class="eventmonth"> {{ eventmonth }}</p>
        <p class="eventnumber"> {{ leadingZero(eventdate) }}</p>
        </div>
        <p class="eventname"> {{ eventname }} </p>
        <div class="cal-button">
            <a class="calendarlink" href="/Calendar">Read More...</a>
        </div>
        </div>
         <img v-show="gifVisible" src="https://res.cloudinary.com/dzzja5n1u/image/upload/c_scale,w_139/v1658147894/MSKSI/pinkHeartJif_f6kcd1.gif" alt="heart gif when hover" class="gifImage">
    </div>
</template>
 
<script>
export default {
    name: `EventPopUp`,
    data(){
        return{
            gifVisible: false,
        }
    },
    props: {
    eventname: String,
    eventmonth: String,
    eventdate: Number,
  },
  methods: {
      leadingZero: function(){
          if (this.eventdate < 10) {
              return "0" + this.eventdate;
          } else {
              return this.eventdate;
          }
      }
  methods:{
    gifHover(){
      this.gifVisible = true;
    },
    gifLeave(){
      this.gifVisible = false;
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=ABeeZee&display=swap');

.previewcard{
    height: 40rem;
    width: 40rem;
    background-color: var(--navyblue);
    border-radius: 2rem;
    font-family: 'ABeeZee', sans-serif;
    padding-top: 3rem;
    transition: all .3s;
    position: relative;
}
.previewcard:hover{
      transform: translateY(-5px);
}
.eventinfo{
    margin: 2rem 2rem 2rem 2rem;
}

.gifImage{
    width:25%;
    /* position: inherit; */
    position: absolute;
    top: 0px;
    right: 0px;
}
.dates{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 0 3rem 0 3rem;
}
.eventname{
    font-size: 5rem;
    color: var(--white);
    text-align: left;
    margin-left: 3rem;
    margin-right: 11rem;
}
.eventmonth {
    color: var(--white);
    font-size: 6rem;
}
.eventnumber{
    font-size: 13rem;
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
    margin-right: 11rem;
}
.cal-arrow{
    display: none;
    font-family: 'Black Han Sans', sans-serif;
}
}
@media screen and (max-width: 900px){
    .previewcard{
        height: 29rem;
        background: none;
        display: flex;
        flex: auto;
        align-items: center;
        margin-top: 0;
        padding: 0 0 0 0;
    }
    .dates{
        padding: 2rem 2.7rem 0 2.7rem;
        background-color: var(--navyblue);
        border-radius: 2rem;
        display: block;
        height: 25rem;
        width: 25rem;
    }
    .eventnumber{
        font-size: 12rem;
        padding: 0 0 0 0;
        text-align: right;
    }
    .eventmonth{
        font-size: 5rem;
    }
    .eventname{
        font-size: 4rem;
        margin-right: 3.4rem;
        width: 2rem;
    }
    .cal-button{
        display: none;
    }
    .cal-arrow{
        display: flex;
        font-size: var(--h3);
        padding: 0 0 0 1rem;
        position: absolute;
        font-size: 4rem;
        right: 120px;
    }
}
@media screen and (max-width: 500px){
    .previewcard{
        height: 16rem;
    }
    .dates{
        padding: 1.5rem 2.4rem 0 2.4rem;
        height: 14rem;
        width: 14rem;
    }
    .eventnumber{
        font-size: 6.2rem;
    }
    .eventmonth{
        font-size: 3rem;
    }
    .eventname{
        font-size: 2.2rem;
        margin-right: 2rem;
        margin-left: 2rem;
        width: 2rem;
    }
    .cal-button{
        display: none;
    }
    .cal-arrow{
        display: flex;
        font-size: var(--h5);
        padding: 0 0 0 1rem;
        position: absolute;
        right: 100px;
        right: 50px;
    }
}
</style>