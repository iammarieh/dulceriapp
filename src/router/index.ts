import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import ('../views/InicioPage.vue')
  }, 
  {
    path: '/slide',
    component: () => import ('../views/SlidePage.vue')
  },
  {
    path: '/login',
    component: () => import ('../views/LoginPage.vue')
  },
  {
    path: '/cambiarpass',
    component: () => import ('../views/CambiarPassPage.vue')
  },
  {
    path: '/registrarse',
    component: () => import ('../views/RegistrarsePage.vue')
  },
  {
    path: '/nosotros',
    component: () => import ('../views/NosotrosPage.vue')
  },
  {
    path: '/eventos',
    component: () => import ('../views/EventosPage.vue')
  },
  {
    path: '/galeria',
    component: () => import ('../views/GaleriaPage.vue')
  },
  {
    path: '/noticias',
    component: () => import ('../views/NoticiasPage.vue')
  },  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
