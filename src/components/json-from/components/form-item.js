import mixin from '../utils/form-item-mixin';
import setDisabled from '../utils/setDiaabled';

import field from './items/field';
import radio from './items/radio';
import checkbox from './items/checkbox';
import picker from './items/picker.vue';
import date from './items/date.vue';

const Components = {
  field,
  radio,
  checkbox,
  picker,
  date,
}

export default {
  mixins: [mixin],
  render(h) {
    const { form_item_config, form, form_item_key } = this;
    const { type, ifDiasbled } = form_item_config;
    // 设置表单项不可改
    if (ifDiasbled && typeof ifDiasbled == 'function') {
      setDisabled(ifDiasbled, form_item_config, form)
    }
    return h(Components[type], { props: { form_item_config, form, form_item_key } })
  },
}