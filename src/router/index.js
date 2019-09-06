import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Equipment from '@/components/Equipment'
import Todolist from '@/components/Todolist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Equipment',
      name: 'Equipment',
      component: Equipment
    },
    {
      path: '/Todolist',
      name: 'Todolist',
      component: Todolist
    }
  ]
})
