import { createRouter, createWebHistory } from 'vue-router'
import PageAccueil from '../views/PageAccueil.vue'
import PageAccueilnotlog from '../views/PageAccueilnotlog.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageAccueil
    },
    {
      path: '/homenotlog',
      name: 'homenotlog',
      component: PageAccueilnotlog
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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
