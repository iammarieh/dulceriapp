<template>
  <div class="container">
    <ion-app>
      <ion-content :fullscreen="true" color="mycolor" class="ion-color-mycolor">
        <div class="conteiner_info">
          <div>
            <h1>SLIDE</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae ex accusamus dolorem quo, quod ipsum veniam sit
              deserunt quaerat fugit quam atque perferendis fuga natus incidunt
              labore iste obcaecati ullam.
            </p>
          </div>
        </div>
        <div class="contenedor_slides">
          <ion-slides :pager="true" :options="slideOpts">
            <ion-slide>
              <img src="../../public/assets/img/slide-1.png" />
            </ion-slide>
            <ion-slide>
              <img src="../../public/assets/img/slide-2.png" />
            </ion-slide>
            <ion-slide>
              <img src="../../public/assets/img/slide-3.png" />
            </ion-slide>
            <ion-slide>
              <img src="../../public/assets/img/slide-4.png" />
            </ion-slide>
          </ion-slides>
        </div>
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
});
</script>

<style>
.container {
  background-color: #fdffb6 !important;
  height: 100vh;
}
.conteiner_info {
  background-color: #fdffb6 !important;
  color: #000;
}
.conteiner_info div {
  padding-top: 4rem;
}
ion-slides {
  margin: 0 2rem;
  width: 90%;
}
.contenedor_slides {
  background-color: #fdffb6 !important;
  margin-top: -25px;
  padding-bottom: 10rem;
}
.slide img {
  width: 100%;
  height: 100%;
  pointer-events: none;
}

h1 {
  text-align: center;
  color: #215dbe;
  font-size: 28px;
  font-weight: bold;
}

p {
  font-size: 20px;
  padding: 2rem 2rem 5rem 2rem;
  text-align: justify;
}
ion-app:host {
  background: #fdffb6 !important;
}
</style>