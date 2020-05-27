<template>
  <div class="layout-wrapper">
    <slot></slot>
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="user" icon="user-o">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar);
Vue.use(TabbarItem);

export default {
  props: {
    active: {
      type: String,
      default: "home"
    }
  },
  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang="less" scoped>
.layout-wrapper {
  padding-bottom: 50px;
}
</style>
