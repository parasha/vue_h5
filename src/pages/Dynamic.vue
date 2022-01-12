<template>
  <div>
    动态加载远程组件：
    <component :is="component" v-if="component" />
  </div>
</template>

<script>
/**
 * webpakc.output.library
 */

export default {
  data() {
    return { component: null };
  },
  created() {
    // https://localhost:8005/dynamic.02855b.js
    const script = document.createElement('script');
    script.onload = () => {
      console.log('script onload:', window.MyComponent);
      this.component = window.MyComponent.default.Dynamic;
    };
    script.src = 'https://localhost:8005/dynamic.02855b.js';
    document.body.appendChild(script);
  },
};
</script>

<style></style>
