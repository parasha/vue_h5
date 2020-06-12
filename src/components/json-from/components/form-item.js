import mixin from '../utils/form-item-mixin';
import setDisabled from '../utils/setDiaabled';

import field from './items/field';
import radio from './items/radio';

export default {
  mixins: [mixin],
  render(h) {
    const { form_item_config, form, form_item_key } = this;
    const { type, ifDiasbled } = form_item_config;
    // 表单项不可改
    if (ifDiasbled && typeof ifDiasbled == 'function') {
      setDisabled(ifDiasbled, form_item_config, form)
    }
    switch (type) {
      case 'field':
        return h(field, { props: { form_item_config, form, form_item_key } })
      case 'radio':
        return h(radio, { props: { form_item_config, form, form_item_key } })
    }
  },
}