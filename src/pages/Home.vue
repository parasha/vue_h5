<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="logo" />
    <infinite-scroll class="scroll">
      <HelloWorld msg="Welcome to Your Vue.js App" />
      <HelloWorld msg="infinite scroll test" />
    </infinite-scroll>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import infiniteScroll from "@components/infinite-scroll/index";
export default {
  name: "home",
  components: {
    HelloWorld,
    infiniteScroll
  }
};
</script>

<style lang="less" scoped>
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo {
    flex-shrink: 0;
  }
  .scroll {
    flex: 1;
  }
}
</style>
