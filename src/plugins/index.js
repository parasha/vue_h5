import axios from '@common/js/ajax';
import { Toast, Dialog } from 'vant';

import scrollObeserveDirective from './scrollObserve';

const plugin = {};

plugin.install = (Vue, options) => {
  // 添加 ajax 请求方法
  Vue.prototype.$axios = axios;
  Vue.prototype.$dialog = Dialog;
  // Toast 设置
  Toast.setDefaultOptions({
    forbidClick: true,
  })
  Vue.prototype.$toast = Toast;
  Vue.prototype.$showLoading = (text) => {
    Toast.loading({
      duration: 0,
      message: text
    })
  };
  Vue.prototype.$hideLoading = (text) => {
    Toast.clear();
  };
  // 曝光监听，自定义指令
  scrollObeserveDirective(Vue, (value)=>{
    console.log('曝光事件触发:', value)
  })
}

export default plugin;