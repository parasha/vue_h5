import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 后退时刷新页面
window.addEventListener('pageshow', (e) => {
  if (e.persisted) {
    location.reload();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
