import formItem from './components/form-item';

import { Form } from 'vant';

export default {
  props: {
    config: {
      type: Object,
      required: true
    },
    form: {
      type: Object,
      required: true
    }
  },

  render(h) {
    return h(
      Form,
      {},
      (() => {
        if (typeof this.config == 'object') {
          // slot 测试
          console.log('slot', this.$slots);
          
          let arr = [];
          for (const key in this.config) {
            // 表单项的单项配置
            const element = this.config[key];
            // 根据 ifRender 判断是否渲染
            const { ifRender } = element;
            if (ifRender && typeof ifRender == 'function' && !ifRender(this.form)) {
              continue
            } else {
              arr.push(h(formItem, { props: { form_item_config: element, form: this.form, form_item_key: key } }))
            }
          }
          return arr;
        } else {
          return [];
        }
      })()
    );
  },
}