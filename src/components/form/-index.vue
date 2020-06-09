<template>
  <div class="config-form">
    <test></test>
  </div>
</template>

<script>
import test from "./components/test";
/**
 * form type: input password radio date select
 */
export default {
  props: {
    config: {
      type: Array,
      required: true
    }
  },
  components: {
    test
  },
  data() {
    return {};
  },      

  methods: {}
};
</script>

<style lang="less" scoped>
</style>
