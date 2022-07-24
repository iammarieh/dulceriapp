<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Cambiar Contraseña</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" color="mycolor" class="ion-color-mycolor">
      <ion-grid>
        <div style="text-align: center; margin-top: 3rem">
          <img
            src="../../public/assets/img/usuario.png"
            width="200"
            height="206"
            alt="img usuario"
          />
        </div>
        <ion-row style="margin-top: 3rem">
          <ion-col size="12" style="margin: auto">
            <ion-item style="border-radius: 5px; border: 1px solid #000">
              <ion-label position="floating">Contraseña</ion-label>
              <ion-input type="password"></ion-input>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="12" style="margin: auto">
            <ion-item style="border-radius: 5px; border: 1px solid #000">
              <ion-label position="floating">Repite la contraseña</ion-label>
              <ion-input type="password"></ion-input>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row style="margin-top: 1.5rem">
          <ion-col
            size="10"
            style="text-align: center; margin: 0 auto 10px auto"
          >
            <ion-button color="primary" style="border-radius: 3px">
              <span style="color: #fff">
                <ion-icon
                  style="transform: rotate(-34.84deg)"
                  size="small"
                  src="/assets/icon/send.svg"
                ></ion-icon>
                GUARDAR
              </span>
            </ion-button>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="12" style="text-align: center">
            <a href="/login">Iniciar sesión</a>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>


<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonInput,
  IonIcon,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CambiarPassPage",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonLabel,
    IonInput,
    IonIcon,
  },
});
</script>

<style>
:root {
  --ion-safe-area-top: 20px;
  --ion-safe-area-bottom: 22px;
}
</style>
