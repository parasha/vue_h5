import test from './components/test'

export default {
  components: { test },
  props: {
    config: {
      type: Array,
      required: true
    }
  },
  data() {
    return {}
  },
  methods: {

  },
  render(h) {
    return h('div', {
      class: 'config-form',
    }, [h(test, { props: { name: '测试' } })]);
  },
}