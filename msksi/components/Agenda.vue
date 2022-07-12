<template>
  <div class="Agendas">
    <h2 class="heading">Agendas</h2>
    <div class="agendas-container">
      <div class="yearly-agenda">
        <h3 class="subheading">2021-2022 Agendas</h3>
        <h4 class="text">January 2022 Agenda</h4>
        <a
          target="_blank"
          class="link"
          href="https://docs.google.com/document/d/1KsYIV0xbcgvJkDc9naG-yNLnhbX6zTUNH4O9Ac5pN7k/edit#heading=h.vdzc5dwb6uac"
          >click for agenda!</a
        >
      </div>
      <div class="yearly-agenda">
        <h3 class="subheading">2020-2021 Agendas</h3>
        <h4 class="text">October 2020 Agenda</h4>
        <a
          target="_blank"
          class="link"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdgGfQEu7TBbMe1aB9A7HZOMSSL2T6WfqsM1gR7qGFFaXszEQ/viewform"
          >click to acess agenda!</a
        >

        <h4 class="text">March 2021 Agenda</h4>
        <h4 class="text">June 2021 Agenda</h4>
      </div>
      <div class="yearly-agenda">
        <h3 class="subheading">2019-2020 Agendas</h3>
        <h4 class="text">March 2022 Agenda</h4>
        <a
          target="_blank"
          class="link"
          href="https://docs.google.com/document/d/11kbl0ug0NmI0ABU2szF86nC_dU55vYrNUX_0FNvDxL8/edit"
          >click for agenda!</a
        >
        <h4 class="text">January 2020 Agenda</h4>
        <a
          target="_blank"
          class="link"
          href="https://docs.google.com/document/d/18-ke1JA2iAwRs5xVC1CnxLj5cGz9EbuuUpavbyXfq9I/edit"
          >click for agenda!</a
        >
        <h4 class="text">December 2020 Agenda</h4>
        <a
          target="_blank"
          class="link"
          href="https://docs.google.com/document/d/1Dn0-o498J7-DwpcoXxixHRZoa5ytpT_jJg5bthItMNw/edit"
          >click for agenda!</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Agenda',
  methods: {},
}
</script>

<style scoped>
.link {
  text-align: right;
  margin-left: 5rem;
  font-family: 'ABeeZee', sans-serif;
  color: var(--navyblue);
  font-size: var(--h5);
}
.Agendas {
  background-color: white;
  padding-bottom: 10rem;
}
.heading {
  color: var(--navyblue);
  text-align: center;
  font-size: var(--h2);
  color: var(--navyblue);
  text-align: center;
  margin-left: auto;
  font-family: 'Black Han Sans';
  margin-top: 0rem;
  padding-top: 4rem;
}
.subheading {
  font-size: var(--h3);
  color: var(--darkpink);
  text-align: left;
  margin-left: 4rem;
  font-family: 'Black Han Sans';
}
.text {
  font-size: var(--h4);
  color: #333043;
  font-family: 'ABeeZee', sans-serif;
  margin-left: 5rem;
  margin-top: 1.5rem;
}
@media only screen and (max-width: 510px) {
  .text {
    font-size: var(--h5);
    margin-left: 4rem;
  }
  .link {
    margin-left: 4rem;
    color: var(--navyblue);
    font-size: var(--h5);
  }
  .subheading {
    font-size: var(--subheadingjum);
    margin-left: 4rem;
  }
}
</style>
  .heading {
    font-size: var(--h3);
    text-align: center;
    margin-left: auto;
    padding: 0;
    margin-top: 5rem;
  }
}
</style>
