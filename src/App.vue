<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";

const state = new Vue({
  data: {
    stateNum: 1,
    stateA: "a",
  },
});

export default {
  provide: {
    bus: state,
  },
};
</script>

<style lang="less">
</style>
