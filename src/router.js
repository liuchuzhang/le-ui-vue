import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '',
      redirect:'/loading'
    },
    {
      path: '/loading',
      name: 'loading',
      component: () => import(/* webpackChunkName: "about" */ './views/loading.vue')
    },
  ]
})
