<template>
  <layout active="home">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </layout>
</template>

<script>
import layout from "@components/layout";
export default {
  components: {
    layout
  }
};
</script>

<style lang="less" scoped>
</style>
