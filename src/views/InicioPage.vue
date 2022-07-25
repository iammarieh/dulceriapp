<template>
  <ion-page>
    <ion-header :translucent="true">
    <ion-toolbar color="mycolor">
        <h1> </h1>
    </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" color="mycolor">
      <virtual-scroll-element class="ion-content-scroll-host">
          <h1>Bienvenid@: Itzel Escamilla</h1>
        <div class="container_1">
          <ion-slides pager="true" :options="slideOpts">
            <ion-slide >
              <img class="imagen" src="/assets/img/1.png" alt="" srcset="">
            </ion-slide>
            <ion-slide>
              <img class="imagen" src="/assets/img/2.png" alt="" srcset="">
            </ion-slide>
            <ion-slide>
              <img class="imagen" src="/assets/img/3.png" alt="" srcset="">
            </ion-slide>
            <ion-slide>
              <img class="imagen" src="/assets/img/4.png" alt="" srcset="">
            </ion-slide>
            <ion-slide>
              <img class="imagen" src="/assets/img/5.png" alt="" srcset="">
            </ion-slide>
          </ion-slides>
        </div>
        <div class="container_2">
            <img  class="imagen" src="/assets/img/logo.png" alt="" srcset="">
          <ion-text>
          <p class="texto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi bibendum purus sem, nec maximus tortor ornare pulvinar. Phasellus fermentum imperdiet dui eu accumsan. Praesent gravida pharetra dapibus. Maecenas imperdiet, nunc ac ullamcorper euismod, velit enim blandit ex, non dapibus justo neque eget elit. Quisque consectetur odio ac urna malesuada rhoncus.
          </p>
          </ion-text>
        </div>
      </virtual-scroll-element>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonContent,
  IonText,
  IonSlides,
  IonSlide,
} from "@ionic/vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "InicioPage",
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonText,
    IonSlides,
    IonSlide,
  },
  setup() {
    const slideOpts = {
      initialSlide: 1,
      speed: 300
    };
    return { slideOpts }
  }
});
</script>

<style scoped>
  h1 {
    color: #215dbe !important;
    font-size: 25px;
    font-weight: bold;
    padding: 20px;
  }
  .texto {
    text-align: justify;
  }
  .container_1, .container_2  {
    padding: 20px;
    text-align: center;
  }
  .imagen {
    border-radius: 20px;
  }

</style>