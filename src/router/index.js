import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import BuyPoints from '../views/BuyPoints.vue'
import Workbench from '../views/Workbench.vue'
import PaySuccess from '../views/PaySuccess.vue'

const routes = [
  {
    path: '/',
    name: 'Workbench',
    component: Workbench
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/buy-points',
    name: 'BuyPoints',
    component: BuyPoints
  },
  {
    path: '/workbench',
    redirect: '/'
  },
  {
    path: '/pay-success',
    name: 'PaySuccess',
    component: PaySuccess
  },
  {
    path: '/payment/success',
    alias: '/payment/success/',
    redirect: (to) => ({
      path: '/pay-success',
      query: to.query,
      hash: to.hash
    })
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
