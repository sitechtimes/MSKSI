<template>
  <div class="Agendas">
    <h2 class="heading" id="agendas">Agendas</h2>
    <h3 class="text" id="text">Click to view agendas.</h3>
    <div class="agendas-container">
      <div class="yearly-agenda">
        <div class="container">
          <h3 class="subheading year">2021 - 2022</h3>
          <button @click="show2019 = !show2019" class="toggle">
            <img
              v-if="show2019"
              class="arrowBtn down"
              src="~/assets/images/arrow up.png"
              alt="arrow"
            /><img
              v-else
              class="arrowBtn up"
              src="~/assets/images/arrow up.png"
              alt="arrow"
            />
          </button>
        </div>
        <div v-if="show2019"></div>
        <ul v-else>
          <a
            href="https://docs.google.com/document/d/1KsYIV0xbcgvJkDc9naG-yNLnhbX6zTUNH4O9Ac5pN7k/edit#heading=h.vdzc5dwb6uac"
            target="_blank"
            ><li class="text date">January 2022</li></a
          >
        </ul>
      </div>
      <div class="yearly-agenda">
        <div class="container">
          <h3 class="subheading year">2020 - 2021</h3>
          <button @click="show2020 = !show2020" class="toggle">
            <img
              v-if="show2020"
              class="arrowBtn down"
              src="~/assets/images/arrow up.png"
              alt="arrow"
            /><img
              v-else
              class="arrowBtn up"
              src="~/assets/images/arrow up.png"
              alt="arrow"
            />
          </button>
        </div>
        <div v-if="show2020"></div>
        <ul v-else>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdgGfQEu7TBbMe1aB9A7HZOMSSL2T6WfqsM1gR7qGFFaXszEQ/closedform"
            target="_blank"
          >
            <li class="text date">October 2020</li></a
          >
        </ul>
      </div>
      <div class="yearly-agenda">
        <div class="container">
          <h3 class="subheading year">2019 - 2020</h3>
          <button @click="show2021 = !show2021" class="toggle">
            <img
              v-if="show2021"
              class="arrowBtn down"
              src="~/assets/images/arrow up.png"
              alt="arrow"
            /><img
              v-else
              class="arrowBtn up"
              src="~/assets/images/arrow up.png"
              alt="arrow"
            />
          </button>
        </div>
        <div v-if="show2021"></div>
        <ul v-else>
          <a
            href="https://docs.google.com/document/d/11kbl0ug0NmI0ABU2szF86nC_dU55vYrNUX_0FNvDxL8/edit"
            target="_blank"
          >
            <li class="text date">March 6th, 2020</li></a
          ><a
            href="https://docs.google.com/document/d/18-ke1JA2iAwRs5xVC1CnxLj5cGz9EbuuUpavbyXfq9I/edit"
            target="_blank"
          >
            <li class="text date">January 17th, 2020</li></a
          ><a
            href="https://docs.google.com/document/d/1Dn0-o498J7-DwpcoXxixHRZoa5ytpT_jJg5bthItMNw/edit"
            target="_blank"
          >
            <li class="text date">December 13th, 2019</li></a
          >
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Agendas',
  methods: {},
  data() {
    return {
      show2019: true,
      show2020: true,
      show2021: true,
    }
  },
}
</script>
<style scoped>
.Agendas {
  background-color: var(--navy);
  padding-bottom: 8rem;
}
#agendas {
  color: var(--white);
  font-family: 'Sora', sans-serif;
  font-style: normal;
  font-weight: 700;
  text-align: center;
}
#text {
  font-size: var(--h4);
}
.text {
  color: var(--white);
  font-family: 'ABeeZee';
  font-style: normal;
  font-weight: 400;
  text-align: center;
  line-height: 7.5rem;
  margin: 0rem 11rem 0 11rem;
}
.agendas-container {
  display: grid;
  grid-gap: 6.5rem;
  margin-top: 5rem;
}
.yearly-agenda {
  background-color: var(--white);
  margin: 0 10rem 0 10rem;
  border-radius: 1rem;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.year {
  color: var(--navy);
  font-family: 'Sora', sans-serif;
  font-style: normal;
  font-weight: 700;
  margin-top: 3.5rem;
  padding-bottom: 3rem;
}
ul {
  list-style-type: none;
  padding-bottom: 4rem;
}
a {
  text-decoration: none;
}
ul li::before {
  content: '•';
  font-size: 10rem;
  color: var(--yellow);
  text-align: center;
  vertical-align: middle;
  margin-right: 2rem;
}
li {
  display: flex;
  align-items: center;
}
.date {
  color: var(--navy);
  text-align: left;
  margin-left: 20rem;
  line-height: 6rem;
  font-size: var(--h4);
  margin-top: 0;
  cursor: url('~/assets/images/hoverBtnCursor.png'), auto;
}
/* .date::before {
  content: url('~/assets/images/yellowbullet.png');
  margin-right: 3rem;
  vertical-align: middle;
} */
.toggle {
  background: transparent;
  border: none;
  cursor: url('~/assets/images/hoverBtnCursor.png'), auto;
  margin-top: 1.5rem;
  margin-bottom: auto;
  margin-right: 8rem;
  margin: 1.5rem 8rem auto 0;
}
.arrowBtn {
  height: 10rem;
  cursor: url('~/assets/images/hoverBtnCursor.png'), auto;
  transition: 0.5s;
  /* transform: rotate(180deg); */
}
.down {
  transform: rotate(180deg);
  transition: 0.5s;
}
@media only screen and (max-width: 1500px) {
  .agendas-container {
    margin-top: 3rem;
    grid-gap: 5.5rem;
  }
  #text {
    font-size: var(--h5);
    line-height: 6rem;
  }
  .year {
    font-size: var(--h4);
    margin: 3rem 0rem 0rem 8rem;
  }
  .arrowBtn {
    height: 7.5rem;
  }
  .toggle {
    margin: 1.5rem 6rem auto 0;
  }
  .date {
    font-size: var(--h5);
    margin-left: 15rem;
    line-height: 4rem;
  }
  ul li::before {
    font-size: 7rem;
  }
}
@media only screen and (max-width: 1032px) {
  .agendas-container {
    grid-gap: 5rem;
  }
  .yearly-agenda {
    margin: 0 8rem 0 8rem;
  }
  .year {
    margin: 3rem 0rem 0rem 5rem;
  }
  .toggle {
    margin: 1.5rem 3.5rem auto 0;
  }
  .date {
    margin-left: 11rem;
    height: 4rem;
  }
  ul li::before {
    font-size: 6rem;
  }
}
@media only screen and (max-width: 770px) {
  .agendas-container {
    margin-top: 3rem;
    grid-gap: 4rem;
  }
  .yearly-agenda {
    margin: 0 5rem 0 5rem;
  }
  .container {
    height: 8rem;
  }
  .year {
    margin: 2.75rem 0rem 0rem 4rem;
    font-size: var(--h5);
  }
  #text {
    line-height: 2.5;
    font-size: var(--h6);
  }
  .toggle {
    margin: 1.5rem 2.5rem auto 0;
  }
  .arrowBtn {
    height: 5.5rem;
  }
  ul {
    padding-bottom: 3rem;
  }
  ul li::before {
    font-size: 4rem;
    margin-right: 1rem;
  }
  .date {
    margin-left: 7rem;
    height: 3rem;
    font-size: var(--h6);
  }
}
@media only screen and (max-width: 500px) {
  .agendas-container {
    margin-top: 2rem;
    grid-gap: 2.2rem;
  }
  .yearly-agenda {
    margin: 0 3rem 0 3rem;
  }
  .container {
    height: 6rem;
  }
  #text {
    font-size: var(--one);
    line-height: 2;
  }
  .year {
    margin: 2.1rem 0rem 0rem 2.5rem;
    font-size: var(--h6);
    padding-bottom: 2rem;
  }
  .toggle {
    margin: 1.5rem 2rem auto 0;
  }
  .arrowBtn {
    height: 3.3rem;
  }
  .date {
    font-size: var(--one);
    height: 2.5rem;
    margin-left: 5rem;
  }
  ul {
    padding-bottom: 2.2rem;
  }
  ul li::before {
    font-size: 3.5rem;
  }
}
</style>
