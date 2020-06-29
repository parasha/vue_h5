import mixin from '../../utils/form-item-mixin';
import assign from '../../utils/assign';

import { Field } from 'vant';

function childrenInit(h, slots) {
  let arr = [];
  for (const key in slots) {
    if (slots.hasOwnProperty(key)) {
      const element = slots[key];
      arr.push(h(element, {
        slot: key
      }))
    }
  }
  return arr;
}

export default {
  mixins: [mixin],
  render(h) {
    let { props, events, slots } = this.form_item_config;
    slots = slots || {};
    return h(Field, {
      // 属性
      props: assign(props, { value: this.form[this.form_item_key] }),
      // 事件
      on: assign(events, {
        // input 事件，实现 v-model
        input: (value) => {
          this.form[this.form_item_key] = value;
        },
      })
    }, childrenInit(h, slots))
  },
}