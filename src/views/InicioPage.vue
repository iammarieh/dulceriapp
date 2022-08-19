<template>
  <div>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar color="mycolor">
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true" color="mycolor">
        <virtual-scroll-element class="ion-content-scroll-host">
          <div class="container_1">
            <ion-slides pager="true" :options="slideOpts">
              <ion-slide v-for="img in imgs" :key="img.id">
                <img :src="'/assets/img/' + img.id + '.png'" />
              </ion-slide>
            </ion-slides>
          </div>
          <div class="container_2">
            <img class="imagen" src="/assets/img/logo.png" alt="" srcset="" />
            <ion-text>
              <p class="texto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                bibendum purus sem, nec maximus tortor ornare pulvinar.
                Phasellus fermentum imperdiet dui eu accumsan. Praesent gravida
                pharetra dapibus. Maecenas imperdiet, nunc ac ullamcorper
                euismod, velit enim blandit ex, non dapibus justo neque eget
                elit. Quisque consectetur odio ac urna malesuada rhoncus.
              </p>
            </ion-text>
          </div>
        </virtual-scroll-element>
      </ion-content>
    </ion-page>
  </div>
</template>

<script>
import {
  IonButtons,
  IonMenuButton,
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
    IonButtons,
    IonMenuButton,
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
      speed: 300,
    };
    return { slideOpts };
  },
  data() {
    return {
      imgs: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    };
  },
});
</script>

<style scoped>
h1 {
  color: #215dbe !important;
  font-size: 25px;
  font-weight: bold;
  padding: 20px;
}
ion-menu-button {
  font-size: 10rem;
}
.texto {
  text-align: justify;
}
.container_1,
.container_2 {
  padding: 20px;
  text-align: center;
}
.imagen {
  border-radius: 20px;
}
</style>