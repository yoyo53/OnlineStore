import { createRouter, createWebHashHistory } from 'vue-router'
import PageAccueil from '../views/PageAccueil.vue'
import PageAccueilnotlog from '../views/PageAccueilnotlog.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import PageCart from '../views/PageCart.vue'
import PageProfil from '../views/PageProfil.vue'
import PageAdminC from '../views/PageAdminCommande.vue'
import PageAdminU from '../views/PageAdminUtilisateur.vue'
import PageAdminP from '../views/PageAdminProduit.vue'
import { config } from '../../config.js'

const routes = [
  {
    path: '/',
    name: 'homenotlog',
    component: PageAccueilnotlog
  },
  {
    path: '/home',
    name: 'home',
    component: PageAccueil
  },
  {
    path: '/signIn',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/signUp',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/cart',
    name: 'cart',
    component: PageCart
  },
  {
    path: '/account',
    name: 'account',
    component: PageProfil
  },
  {
    path: '/Commandes',
    name: 'AdminCommande',
    component: PageAdminC
  },
  {
    path: '/Users',
    name: 'AdminUtilisateur',
    component: PageAdminU
  },
  {
    path: '/Products',
    name: 'AdminProduit',
    component: PageAdminP
  }
]
const router = createRouter({
  history: createWebHashHistory(process.env.NODE_ENV === 'production' ? config.base_url : '/'),
  routes
})

export default router
