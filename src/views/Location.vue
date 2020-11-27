
<template>
  <div class="location">
    <div class="title">
      <h1>Location</h1>
    </div>
    <div v-html="location" class="places">
      {{location || 'hola'}}
    </div>
    <div class="locationCard">
        <div class="locations">
            <div class="locationsInfo">
                <div id="1" v-on:click="chooseMap" class="locationInfo">
                <PhMapPin id="1"  v-on:click="chooseMap" :size="30" weight="bold" />
                    <p id="1"  v-on:click="chooseMap">AJ Katzenmaier  Elementary</p>
                </div>
                <div id="2" v-on:click="chooseMap" class="locationInfo">
                <PhMapPin id="2"  v-on:click="chooseMap" :size="30" weight="bold" />
                    <p id="2"  v-on:click="chooseMap">Greenbay  Elementary</p>
                </div>
                <div id="3" v-on:click="chooseMap" class="locationInfo">
                <PhMapPin id="3"  v-on:click="chooseMap" :size="30" weight="bold" />
                    <p id="3"  v-on:click="chooseMap">North Elementary</p>
                </div>
            </div>
            <div class="locationsInfo">
                <div id="4" v-on:click="chooseMap" class="locationInfo">
                <PhMapPin id="4"  v-on:click="chooseMap" :size="30" weight="bold" />
                    <p id="4"  v-on:click="chooseMap">Howard A Yeager  Elementary</p>
                </div>
                <div id="5" v-on:click="chooseMap" class="locationInfo">
                <PhMapPin id="5"  v-on:click="chooseMap" :size="30" weight="bold" />
                    <p id="5"  v-on:click="chooseMap">South  Elementary</p>
                </div>
                <div id="6" v-on:click="chooseMap" class="locationInfo">
                <PhMapPin id="6"  v-on:click="chooseMap" :size="30" weight="bold" />
                    <p id="6"  v-on:click="chooseMap">Marjorie P Hart  Elementary</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
 import { PhMapPin} from "phosphor-vue";
  
export default {
  name: 'Location',
  components: {
      PhMapPin
  },
  data: function () {
     return {
       location: '<div style="width: 100%"><iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Capital%20federal+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.mapsdirections.info/marcar-radio-circulo-mapa/">Marcar radio en el mapa</a></div>'
     }
  },
  methods: {
     chooseMap: function ({target}) {

      switch(target.id){
        case '1':
          this.location = '<div style="width: 100%"><iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=AJ%20Katzenmaier%20%20Elementary+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.mapsdirections.info/marcar-radio-circulo-mapa/">Radio en el mapa</a></div>';
        break;
        case '2':
          this.location = '<div style="width: 100%"><iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Greenbay%20%20Elementary+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.mapsdirections.info/marcar-radio-circulo-mapa/">Marcar radio en el mapa</a></div>';

        break;
        case '3':
          this.location = '<div style="width: 100%"><iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5854973846726!2d-87.6651145851418!3d41.923268570566414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245%20N%20Southport%20Ave%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1594730264953!5m2!1ses-419!2sar" ></iframe></div>'
        break;
        case '4':
          this.location = '<div style="width: 100%"><iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.2917289530833!2d-87.64808628514157!3d41.929582270170805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625%20N%20Orchard%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1594730359332!5m2!1ses-419!2sar" ></iframe></div>'
        break;
        case '5':
          this.location = '<div style="width: 100%"><iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.3562837029876!2d-87.6476589851424!3d41.90669907160408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd33a674ca85d%3A0x9940c7163c4950c5!2s1409%20N%20Ogden%20Ave%2C%20Chicago%2C%20IL%2060610%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1594730382342!5m2!1ses-419!2sar" ></iframe></div>'
        break;
        case '6':
          this.location = '<div style="width: 100%"><iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.74776482656!2d-87.65355538514191!3d41.91978077078484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3196fb41dc7%3A0x970be7f7d6336df5!2s2101%20N%20Fremont%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1594730414654!5m2!1ses-419!2sar" ></iframe></div>'
        break;
      }
      }
      }
      
    }

</script>

<style>

.locations{
    display:flex;
    background:white;
    height: 75%;
    width: 85%;
    flex-direction: column;
    border-radius:10px;
}

.locationInfo {
    color: black;
    height: 100%;
    padding-top:10px;
}

.locationInfo {
    flex: 1;
}

.locationsInfo {
    display: flex;
    justify-content: space-evenly;
    flex: 1;
    align-items: center;
}

.location {
    display:flex;
    flex-direction: column;
    margin:auto;
    height: 100%;
    flex: 10;
    width: 100%;

}

.title {
  display:flex;
  justify-content: center;
  flex: 0;
}

.locationCard {
  margin:0;
  background: #0d0a3a;;
  color: #fff;
  font-family: Arial;
  font-size: 16px;
  text-align: center;
  height: 500px;
  width: 100%;
  flex: 2;
  justify-content: center;
      align-items: center;
      display:flex;

}

.places {
    flex: 2;
    justify-content: space-evenly;
  display: flex;

}

</style>