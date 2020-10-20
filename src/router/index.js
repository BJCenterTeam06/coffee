import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home.vue'
import Register from '../pages/zhu.vue'
import Login from '../pages/dengl.vue'
import Caidan from '../pages/Caidan.vue'
import Addr from '../pages/addr.vue'
import Cubeui from '../pages/cubeui.vue'
import Order from '../pages/order.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/order',
    name:'Order',
    component:Order
  },
  {
    path:'/cubeui',
    name:'Cubeui',
    component:Cubeui
  },
  {
    path:'/addr',
    name:'Addr',
    component:Addr
  },
  {
    path:'/caidan',
    name:'Caidan',
    component:Caidan
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  },
  {
    path:'/register',
    name:'Register',
    component:Register
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router