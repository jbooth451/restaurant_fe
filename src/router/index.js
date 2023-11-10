import { createRouter, createWebHistory } from 'vue-router'
 import Home from '../views/Home.vue'
 import Menu from '../components/Menu.vue'
 import Reservation from '../components/Reservation.vue'
 import Auth from '../components/Auth'
 import Register from '../components/Register'
 
const routes = [
   {
     path: '/',
     name: 'Home',
     component: Home
   },
   {
     path: '/menu',
     name: 'Menu',
     component: Menu,
   },
   {
     path:'/menu/:msg',
     name: 'MenuUpdated',
     component: Menu
   },
   {
     path:'/reservations/:pk?',
     name:'Reservation',
     component: Reservation
   },
   {
     path:'/auth',
     name:'Auth',
     component: Auth
   },
   {
     path:'/register',
     name: 'Register',
     component: Register
   }
 ]
 
const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes
 })
 
export default router

