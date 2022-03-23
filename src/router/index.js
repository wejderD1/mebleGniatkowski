import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../views/Kontakty.vue')
  },
  {
    path: '/gallery/:id',
    name: 'gallery',
    component: () => import('../views/Gallery.vue'),
    children: [
      {
        path: '',
        name: 'mebleSystemowe',
        component: () => import('../views/MebleSystemowe.vue')
      },
      {
        path: 'kuchnie_zabudowy',
        name: 'kuchnieZabudowy',
        component: () => import('../views/KuchnieZabudowy.vue')
      },
      {
        path: 'szafy_przesuwne',
        name: 'SzafyPrzesuwne',
        component: () => import('../views/SzafyPrzesuwne.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
