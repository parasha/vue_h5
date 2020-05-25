import axios from '@common/js/ajax';
import { Toast, Dialog } from 'vant';

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
}

export default plugin;