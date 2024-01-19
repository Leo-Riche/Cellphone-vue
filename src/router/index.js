import { createRouter, createWebHistory } from 'vue-router'
import ListContacts from '../views/ListContacts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'listcontacts',
      component: ListContacts
    },
    {
      path: '/addcontact',
      name: 'AddContact',
      component: () => import('../views/AddContact.vue')
    },
    {
      path: '/contactscalled',
      name: 'ContactsCalled',
      component: () => import('../views/ContactsCalled.vue')
    },
    {
      path: '/clavier',
      name: 'Clavier',
      component: () => import('../views/Clavier.vue')
    },
    {
      path: '/contact/:id',
      name: 'Contact',
      component: () => import('../views/Contact.vue')
    },
  ]
})

export default router
