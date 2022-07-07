<template>
    <div class="AlbumPreview">
        <div class="polaroid">
             <img id="picture" src="{{img}}" alt="{{ title }}">
            <a target="_blank" href="{{ link }}">{{title}}</a> 
        </div>

    </div>
</template>
<script>
export default {
    name: 'AlbumPreview',
    methods: {},
    props: {
        title: String,
        img: String,
        link: String,
    }
}
</script>
<style scoped>
.AlbumPreview {
  background-color: #333043;
  padding-bottom: 10rem;
}
.gall {
  color: var(--darkpink);
  font-size: var(--h1);
}
.name {
  font-family: 'ABeeZee', sans-serif;
  font-style: normal;
  color: var(--navyblue);
  text-align: center;
  font-size: var(--h5);
  width: 20rem;
  display: block;
  font-weight: bolder;
  text-align: center;
  margin-top: 3rem;
}
.polaroid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(23rem, 1fr));
  grid-gap: 7rem;
  margin: 11rem;
  margin-top: 6rem;
  justify-items: center;
  grid-template-rows: auto;
}
.polaroid {
  background-color: white;
  height: 36rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#picture {
  height: 20rem;
  width: 20rem;
  margin: 3rem;
  margin-bottom: 0;
  margin-top: 0;
  z-index: 1;
  background-color: rgb(194, 194, 194);
}
@media only screen and (max-width: 1080px) {
  .heading {
    text-align: center;
    margin: 0;
  }
  .polaroid-container {
    grid-gap: 5rem;
    margin: 7rem;
  }
}
@media only screen and (max-width: 600px) {
  .polaroid {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 48vw;
    height: 35rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0rem;
  }
  #picture {
    margin-top: 2rem;
  }
  .name {
    font-size: var(--h5);
    margin-top: 0;
  }
  .heading {
    font-size: var(--h3);
    margin-left: 0rem;
    margin-right: 0rem;
    margin-top: 0rem;
    text-align: center;
  }
  .gall {
    font-size: var(--h3);
    margin-top: 0rem;
  }
}
</style>

