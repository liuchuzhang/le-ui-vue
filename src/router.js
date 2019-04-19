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
      component: () => import(/* webpackChunkName: "about" */ './views/loading.vue'),
    },
    {
      path: '/container',
      component: () => import(/* webpackChunkName: "about" */ './views/container.vue'),
    },
    {
      path: '/index',
      component: () => import(/* webpackChunkName: "about" */ './views/index.vue'),
    },
    {
      path: '/swiper',
      component: () => import(/* webpackChunkName: "about" */ './views/swiper.vue'),
    }
  ]
})
