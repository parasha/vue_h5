function scrollObeserveDirective(Vue, cb) {
  let so;
  if (window.IntersectionObserver) {
    so = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        // 进入视窗时触发
        if (entry.isIntersecting) {
          cb(JSON.parse(entry.target.getAttribute('data-exposure-props')))
        }
      })
    }, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3 // 不一定非得全部露出来  这个阈值可以小一点点
    });
  }
  console.log('滚动曝光指令初始化');
  Vue.directive('exposure', {
    bind: function (el, binding) {
      if (!window.IntersectionObserver) {
        return;
      }
      el.setAttribute('data-exposure-props', JSON.stringify(binding.value));
      so.observe(el)
    },
    unbind: function (el) {
      if (!window.IntersectionObserver) {
        return;
      }
      so.unobserve(el)
      console.log('unbind')
    }
  })
}


export default scrollObeserveDirective;