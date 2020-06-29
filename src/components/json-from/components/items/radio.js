import mixin from '../../utils/form-item-mixin';
import assign from '../../utils/assign';
import setDisabled from '../../utils/setDiaabled';
import {LABEL_STYLE} from './base';
import { RadioGroup, Radio } from 'vant';

// label 渲染
function labelInit(h, props) {
  return h('div', {
    class: 'radio-title',
    style: LABEL_STYLE,
    domProps: {
      innerHTML: props.label
    }
  })
}

function radioGroupInit(h, props, options, events) {
  return h(RadioGroup, {
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
    return radioInit.call(this, h, props, item)
  }))
}

function radioInit(h, props, item) {
  return h(Radio, {
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
        this.form[this.form_item_key] = item.key;
      }
    },
  }, [radioValueInit(h,item.value)])
}

function radioValueInit(h, value){
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
      radioGroupInit.call(this, h, props, options, events),
    ])
  },
}