<template>
  <div ref="scroll" class="scroll-wrapper" @scroll="scroll">
    <slot></slot>
  </div>
</template>

<script>
function getBottomLength(element) {
  return element.scrollHeight - (element.scrollTop + element.clientHeight);
}
// 这个组件需要一个确定的高度
export default {
  data() {
    return {
      distance: 200, // 距离底部距离，px
      delay: 200, // 延迟，ms
      timeout: null // 定时器
    };
  },

  methods: {
    scroll: function() {
      const el = this.$refs.scroll;
      if (getBottomLength(el) <= this.distance) {
        this.load();
      }
    },
    load: function() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        console.log('滚动加载');
        this.$emit("load");
      }, this.delay);
    }
  }
};
</script>

<style lang="less" scoped>
.scroll-wrapper {
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
