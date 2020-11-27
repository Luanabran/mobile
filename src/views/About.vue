
<template>
  <div class="about">
    <div class="title">

      <h1>About NYSL</h1>

    </div>
    <div class="carousel">
      <Carousel perPage=1> 
        <Slide>
          <h1 class="titleText">Mission</h1>
          <span class="label">To support young athletes living in Chicago's northside neighborhoods, who have an interest in learning and playing soccer, with opportunities to learn and practice skills related to the game of soccer, specifically those skills around team cooperation and good sportsmanship.</span>
        </Slide>
        <Slide>
          <h1 class="titleText">Vission</h1>
          <span class="label">The Northside Youth Soccer League aspires to develop strong, well-rounded, and mindful athletes through the building of character, self-discipline, and leadership.</span>
        </Slide>
        <Slide>
          <h1 class="titleText">General Information</h1>
          <span class="label">The Northside Youth Soccer League was established in 1996 to provide athletes residing in Chicago's northside neighborhoods an environment in which to learn and play soccer. To be a member of NYSL, you must be between the ages of 4 - 12 and reside in a Chicago northside neighborhood.</span>
        </Slide>

      </Carousel>
    </div>
      <h1>Events</h1>
    <div class="carouselEvents">
      <Carousel perPage=1> 
        <Slide>
          <div class="event">
            <h2 class="titleText">August 4</h2>
            <span class="label">NYSL Fundraiser.</span>
          </div>
          
          <img src="../assets/photo1.jpeg"/>
        </Slide>
         <Slide>
          <div class="event">
            <h2 class="titleText">August 16</h2>
            <span class="label">Season Kick-off: Meet the Teams.</span>
          </div>
          <img src="../assets/photo2.jpeg"/>
        </Slide>
         <Slide>
          <div class="event">
            <h2 class="titleText">September 1</h2>
            <span class="label">First Game of the Season (Check Game Schedule for details).</span>
          </div>
          <img src="../assets/photo1.jpeg"/>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'About',
  components: {
    Carousel,
    Slide
  },
  data: function () {
     return {
       active: 1
     }
  },
  methods: {
  }
}

</script>

<style>

img {
      width: 60%;
    height: 100%;
}

.event {
  text-align: left;
}

.about {
  padding-bottom: 75px;
}

.title {
  display:flex;
  justify-content: center;
}

.carousel {
  margin:20px;
  min-height:30%;
}

.carouselEvents {
  margin:20px;
  min-height:30%;
}


.titleText{
  margin-top:10px;
}

.carousel div.VueCarousel-slide {
  position: relative;
  background: #42b983;
  color: #fff;
  font-family: Arial;
  font-size: 16px;
  text-align: center;
}

.carouselEvents div.VueCarousel-inner {
  flex-basis: 0;
  max-height: 200px;
}

.carouselEvents div.VueCarousel-slide {
  position: relative;
  background: #e22525;
  color: #fff;
  font-family: Arial;
  font-size: 16px;
  text-align: center;
  display:flex;
}

.label {
  display:flex;
  flex-direction:column;
  flex:1;
  padding:10px;
}

</style>