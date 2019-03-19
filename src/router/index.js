import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(Router)
Vue.use(VueMaterial)

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'login',
      component: Login
    }
  ]
})
