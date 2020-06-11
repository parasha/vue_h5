import mixin from '../../utils/form-item-mixin';
import assign from '../../utils/assign';

import { RadioGroup, Radio } from 'vant';

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
      h('div', {
        class: 'radio-title',
        style: {
          'font-weight': 'bold',
          'padding-bottom': '10px'
        },
        domProps: {
          innerHTML: props.label
        }
      }),
      h(RadioGroup, {
        props: assign(props, { value: this.form[this.form_item_key] }),
        on: {
          change: events.change || function () { }
        }
      }, options.map(item => {
        return h(Radio, {
          // todo
          // 这里要加一个禁用功能
          props: assign(item.props, { name: item.key }),
          on: {
            click: () => {
              this.form[this.form_item_key] = item.key;
            }
          },
        }, [
          h('span', {
            domProps: {
              innerHTML: item.value
            },
            slot: 'default'
          })
        ])
      }))
    ])
  },
}