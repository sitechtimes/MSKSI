<template>
  <div>
<Navbar />
<div class="joinustop">
    <h2 class="heading">Join Us Today!</h2>
    <h3 class="subheading subc"> Sub Comittee</h3>
    <h4 class="responsibility subcr"> Responsibilities</h4>
    <ul id="subc">
        <li class="text">Sign in-Attendance Assist </li>
        <li class="text">Session Feedback/Tracking and follow up</li>
        <li class="text">Keeping the attendance sign in for the meetings (in chat)</li>
        <li class="text">Transformation Tables</li>
        <li class="text">Managing website & calendar</li>
    </ul>
</div>
<div class="joinusmid">
    <h3 class="subheading wbsm"> Website & Social Media Manager</h3>
    <h4 class="responsibility wbsmr"> Responsibilities</h4>
    <ul id="wbsm">
        <li class="text">Sign in-Attendance Assist </li>
        <li class="text">Session Feedback/Tracking and follow up</li>
        <li class="text">Keeping the attendance sign in for the meetings (in chat)</li>
        <li class="text">Transformation Tables</li>
        <li class="text">Managing website & calendar</li>
    </ul>
</div>
<Footer />
  </div>
</template>
<style scoped>
#subc{
    list-style-type: circle;
    color: white;
        margin-top: 2rem;
}
.subc{
    color: var(--darkpink);
    font-size: var(--h2);
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
    font-size: var(--h3);
    font-family: 'Black Han Sans';
    font-weight: lighter;
}
.text{
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: var(--h3);
    margin-left: 15rem;
    margin-top: 0.5rem;
}
.joinustop{
    height: 100rem;
}
.joinusmid{
    height: 100rem;
    background-color: white;
    margin-top: 30rem;
}
.wbsm{
    font-size: var(--h2);
    color: rgba(220, 53, 92, 1);
}
#wbsm{
        list-style-type: circle;
    color: var(--navyblue);
        margin-top: 2rem;
}
.wbsmr{
    color: var(--darkpink);
}
</style>