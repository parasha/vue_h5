<template>
  <div class="form-item-date">
    
  </div>
</template>

<script>
import Vue from "vue";
import { DatetimePicker } from "vant";
Vue.use(DatetimePicker);

export default {
  props: {
    form_item_config: {
      type: Object,
      required: true
    },
    form: {
      type: Object,
      required: true
    },
    form_item_key: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang="less" scoped>
</style>
