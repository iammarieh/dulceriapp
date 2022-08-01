<template>
  <ion-app>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar color="mycolor">
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <h1>EVENTOS</h1>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true" color="mycolor">
        <div class="container">
          <div class="cal_container">
            <ion-card>
              <ion-datetime presentation="date"></ion-datetime>
            </ion-card>
          </div>
          <div>
            <ion-title><h1>Eventos agregados</h1></ion-title>
            <div v-for="ea in eventos" :key="ea.id">
              <ion-card>
                <ion-item>
                  <ion-thumbnail slot="start">
                    <img :src="ea.image" />
                  </ion-thumbnail>
                  <ion-label>
                    <h2>{{ ea.titulo }}</h2>
                    <p>{{ ea.descripcion }}</p>
                    <p>
                      <b>{{ ea.fecha }}</b>
                    </p>
                  </ion-label>
                  <ion-button class="buttonVer" slot="end" expand="block"
                    >Ver</ion-button
                  >
                </ion-item>
              </ion-card>
            </div>
          </div>
        </div>
        <!-- Your virtual scroll content -->
      </ion-content>
    </ion-page>
  </ion-app>
</template>

<script>
import {
  IonApp,
  IonPage,
  IonContent,
  IonTitle,
  IonCard,
  IonDatetime,
  IonItem,
  IonThumbnail,
  IonLabel,
  IonButton,
} from "@ionic/vue";

import { defineComponent } from "vue";
export default defineComponent({
  name: "PruebaPage",
  components: {
    IonApp,
    IonPage,
    IonContent,
    IonTitle,
    IonCard,
    IonDatetime,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonButton,
  },
  data() {
    return {
      eventos: [
        {
          id: 1,
          image: "/assets/img/1.png",
          titulo: "Frituras",
          descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          fecha: "05/07/22",
        },
        {
          id: 2,
          image: "/assets/img/2.png",
          titulo: "Dulceria a granel",
          descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          fecha: "05/07/22",
        },
        {
          id: 3,
          image: "/assets/img/3.png",
          titulo: "De La Rosa",
          descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          fecha: "05/07/22",
        },
        {
          id: 4,
          image: "/assets/img/4.png",
          titulo: "Dulces",
          descripcion:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          fecha: "05/07/22",
        },
      ],
    };
  },
});
</script>

<style>
.cal_container {
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
}
h1 {
  color: #215dbe !important;
  font-size: 25px;
  font-weight: bold;
  margin: 15px;
  margin-left: -2.5rem;
  text-align: center;
}
ion-card {
  --background: #fff !important;
  --padding: 8px;
  --border-radius: 5px;
  --align: center;
}

ion-thumbnail img {
  --border-radius: 50%;
}
.buttonVer {
  --background: #ff5685 !important;
  --color: #ffffff !important;
}
ion-menu-button {
  font-size: 10rem;
}
</style>