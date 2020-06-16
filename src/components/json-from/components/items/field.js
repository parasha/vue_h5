import mixin from '../../utils/form-item-mixin';
import assign from '../../utils/assign';

import { Field } from 'vant';

export default {
  mixins: [mixin],
  render(h) {
    let { props, events, slots } = this.form_item_config;
    slots = slots || {};
    return h(Field, {
      props: assign(props, { value: this.form[this.form_item_key] }),
      on: assign(events, {
        input: (value) => {
          this.form[this.form_item_key] = value;
        },
      })
    }, (() => {
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
    })())
  },
}