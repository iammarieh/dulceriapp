<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="mycolor">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <h1>SOBRE NOSOTROS</h1>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" color="mycolor" class="ion-color-mycolor">
      <div
        style="
          text-align: center;
          margin: 2rem auto;
          width: 90%;
          text-align: justify;
        "
      >
        <img
          src="../../public/assets/img/logo.png"
          width="200"
          height="156"
          alt="img usuario"
          style="float: left; margin-right: 10px"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          voluptas fugiat adipisci tenetur incidunt deleniti eos eius laudantium
          officiis at, eum voluptate nostrum sapiente fuga eaque id sit
          excepturi doloremque? Cum nisi eum iste aperiam consequuntur. Veniam
          nobis sit, minima repellat accusamus, sunt commodi animi delectus
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          voluptas fugiat adipisci tenetur incidunt deleniti eos eius laudantium
          officiis at, eum voluptate nostrum sapiente fuga eaque id sit
          excepturi doloremque? Cum nisi eum iste aperiam consequuntur. Veniam
          nobis sit, minima repellat accusamus, sunt commodi animi delectus
        </p>
      </div>
    </ion-content>
  </ion-page>
</template>


<script lang="ts">
import { IonPage, IonContent } from "@ionic/vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "NosotrosPage",
  components: {
    IonPage,
    IonContent,
  },
});
</script>

<style>
h1 {
  color: #215dbe !important;
  font-size: 25px;
  font-weight: bold;
  margin: 15px;
  margin-left: -1rem;
  text-align: center;
}
ion-menu-button {
  font-size: 10rem;
}
</style>
