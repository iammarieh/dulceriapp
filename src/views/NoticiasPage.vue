<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="mycolor">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <h1>NOTICIAS</h1>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" color="mycolor">
      <virtual-scroll-element class="ion-content-scroll-host">
        <div container_1>
          <h1>Lo más actual</h1>
          <ion-card slot="fixed" class="card">
            <card-content>
              <ion-list style="margin: 10px">
                <ion-item>
                  <ion-label
                    ><b>1. </b> Descuentos en productos DE LA ROSA</ion-label
                  >
                  <ion-button class="boton">Ver más</ion-button>
                </ion-item>
                <ion-item>
                  <ion-label
                    ><b>2. </b> Chicles Bubaloo de Nuevo Sabor</ion-label
                  >
                  <ion-button class="boton">Ver más</ion-button>
                </ion-item>
                <ion-item>
                  <ion-label
                    ><b>3. </b> Promociones 2x1 en Ferrero Rocher</ion-label
                  >
                  <ion-button class="boton">Ver más</ion-button>
                </ion-item>
                <ion-item>
                  <ion-label><b>4. </b> Nuevos Tootis acaramelados</ion-label>
                  <ion-button class="boton">Ver más</ion-button>
                </ion-item>
              </ion-list>
            </card-content>
          </ion-card>
        </div>
        <div class="container_2">
          <ion-text>
            <p class="texto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              bibendum purus sem, nec maximus tortor ornare pulvinar. Phasellus
              fermentum imperdiet dui eu accumsan. Praesent gravida pharetra
              dapibus. Maecenas imperdiet, nunc ac ullamcorper euismod, velit
              enim blandit ex, non dapibus justo neque eget elit. Quisque
              consectetur odio ac urna malesuada rhoncus.
            </p>
          </ion-text>
        </div>
        <div class="container_3">
          <ion-slides pager="true" :options="slideOpts">
            <ion-slide v-for="img in imgs" :key="img.id">
              <img :src="'/assets/img/' + img.id + '.png'" />
            </ion-slide>
          </ion-slides>
          <h2>TWO SALAZAR'S</h2>
          <p class="texto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            bibendum purus sem, nec maximus tortor ornare pulvinar. Phasellus
            fermentum imperdiet dui eu accumsan. Praesent gravida pharetra
            dapibus. Maecenas imperdiet, nunc ac ullamcorper euismod, velit enim
            blandit ex, non dapibus justo neque eget elit. Quisque consectetur
            odio ac urna malesuada rhoncus.
          </p>
        </div>
      </virtual-scroll-element>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonCard,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonText,
  IonSlides,
  IonSlide,
} from "@ionic/vue";

import { defineComponent } from "vue";
export default defineComponent({
  name: "NoticiaPage",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonContent,
    IonCard,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
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
      imgs: [{ id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }],
    };
  },
});
</script>

<style scoped>
h1 {
  color: #215dbe !important;
  font-size: 25px;
  font-weight: bold;
  margin: 15px;
}
ion-toolbar h1 {
  color: #215dbe !important;
  font-size: 25px;
  font-weight: bold;
  margin: 15px;
  margin-left: -2.5rem;
  text-align: center;
}
ion-menu-button {
  font-size: 10rem;
}
.card {
  background: #ffffff !important;
  text-align: center;
  box-shadow: none;
  border: 2px solid black;
}
.texto {
  text-align: justify;
}
.container_1,
.container_2,
.container_3 {
  padding: 20px;
}
.imagen {
  border-radius: 20px;
}
h2 {
  color: #ff5685 !important;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
b {
  color: #ff5685 !important;
}
.boton {
  --background: #ff5685 !important;
  --color: #ffffff !important;
}
ion-content {
  background-color: #fdffb6 !important;
}
</style>