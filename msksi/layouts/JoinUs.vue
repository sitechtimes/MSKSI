<template>
  <div>
<Navbar />
<div class="joinustop">
    <h2 class="heading">Join Us Today!</h2>
    <h3 class="subheading subc"> Sub Comittee</h3>
    <h4 class="responsibility subcr"> Responsibilities</h4>
    <ul id="subc">
        <li class="text"></li>
        <li class="text"></li>
        <li class="text"></li>
        <li class="text"></li>
        <li class="text"></li>
    </ul>

</div>
<Footer />
  </div>
</template>
<style scoped>
#subc{
    list-style-type: circle;
}
.subc{
    color: var(--darkpink);
}
.subcr{
    color: var(--yellow);
}
.joinustop{
    background-color: var(--navyblue);
    height: 65rem;
}
.responsibility{
    margin-top: 2rem;
    margin-left: 15rem;
    font-size: var(--h4);
    font-family: 'Black Han Sans';
    font-weight: lighter;
}
.text{
    font-family: 'Be Vietnam Pro', sans-serif;
}
</style>