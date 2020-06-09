import Vue from 'vue'
import Router from 'vue-router'

import home from '@pages/Home.vue';
import list from '@pages/List.vue';

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: home,
  },
  {
    path: '/list',
    component: list
  },
  {
    path: '/infinite-scroll',
    component: ()=>import(/* webpackChunkName: "infinite-scroll" */'@pages/InfiniteScroll.vue')
  },
  {
    path: '/form',
    component: ()=>import(/* webpackChunkName: "form" */'@pages/Form.vue')
  }
]

function createRouter() {
  const router = new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes,
  })

  return router;
}

export default createRouter;