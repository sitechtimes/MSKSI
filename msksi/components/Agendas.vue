<template>
  <div class="Agendas">
    <h2 class="heading" id="agendas">Agendas</h2>
    <h3 class="text">Click to view agendas.</h3>
    <div class="agendas-container">
      <div class="yearly-agenda">
        <div class="container">
          <h3 class="subheading year">2021 - 2022</h3>
          <button class="toggle">
            <img
              @click="show = !show"
              class="arrow"
              src="~/assets/images/arrow up.png"
              alt="arrow"
            />
          </button>
        </div>
        <div v-if="show"></div>
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
          <button @click="show = !show" class="toggle">
            <img class="arrow" src="~/assets/images/arrow up.png" alt="" />
          </button>
        </div>
        <div v-if="show"></div>
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
          <button @click="show = !show" class="toggle">
            <img class="arrow" src="~/assets/images/arrow up.png" alt="" />
          </button>
        </div>
        <div v-if="show"></div>
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
}
</script>
<style scoped>
.Agendas {
  background-color: var(--navy);
  padding-bottom: 8rem;
}
#agendas {
  color: var(--white);
  font-family: 'Sora';
  font-style: normal;
  font-weight: 700;
  font-size: 7.8rem;
  text-align: center;
}
.text {
  color: var(--white);
  font-family: 'ABeeZee';
  font-style: normal;
  font-weight: 400;
  text-align: center;
  line-height: 10rem;
  font-size: 2.8rem;
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
  font-family: 'Sora';
  font-style: normal;
  font-weight: 700;
  font-size: 4.5rem;
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
  font-size: 8rem;
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
  line-height: 8rem;
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
  margin-right: 6rem;
}
.arrow {
  height: 10rem;
  cursor: url('~/assets/images/hoverBtnCursor.png'), auto;
  /* transform: rotate(180deg); */
}
</style>
