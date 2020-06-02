<template>
  <layout>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/list">List</router-link>
    </div>
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
