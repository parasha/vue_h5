import mixin from '../../utils/form-item-mixin';
import assign from '../../utils/assign';

import { Field } from 'vant';

export default {
  mixins: [mixin],
  render(h) {
    return h(Field, {
      props: assign(this.form_item_config.props, { value: this.form[this.form_item_key] }),
      on: assign(this.form_item_config.events, {
        input: (value) => {
          this.form[this.form_item_key] = value;
        },
      })
    })
  },
}