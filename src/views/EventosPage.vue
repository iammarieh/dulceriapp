<template>
<ion-app>
  <ion-page>
    <ion-content :fullscreen="true" color="mycolor">
        <div class="container">
            <ion-title><h1 style="text-align: center;">EVENTOS</h1></ion-title>
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
                    <img :src="ea.image">
                  </ion-thumbnail>
                  <ion-label>
                    <h2>{{ ea.titulo }}</h2>
                    <p>{{ ea.descripcion }}</p>
                    <p><b>{{ ea.fecha}}</b></p>
                  </ion-label>
                    <ion-button class="button" slot="end" expand="block">Ver</ion-button>
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
      eventos :[
        { id: 1,
          image: '/assets/img/img1.jpg',
          titulo: 'Frituras',
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          fecha: '05/07/22'
        },
        { id: 2,
          image: '/assets/img/img2.jpg',
          titulo: 'Dulceria a granel',
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          fecha: '05/07/22'
        },
        { id: 3,
          image: '/assets/img/img3.jpg',
          titulo: 'De La Rosa',
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          fecha: '05/07/22'
        },
        { id: 4,
          image: '/assets/img/img4.jpg',
          titulo: 'Dulces',
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          fecha: '05/07/22'
        },
      ],
    }
  },
});

</script>

<style>
  .cal_container {
    display: flex;
    align-items: center;
    position: relative;
  }

  ion-title h1 {
    color: #215dbe !important;
    font-size: 20px;
    font-weight: bold;
    padding: 5px;
  }

  ion-card {
    --background: #FFF !important;
    --padding: 8px;
    --border-radius: 5px;
    --align: center;
  }

  ion-thumbnail img {
    --border-radius: 50%;
  }

 .button {
    --background: #FF5685 !important;
    --color: #FFFFFF !important;
  }
</style>