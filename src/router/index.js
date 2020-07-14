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
    path: '/json-form',
    component: ()=>import(/* webpackChunkName: "json-form" */'@pages/VantJsonForm.vue')
  },
  {
    path: '/scroll-observe',
    component: ()=>import(/* webpackChunkName: "scroll-observe" */'@pages/ScrollObserve.vue')
  }
]

function createRouter() {
  const router = new Router({
    mode: 'history',
    // base: '/vue_demo_page/',
    scrollBehavior: () => ({ y: 0 }),
    routes,
  })

  return router;
}

export default createRouter;