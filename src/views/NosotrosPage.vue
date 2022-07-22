<template>
  <ion-page>
    <ion-content :fullscreen="true" color="mycolor" class="ion-color-mycolor">
      <div
        style="
          text-align: center;
          margin: 5rem auto;
          width: 90%;
          text-align: justify;
        "
      >
        <h1>SOBRE NOSOTROS</h1>

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
:root {
  --ion-safe-area-top: 20px;
  --ion-safe-area-bottom: 22px;
}

h1 {
  text-align: center;
  color: #215dbe;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 5rem;
}
</style>
