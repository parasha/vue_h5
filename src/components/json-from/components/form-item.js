import mixin from '../utils/form-item-mixin';

import field from './items/field';


export default {
  mixins: [mixin],
  render(h) {
    const { form_item_config, form, form_item_key } = this;
    const { type, ifReadonly } = form_item_config;
    // 表单项不可改
    if (ifReadonly && typeof ifReadonly == 'function') {
      if (ifReadonly(form)) {
        form_item_config.props.readonly = true;
      } else {
        if (form_item_config.props.readonly) {
          form_item_config.props.readonly = false;
        }
      }
    }
    switch (type) {
      case 'field':
        return h(field, { props: { form_item_config, form, form_item_key } })
    }
  },
}