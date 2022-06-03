<template>
    <div class="Agendas">
        <h2 class="heading">Agendas</h2>
        <h3 class="subheading"> 2021-2022 Agendas</h3>
        <h4 class="text"> January 2022 Agenda</h4>
        <h3 class="subheading"> 2020-2021 Agendas</h3>
        <h4 class="text"> October 2020 Agenda</h4>
        <h4 class="text"> March 2021 Agenda</h4>
        <h4 class="text"> June 2021 Agenda </h4>
        <h3 class="subheading"> 2019-2020 Agendas</h3>
        <h4 class="text"> March 2022 Agenda</h4>
        <h4 class="text">January 2020 Agenda</h4>
        <h4 class="text"> December 2020 Agenda</h4>


    </div>
</template>

<script>
export default {
  name: 'Agenda',
  methods: {},
}
</script>

<style scoped>
.Agendas{
    background-color: white;
    padding-bottom: 10rem;
}
.heading{
    font-size: var(--h2);
    color: var(--navyblue);
    text-align: center;
    font-family: 'Black Han Sans';
    margin-top: 0rem;
}
.subheading{
    font-size: var(--h3);
    color: var(--darkpink) ;
    text-align: left;
    margin-left: 4rem;
    font-family: 'Black Han Sans';
}
.text{
    font-size: var(--h4);
    color: #333043;
      font-family: 'ABeeZee', sans-serif;
      margin-left: 5rem;

}
@media only screen and (max-width: 510px){

}
</style>