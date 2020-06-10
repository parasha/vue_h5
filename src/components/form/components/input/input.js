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
    return h('input', {
      class: 'form-item-input',
      attrs: {
        type: this.form_item_config.type,
        value: this.form[this.form_item_key]
      },
      on: {
        input: (event)=>{
          this.form[this.form_item_key] = event.target.value
        }
      }
    })
  },
}