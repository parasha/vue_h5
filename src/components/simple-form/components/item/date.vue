<template>
  <div class="form-item-date">
    <span class="date" @click="mask_show = true">{{foramt_date}}</span>
    <vue-mask :show="mask_show">
      <van-datetime-picker
        :value="form[form_item_key]"
        class="bottom"
        type="date"
        title="选择年月日"
        @confirm="confirm"
        @cancel="mask_show = false"
      />
    </vue-mask>
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
    return {
      mask_show: false
    };
  },
  computed: {
    foramt_date: function() {
      const date = this.form[this.form_item_key];
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }
  },
  methods: {
    confirm: function(value) {
      this.form[this.form_item_key] = value;
      this.mask_show = false;
    }
  }
};
</script>

<style lang="less" scoped>
</style>
