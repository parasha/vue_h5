<template>
  <div class="layout-wrapper">
    <slot></slot>
    <van-tabbar v-model="$store.state.active_tab">
      <van-tabbar-item name="home" icon="home-o" @click="jump('home','/')">首页</van-tabbar-item>
      <van-tabbar-item name="list" icon="more-o" @click="jump('home','/list')">列表</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar);
Vue.use(TabbarItem);

export default {
  data() {
    return {};
  },

  methods: {
    jump: function(type, link) {
      if (this.$route.path == link) {
        return;
      }
      this.$router.replace(link);
      this.$store.commit("changeTab", type);
    }
  }
};
</script>

<style lang="less" scoped>
.layout-wrapper {
  padding-bottom: 50px;
}
</style>
