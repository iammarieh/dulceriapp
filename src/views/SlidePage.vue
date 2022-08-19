<template>
  <div class="container">
    <ion-app>
      <ion-header :translucent="true">
        <ion-toolbar color="mycolor">
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <h1>SLIDE</h1>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true" color="mycolor" class="ion-color-mycolor">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ex
          accusamus dolorem quo, quod ipsum veniam sit deserunt quaerat fugit
          quam atque perferendis fuga natus incidunt labore iste obcaecati
          ullam.
        </p>
        <ion-slides :pager="true" :options="slideOpts">
          <ion-slide v-for="img in imgs" :key="img.id">
            <img :src="'/assets/img/' + img.id + '.png'" />
          </ion-slide>
        </ion-slides>
      </ion-content>
    </ion-app>
  </div>
</template>


<script lang="ts">
import { IonSlides, IonSlide, IonApp, IonContent } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SlidePage",
  components: { IonSlides, IonSlide, IonApp, IonContent },
  setup() {
    // Optional parameters to pass to the swiper instance. See https://swiperjs.com/swiper-api for valid options.
    const slideOpts = {
      initialSlide: 0,
      speed: 400,
    };
    return { slideOpts };
  },
  data() {
    return {
      imgs: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
      ],
    };
  },
});
</script>

<style>
ion-slides {
  margin: 0 2rem;
  width: 90%;
}

h1 {
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

p {
  font-size: 20px;
  padding: 2rem 2rem 5rem 2rem;
  text-align: justify;
}
</style>