<template>
<ion-app>
  <ion-page>
    <ion-content :fullscreen="true" color="mycolor">
        <div class="container">
            <ion-title><h1 style="text-align: center;">GALERÍA</h1></ion-title>
            <div v-for="gal in galeria" :key="gal.id">
                <ion-grid>
                    <ion-row>
                    <ion-col>
                        <ion-card>
                            <img :src="gal.image">
                            <ion-title style="text-align:center; color: #FF5685; font-size: 10px;">{{ gal.titulo }}</ion-title>
                        </ion-card>
                    </ion-col>
                    <ion-col>
                        <ion-label>
                            <p>{{ gal.descripcion }}</p>
                        </ion-label>
                    </ion-col>
                    </ion-row>
                    </ion-grid>
            </div>
            <div class="botones">
                <ion-button>
                    <ion-icon style="color:#FF5685;" size="small" src="/assets/icon/chevron-back.svg"></ion-icon>
                </ion-button>
                <ion-button disabled="true" style="background:#FF5685; border-radius: 5px;">1</ion-button>
                <ion-button disabled="false">2</ion-button>
                <ion-button disabled="false">3</ion-button>
                <ion-button disabled="false">4</ion-button>
                <ion-button disabled="false">5</ion-button>
                <ion-button>
                    <ion-icon style="color:#FF5685;" size="small" src="/assets/icon/chevron-forward.svg"></ion-icon>
                </ion-button>
            </div>
        </div>
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
  IonGrid,
  IonRow,
  IonCol,

} from "@ionic/vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "PruebaPage",
  components: {
    IonApp,
    IonPage,
    IonContent,
    IonTitle,
    IonGrid,
    IonRow,
    IonCol,
  },
  data() {
    return {
      galeria :[
        { id: 1,
          image: '/assets/img/img1.jpg',
          titulo: 'Frituras',
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum, mauris vel molestie tincidunt, tellus tellus efficitur enim.',
        },
        { id: 2,
          image: '/assets/img/img2.jpg',
          titulo: 'Dulceria a granel',
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut fermentum, mauris vel molestie tincidunt, tellus tellus efficitur enim.',
        },
        { id: 3,
          image: '/assets/img/img3.jpg',
          titulo: 'De La Rosa',
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut fermentum, mauris vel molestie tincidunt, tellus tellus efficitur enim.',
        },
        { id: 4,
          image: '/assets/img/img4.jpg',
          titulo: 'Dulces',
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum, mauris vel molestie tincidunt, tellus tellus efficitur enim.',
        },
      ],
    }
  },
});

</script>

<style>
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
  
  ion-button {
    --background: transparent !important;
    --color: #000000 !important;
    --box-shadow: transparent !important;

  }

  .botones {
    text-align: center;
  }

</style>