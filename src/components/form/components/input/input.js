import attrInit from '../../utils/attr';

export default {
  props: {
    form_item_config: {
      type: Object,
      required: true
    },
    form: {
      type: Object,
      required: true
    },
    form_item_key: {
      type: String,
      required: true,
    }
  },
  render(h) {
    const {attrs} = this.form_item_config;
    return h('input', {
      class: 'form-item-input',
      attrs: attrInit(attrs || {}, this.form, this.form_item_key),
      on: {
        input: (event)=>{
          this.form[this.form_item_key] = event.target.value
        }
      }
    })
  },
}