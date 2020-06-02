<template>
  <layout>
    什么也没有的首页
  </layout>
</template>

<script>
import layout from "@components/layout";
export default {
  components: {
    layout
  },
  created: function(){
    this.$store.commit('changeTab','home');
  }
};
</script>

<style lang="less" scoped>
</style>
