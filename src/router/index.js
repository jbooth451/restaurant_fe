import { createRouter, createWebHistory } from 'vue-router'
 import Home from '../views/Home.vue'
 import Menu from '../components/Menu.vue'
 import Appetizers from '../components/Appetizers.vue'
 import SoupsSalads from '../components/SoupsSalads.vue';
 import SandwichesBurgers from '../components/SandwichesBurgers.vue';
 import MainEntrees from '../components/MainEntrees.vue';
 import Desserts from '../components/Desserts.vue';
 import Sides from '../components/Sides.vue';
 import Drinks from '../components/Drinks.vue';
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
     path: '/appetizers',
     name: 'Appetizers',
     component: Appetizers 
   },
   { path: '/soups_salads', 
     name: 'SoupsSalads',
     component: SoupsSalads 
   },
   { path: '/sandwiches_burgers',
     name: 'SandwichesBurgers', 
     component: SandwichesBurgers 
   },
   { path: '/main_entrees',
     name: 'MainEntrees',
     component: MainEntrees 
   },
   { path: '/desserts', 
     name: 'Desserts',
     component: Desserts 
   },
   { path: '/sides',
     name: 'Sides', 
     component: Sides 
   },
   { path: '/drinks', 
     name: 'Drinks',
     component: Drinks 
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

