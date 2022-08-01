<template>
  <ion-app>
    <ion-menu
      side="start"
      content-id="main-content"
      color="mycolor"
      class="ion-color-mycolor"
    >
      <ion-header>
        <ion-toolbar translucent color="mycolor" class="ion-color-mycolor">
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content color="mycolor" class="ion-color-mycolor">
        <ion-list
          color="mycolor"
          class="ionListMenu ion-color-mycolor"
          v-for="menu in menus"
          :key="menu.id"
        >
          <ion-item :href="menu.link" color="mycolor" class="ion-color-mycolor">
            <ion-icon :name="menu.icono" slot="start"></ion-icon>
            <ion-label>{{ menu.nombre }}</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>
    <ion-split-pane content-id="main-content">
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script >
import { IonRouterOutlet } from "@ionic/vue";
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import {
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  bookmarkSharp,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
} from "ionicons/icons";

export default defineComponent({
  name: "App",
  components: {
    IonRouterOutlet,
  },
  data() {
    return {
      menus: [
        {
          id: 1,
          nombre: "Inicio",
          icono: "home",
          link: "/",
        },
        {
          id: 2,
          nombre: "Eventos",
          icono: "calendar",
          link: "/eventos",
        },
        {
          id: 3,
          nombre: "Galería",
          icono: "images",
          link: "/galeria",
        },
        {
          id: 4,
          nombre: "Sobre nosotros",
          icono: "heart",
          link: "/nosotros",
        },
        {
          id: 5,
          nombre: "Noticias",
          icono: "document-text",
          link: "/noticias",
        },
        {
          id: 6,
          nombre: "Slide",
          icono: "albums",
          link: "/slide",
        },
        {
          id: 7,
          nombre: "Login",
          icono: "log-in",
          link: "/login",
        },
        {
          id: 8,
          nombre: "Registrarse",
          icono: "log-in",
          link: "/registrarse",
        },
        {
          id: 9,
          nombre: "Cambiar contraseña",
          icono: "key",
          link: "/cambiarpass",
        },
      ],
    };
  },
  methods: {
    link: function (link) {
      alert("Hola " + link + "!");
      this.push(link);
    },
  },
});
</script>

<style scoped>
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}

.ionListMenu {
  padding: 8px 0 0 0 !important;
  background: #fdffb6 !important;
}
</style>
