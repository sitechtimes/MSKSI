<template>
  <div @mouseover="gifHover" @mouseleave="gifLeave" class="previewcard">
    <div class="eventinfo">
      <div class="dates">
        <p class="eventmonth">{{ eventmonth }}</p>
        <h1 class="eventnumber">{{ eventdate }}</h1>
      </div>
      <p class="eventname">{{ eventname }}</p>
      <div class="cal-button">
        <a class="calendarlink" href="/Calendar">Read More...</a>
      </div>
    </div>
    <img
      v-show="gifVisible"
      src="https://res.cloudinary.com/dzzja5n1u/image/upload/c_scale,w_139/v1658147894/MSKSI/pinkHeartJif_f6kcd1.gif"
      alt="heart gif when hover"
      class="gifImage"
    />
  </div>
</template>
 
<script>
export default {
  name: `EventPopUp`,
  data() {
    return {
      gifVisible: false,
    }
  },
  props: {
    eventname: String,
    eventmonth: String,
    eventdate: Number,
  },
  methods: {
    gifHover() {
      this.gifVisible = true
    },
    gifLeave() {
      this.gifVisible = false
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=ABeeZee&display=swap');
.previewcard {
  height: 45rem;
  width: 45rem;
  background-color: var(--navyblue);
  border-radius: 2rem;
  font-family: 'ABeeZee', sans-serif;
  padding-top: 3rem;
  transition: all 0.3s;
  position: relative;
}
.previewcard:hover {
  transform: translateY(-5px);
}
.eventinfo {
  margin: 2rem 2rem 2rem 2rem;
}

.gifImage {
  width: 25%;
  /* position: inherit; */
  position: absolute;
  top: 0px;
  right: 0px;
}
.dates {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.eventname {
  font-size: 5rem;
  color: var(--white);
  text-align: left;
  padding: 0 0 0 1.2rem;
}
.eventmonth {
  font-size: var(--h3);
  color: var(--white);
  font-size: 7rem;
}
.eventnumber {
  font-size: 16rem;
  color: var(--white);
  font-family: 'Black Han Sans', sans-serif;
  padding: 0 2rem 0 0;
}
.cal-button {
  text-align: right;
  padding: 1.5rem 3rem 0 0;
}
.calendarlink {
  color: var(--white);
  font-size: var(--h4);
  text-decoration: none;
  transition: all 0.2s;
}
.calendarlink:hover {
  color: var(--darkpink);
}
@media screen and (max-width: 1500px) {
  .previewcard {
    height: 38rem;
    width: 38rem;
    margin-top: 5rem;
  }
  .eventnumber {
    font-size: 14rem;
  }
  .eventmonth {
    font-size: 6rem;
  }
  .eventname {
    font-size: 4rem;
    padding-left: 2.3rem;
  }
}
@media screen and (max-width: 500px) {
  .previewcard {
    height: 28rem;
    width: 28rem;
  }
  .eventnumber {
    font-size: 9.3rem;
    padding: 0 0 0 0;
  }
  .eventmonth {
    font-size: 4.5rem;
  }
  .eventname {
    font-size: 2.5rem;
    padding-left: 2.1rem;
  }
  .calendarlink {
    font-size: 2rem;
  }
  .dates {
    padding: 2.5rem 2.6rem 0 2.6rem;
  }
}
</style>