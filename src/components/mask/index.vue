<template>
  <div class="no-touch-move-mask" v-show="show" :style="{'z-index': zIndex}" @click.stop.prevent>
    <div :class="position">
      <slot></slot>
    </div>
  </div>
</template>

<script>
let topPosition = 0;

function stopBodyScroll(isFixed) {
  let bodyEl = document.body;
  if (isFixed) {
    topPosition = window.scrollY;
    bodyEl.style.position = "fixed";
    bodyEl.style.width = "100%";
    bodyEl.style.top = -topPosition + "px";
  } else {
    bodyEl.style.position = "";
    bodyEl.style.top = "";
    window.scrollTo(0, topPosition); // 回到原先的top
  }
}
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "middle"
    },
    zIndex: {
      type: Number,
      default: 10002
    },
  },
  beforeDestroy() {
    stopBodyScroll(false);
  },
  watch: {
    show: function(newValue) {
      stopBodyScroll(newValue);
    }
  },
};
</script>

<style lang="less" scoped>
.no-touch-move-mask {
  position: fixed;
  z-index: 10002;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);

  .middle,
  .bottom {
    max-height: 80%;
    position: absolute;
  }
  .middle {
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
  .bottom {
    bottom: 0;
    left: 0;
    width: 100%;
  }
}
</style>
