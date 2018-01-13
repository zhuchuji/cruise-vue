import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/views/dashboard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
