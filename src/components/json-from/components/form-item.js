import mixin from '../utils/form-item-mixin';

import field from './items/field';
import radio from './items/radio';

export default {
  mixins: [mixin],
  render(h) {
    const { form_item_config, form, form_item_key } = this;
    const { type, ifDiasbled } = form_item_config;
    // 表单项不可改
    if (ifDiasbled && typeof ifDiasbled == 'function') {
      if (ifDiasbled(form)) {
        form_item_config.props.disabled = true;
      } else {
        if (form_item_config.props.disabled) {
          form_item_config.props.disabled = false;
        }
      }
    }
    switch (type) {
      case 'field':
        return h(field, { props: { form_item_config, form, form_item_key } })
      case 'radio':
        return h(radio, { props: { form_item_config, form, form_item_key } })
    }
  },
}