
<template>
  <div id="information">
   
  <div id="gameAndTitle">
 <div class="title">

      <h1>Game info</h1>

    </div>
    <div class="carousel">
      <Carousel  @page-change="handleSlideClick" perPage=1> 
        <Slide 
        data-index="1"
        data-name="slide-1"
         class="slide">
           <h1 style="text-align: end;" class="titleText"> 9/01 </h1>
          <p class="gameInfo" >U1 and U4</p>
          <p class="gameInfo">AJ Katzenmaier</p>
          <p class="gameInfo">9:30 a.m.</p>
        </Slide>
        <Slide data-index="2"
        data-name="slide-2"
        class="slide">
           <h1 style="text-align: end;" class="titleText"> 9/01 </h1>
          <p class="gameInfo">U3 and U2</p>
          <p class="gameInfo">Greenbay</p>
          <p class="gameInfo">1:00 p.m.</p>
        </Slide>
        <Slide data-index="3"
        data-name="slide-3"
        class="slide">
           <h1 style="text-align: end;" class="titleText"> 9/08 </h1>
          <p class="gameInfo" >U5 and U6</p>
          <p class="gameInfo">Howard A Yeager</p>
          <p class="gameInfo">9:30 a.m.</p>
        </Slide>
        <Slide data-index="4"
        data-name="slide-4"
        class="slide">
           <h1 style="text-align: end;" class="titleText"> 9/08 </h1>
          <p class="gameInfo">U6 and U1</p>
          <p class="gameInfo">Marjorie P Hart</p>
          <p class="gameInfo">1:00 p.m.</p>
        </Slide>
        <Slide data-index="5"
        data-name="slide-5"
        class="slide">
           <h1 style="text-align: end;" class="titleText"> 10/06 </h1>
          <p class="gameInfo">U2 and U5</p>
          <p class="gameInfo">Marjorie P Hart</p>
          <p class="gameInfo">9:30 a.m.</p>
        </Slide>
        <Slide data-index="6"
        data-name="slide-6"
        class="slide">
           <h1 style="text-align: end;" class="titleText"> 10/06 </h1>
          <p class="gameInfo">U1 and U6</p>
          <p class="gameInfo">South</p>
          <p class="gameInfo">1:00 p.m.</p>
        </Slide>
      </Carousel>
    </div>
    <button v-if="user" v-on:click="goToPosts" id="postButton" >Ir al posteo</button>
  </div>
    
    <div v-if="!mobile">
      <Location ></Location>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Carousel, Slide } from 'vue-carousel';
import firebase from "firebase/app";
import 'firebase/app';
import 'firebase/auth';
import "firebase/database";
import Location  from './Location'
export default {
  name: 'GameInfo',
  components: {
    Carousel,
    Slide,
    Location
  },
  data: function () {
     return {
       active: 1,
       mobile: true,
       chatId: 0,
       user: null
     }
  },
  methods: {
    detectOrientationChange() {
     const infoDiv= document.getElementById('information')
     const gameAndTitleDiv= document.getElementById('gameAndTitle')


    switch(screen.orientation.type.match(/\w+/)[0]) {  
        case 'landscape':
          infoDiv.style.display = 'flex';
          gameAndTitleDiv.style.maxWidth = '50vw'
        this.mobile = false;
        break; 
        default:
          infoDiv.style.display = 'block';
          gameAndTitleDiv.style.maxWidth = '100vw'
          this.mobile = true;
          break; 
      }
    },
    handleSlideClick (dataset){
      console.log(dataset)
      this.chatId = dataset
    },
    goToPosts(){
      console.log(this.chatId)
      this.$router.push(`/posts/${this.chatId}`)
    }
  },
   beforeMount(){
    this.user = firebase.auth().currentUser
    console.log(firebase.auth().currentUser)
  },
    mounted() {
      console.log(Slide)
      this.detectOrientationChange();
    this.$nextTick(()=>{window.addEventListener('orientationchange', this.detectOrientationChange)})
  },
  created() {
    this.detectOrientationChange(); // when instance is created
  },
  
 
}

</script>

<style>

.slide {
   padding: 10px !important;
}

.signButton {
    padding: 10px;
    border-radius: 10px;
    border: none;
    box-shadow: 1px 1px 5px #888888;
    outline: 0;
    margin: 10px;
}



#button1{
  background: #2c30b1;
}
#button2{
  background: red;
}
#button3{
  background: red;
}

.gameInfo {
   text-align: start;
}

.buttons {
    display:flex;
    flex-direction:column;
}

#postButton {
    border-radius: 7px;
    color: wheat;
    background-color: #ea4a4a;
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

.carouselEvents div.VueCarousel-slide {
  position: relative;
  background: #e22525;
  color: #fff;
  font-family: Arial;
  font-size: 16px;
  text-align: center;
  display:flex;
}

</style>