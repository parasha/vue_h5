import Vue from 'vue'

import '@common/less/reset.less'
// Vant
import 'vant/lib/index.css';

import App from './App.vue'
import createRouter from './router'
import createStore from './store'


// 注册全局组件
import vueMask from '@components/mask';
Vue.component('vueMask', vueMask)

// 处理 fix 定位时，由软键盘弹出引起的元素错位问题（ios常见）
import inputPositionFix from '@common/js/inputPositionFix';
inputPositionFix()
// 后退时刷新页面
window.addEventListener('pageshow', (e) => {
  if (e.persisted) {
    location.reload();
  }
});

// 调试工具
import VConsole from 'vconsole';
new VConsole();

// 通过插件注册一些实例方法： toast、dialog、showLoading……
import plugin from './plugins/index';
Vue.use(plugin);

new Vue({
  router: createRouter(),
  store: createStore(),
  render: h => h(App)
}).$mount('#app')
