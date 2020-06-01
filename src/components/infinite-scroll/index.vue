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
// https://github.com/ElemeFE/vue-infinite-scroll 根据这个改出来的组件，倒也不是说指令式不好
export default {
  data() {
    return {
      distance: 200, // 距离底部距离，px
      delay: 200, // 延迟，ms
      timeout: null, // 定时器
      last_load_time: 0
    };
  },

  methods: {
    scroll: function() {
      const el = this.$refs.scroll;
      if (Date.now() - this.last_load_time < this.delay) {
        return;
      }
      if (getBottomLength(el) <= this.distance) {
        this.load();
      }
    },
    load: function() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        console.log("滚动加载");
        this.$emit("load");
        this.last_load_time = Date.now();
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
