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
    path: '/simple-form',
    component: ()=>import(/* webpackChunkName: "simple-form" */'@pages/SimpleForm.vue')
  },
  {
    path: '/json-form',
    component: ()=>import(/* webpackChunkName: "json-form" */'@pages/VantJsonForm.vue')
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