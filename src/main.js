import Vue from 'vue'

import '@common/less/reset.less'

import App from './App.vue'
import router from './router'
import store from './store'

// Vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// 后退时刷新页面
window.addEventListener('pageshow', (e) => {
  if (e.persisted) {
    location.reload();
  }
});

new Vue({
  router,
  store,
  // render: h => h('div', 'hello world')
  render: h => h(App)
}).$mount('#app')
