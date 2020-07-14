<template>
  <scroll @load="load">
    <div v-for="(item,index) of list" :key="index" class="item" v-exposure="{index, name: '滚动列表'}">{{item}}</div>
  </scroll>
</template>

<script>
import scroll from "@components/infinite-scroll/index";
let data_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default {
  components: {
    scroll
  },
  data: function() {
    return {
      list: []
    };
  },
  created: function() {
    this.$store.commit("changeTab", "list");
  },
  methods: {
    load: function() {
      this.list = this.list.concat(data_list);
    }
  }
};
</script>

<style lang="less" scoped>
.scroll-wrapper {
  height: 100vh;

  .item {
    height: 70px;
    padding: 10px 26px;
    border-bottom: 1px solid #e5e5e5;
  }
}
</style>
