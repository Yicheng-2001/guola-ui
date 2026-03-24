import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import BuyPoints from '../views/BuyPoints.vue'
import Workbench from '../views/Workbench.vue'
import PaySuccess from '../views/PaySuccess.vue'

const routes = [
  {
    path: '/',
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
    name: 'Workbench',
    component: Workbench
  },
  {
    path: '/pay-success',
    name: 'PaySuccess',
    component: PaySuccess
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
