export default {
  props:{
    name: String
  },
  render(h) {
    return h('div', {
      class: {
        child: true,
        more: false
      },
      attrs: {
        id: 'foo',
        name: 'child'
      },
      style: {
        width: '100%',
        height: '50px'
      },
      domProps: {
        innerHTML: 'child-innerHTML' + this.name
      }
    })
  },
}