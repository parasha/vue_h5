import mixin from '../../utils/form-item-mixin';
import assign from '../../utils/assign';
import setDisabled from '../../utils/setDiaabled';
import { Checkbox, CheckboxGroup } from 'vant';

function checkboxClick(result, value) {
  let i = result.indexOf(value)
  if (i > -1) {
    result.splice(i, 1)
  } else {
    result.push(value)
  }
}

function labelInit(h, props) {
  return h('div', {
    class: 'checkbox-title',
    style: {
      'font-weight': 'bold',
      'padding-bottom': '10px'
    },
    domProps: {
      innerHTML: props.label
    }
  })
}

function checkboxGroupInit(h, props, options, events) {
  return h(CheckboxGroup, {
    props: assign(props, { value: this.form[this.form_item_key] }),
    on: {
      change: events.change || function () { }
    }
  }, options.map(item => {
    const { ifDiasbled } = item;
    // 表单项不可改
    if (ifDiasbled && typeof ifDiasbled == 'function') {
      setDisabled(ifDiasbled, item, this.form)
    }
    return checkBoxInit.call(this, h, props, item)
  }))
}

function checkBoxInit(h, props, item) {
  return h(Checkbox, {
    style: {
      display: 'flex',
      'align-item': 'center',
      'margin-bottom': '5px'
    },
    props: assign(item.props, { name: item.key }),
    on: {
      click: () => {
        // 整个表单单选项的禁用
        if (props && props.disabled) {
          return;
        }
        // 单个选项的禁用
        if (item.props && item.props.disabled) {
          return;
        }
        checkboxClick(this.form[this.form_item_key], item.key)
      }
    },
  }, [checkBoxValueInit(h, item.value)])
}

function checkBoxValueInit(h, value) {
  return h('span', {
    domProps: {
      innerHTML: value
    },
    slot: 'default'
  })
}

export default {
  mixins: [mixin],
  render(h) {
    let { props, options, events } = this.form_item_config;
    props = props || {};
    events = events || {}

    return h('div', {
      class: 'van-cell',
      style: {
        'flex-direction': 'column'
      }
    }, [
      labelInit(h, props),
      checkboxGroupInit.call(this, h, props, options, events)
    ])
  },
}