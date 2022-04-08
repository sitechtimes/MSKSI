<template>
  <div>
<Navbar />
<div class="hometop">
    <h2 class="heading mysis"> My Sister’s</h2>
    <h2 class="heading keeper"> Keeper</h2>
    <h3 class="si">Staten Island</h3>
</div>

<Footer />
  </div>
</template>
<style scoped>
.mysis{
  font-size: 12rem;
  text-align: center;
  width: 90%;
padding-top: 30rem;
}
.keeper{
    color: var(--darkpink);
     font-size: 12rem;
     text-align: right;
     width: 70%;
}
.hometop{
    background-color: var(--navyblue);
    height: 100rem;
}
.si{
    font-family: 'ABeeZee', sans-serif;
    color: var(--yellow);
    font-size: var(--h3);
    width: 90%;
    text-align: right;
    margin-top: 10rem;
}
@media only screen and (max-width: 1500px) {
    .keeper{
    color: var(--darkpink);
     font-size: 12rem;
     text-align: right;
     width: 80%;
}
}
</style>
