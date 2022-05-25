<template>
  <div id="footer">
    <h2 class="contactus">Contact Us</h2>
    <h3 class="contacts">blankblankblank@email.com</h3>
    <div class="buttons">
      <button class="icon twitter"></button>
      <button class="icon instagram"></button>
      <button class="icon tiktok"></button>
      <button class="icon gmail"></button>
    </div>
  </div>
</template>
<style scoped>
@media only screen and (max-width: 1032px) {
  .contactus {
    font-size: var(--h4);
  }
  .contacts {
    color: var(--white);
    margin-top: 2rem;
    font-weight: lighter;
    font-size: var(--h5);
    font-family: 'ABeeZee', sans-serif;
  }
  #footer {
    width: 100%;
    padding-bottom: 2rem;
  }
  .buttons {
    margin-top: 3rem;
  }
  .icon {
    height: 3rem;
    width: 3rem;
    border-radius: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
}
@media only screen and (max-width: 810px) {
  #footer {
    height: 22rem;
    margin-bottom: 0;
  }
}
.icon{
      cursor: pointer;
      width: 2rem;
      height: 2rem;
}

</style>

<script>
export default {
  name: 'Footer',
}
</script>
