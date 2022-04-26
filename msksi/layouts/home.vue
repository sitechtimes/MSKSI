<template>
  <div>
<Navbar />
<div class="hometop">
    <h2 class="heading mysis"> My Sister’s</h2>
    <h2 class="heading keeper"> Keeper</h2>
    <h3 class="si">Staten Island</h3>
</div>
<div class="specialmonthly">
  <h2 class="month">April
    <h3 class="monthtitle">Cass' Birthday</h3>
  </h2>
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
.specialmonthly {
  height: 100rem;
  background-color: var(--navyblue);
}
.month {
  font-size: var(--h1);
}
.monthtitle{
  font-size: var(--h2);
}
@media only screen and (max-width: 810px){
  .hometop{
    height: auto;
}
.mysis{
  font-size: var(--h2);
margin-left: 2rem;

}
.keeper{
  font-size: var(--h2);
  margin-top: 1rem;
}
.si{
  font-size: var(--h4);
  
}
.hometop{
    background-color: var(--navyblue);
    height: 100rem;
}
}
@media only screen and (max-width: 1500px) {
  .mysis{
    padding-top: 25rem;
  }
    .keeper{
    color: var(--darkpink);
     font-size: 12rem;
     text-align: right;
     width: 80%;
     margin-top: 1rem;
     padding-top: 2rem;
}
.si{
  padding-top: 0rem;
  margin-top: 3rem;
}
.hometop{
  height: 80rem;
}
}

</style>
