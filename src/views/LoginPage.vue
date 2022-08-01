<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="mycolor">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <h1>LOGIN</h1>
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
              <ion-label position="floating">Correo</ion-label>
              <ion-input type="email"></ion-input>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="12" style="margin: auto">
            <ion-item style="border-radius: 5px; border: 1px solid #000">
              <ion-label position="floating">Contraseña</ion-label>
              <ion-input type="password"></ion-input>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row style="margin-top: 1.5rem">
          <ion-col
            size="10"
            style="text-align: center; margin: 0 auto 10px auto"
          >
            <ion-button class="buttonEntrar">
              <span class="spanButton">
                <ion-icon
                  style="transform: rotate(-34.84deg)"
                  size="small"
                  src="/assets/icon/send.svg"
                ></ion-icon>
                INICIAR SESIÓN
              </span>
            </ion-button>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="12" style="text-align: center">
            <a
              href="/cambiarpass"
              style="text-decoration: none; font-size: 20px"
              >¿Olvidaste tu contraseña?</a
            >
          </ion-col>
          <ion-col size="12" style="text-align: center">
            <a href="/registrarse" style="font-size: 20px">Crear cuenta</a>
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
  name: "LoginPage",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
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

.buttonEntrar {
  --background: #ff5685 !important;
  --color: #ffffff !important;
  --border-radius: 3px;
  font-size: 20px;
}

.spanButton {
  font-weight: bold;
  padding: 0px !important;
}
</style>