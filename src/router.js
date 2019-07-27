import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import City from './views/city/City'
import Detail from './views/detail/Detail'
import Template from './views/example/Template'
import TestFormCreate from './views/example/TestFormCreate'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/template',
      name: 'Template',
      component: Template
    },
    {
      path: '/formcreate',
      name: 'Formcreate',
      component: TestFormCreate
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
