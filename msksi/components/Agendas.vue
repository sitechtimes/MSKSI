<template>
  <div class="Agendas">
    <h2 class="heading" id="agendas">Agendas</h2>
    <h3 class="text">Click to view agendas.</h3>
    <div class="agendas-container">
      <div class="yearly-agenda">
        <div class="container">
          <h3 class="subheading year">2021 - 2022</h3>
          <i class="arrow up"></i>
        </div>
        <ul>
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
          <i class="arrow up"></i>
        </div>
        <ul>
          <li class="text date">October 2020</li>
        </ul>
      </div>
      <div class="yearly-agenda">
        <div class="container">
          <h3 class="subheading year">2019 - 2020</h3>
          <i class="arrow up"></i>
        </div>
        <ul>
          <li class="text date">March 6th, 2020</li>
          <li class="text date">January 17th, 2020</li>
          <li class="text date">December 13th, 2019</li>
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
  line-height: 15rem;
  font-size: 2.8rem;
}
.agendas-container {
  display: flex;
}
.yearly-agenda {
  background-color: var(--white);
  /* margin: 0 10rem 0 10rem; */
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
}
ul {
  list-style-image: url('~/assets/images/yellowbullet.png');
  margin-top: 3rem;
  padding-bottom: 5rem;
}
a {
  text-decoration: none;
}
.date {
  color: var(--navy);
  text-align: left;
  margin-left: 30rem;
  padding-left: 3rem;
  line-height: 8rem;
  cursor: url('~/assets/images/hoverBtnCursor.png'), auto;
}
li:hover {
  animation-name: expand;
}
@keyframes expand {
}
.arrow {
  width: 4rem;
  height: 4rem;
  border-style: solid;
  display: block;
  border-width: 0.8vmin 0.8vmin 0 0;
  transform: rotate(-45deg);
  margin-top: 6.5rem;
  margin-right: 10rem;
}
</style>
