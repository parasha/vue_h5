<template>
  <layout>
    <div class="list">
      <div class="list-title">组件：</div>
      <div class="list-item" v-for="(item,index) of list" :key="index" @click="jump(item.link)">
        <span>{{item.name}}</span>
        <van-icon name="arrow" color="#999999" />
      </div>
    </div>
  </layout>
</template>

<script>
import Vue from "vue";
import layout from "@components/layout";
import { Icon } from "vant";
Vue.use(Icon);
export default {
  components: {
    layout
  },
  data: function() {
    return {
      list: [
        {
          name: "滚动加载",
          link: "/infinite-scroll"
        }
      ]
    };
  },
  created: function() {
    this.$store.commit("changeTab", "list");
  },
  methods: {
    jump: function(link) {
      this.$router.push(link)
    }
  }
};
</script>

<style lang="less" scoped>
.list {
  padding: 20px 16px;
  .list-title {
    font-size: 18px;
    color: #666;
    margin-bottom: 10px;
  }
  .list-item {
    padding: 5px 16px;
    height: 50px;
    border-radius: 25px;
    line-height: 50px;
    font-size: 17px;
    background-color: #eaeaea;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #999999;
  }
}
</style>
