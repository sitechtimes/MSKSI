<template>
  <div class="purple-p-y">
    <Navbar />
    <button @click="rootChange">TESTT</button>
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
export default{
  methods:{
    rootChange(){
      const root = document.documentElement;
      root.className += ' blackpink';
      const overallDiv =  document.getElementsByTagName( 'body' )[0];
      overallDiv.setAttribute('class', 'blackpink' );
      console.log('huh');
    }
  }
}
</script>