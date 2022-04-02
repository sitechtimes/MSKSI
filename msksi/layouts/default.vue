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
padding-top: 20rem;
}
.keeper{
    color: var(--darkpink);
     font-size: 12rem;
     text-align: right;
     width: 70%;
}
.hometop{
    height: 65rem;
    background-color: var(--navyblue);
}
.si{
    font-family: 'ABeeZee', sans-serif;
    color: var(--yellow);
    font-size: var(--h3);
    width: 90%;
    text-align: right;
    margin-top: 10rem;
}

</style>
