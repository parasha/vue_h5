<template>
  <div class="form-item-radio">
    <div
      class="form-item-radio-option"
      :class="{'form-item-radio-active': form[form_item_key] == item.key}"
      v-for="(item,index) of form_item_config.options"
      :key="form_item_key + index"
      @click="select(item.key)"
    >{{item.value}}</div>
  </div>
</template>
<script>
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
  methods: {
    select: function(key) {
      this.form[this.form_item_key] = key;
    }
  }
};
</script>  
<style lang="less" scoped>
.form-item-radio {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  .form-item-radio-option {
    flex: 1;
    border-radius: 4px;
    border: 1px solid #e5e5e5;
    text-align: center;
    height: 30px;
    line-height: 28px;
    margin: 0 4px;
  }
  .form-item-radio-option:first-of-type {
    margin-left: 0;
  }
  .form-item-radio-option:last-of-type {
    margin-right: 0;
  }
  .form-item-radio-active {
    background-color: #00b7be;
    border: none;
    line-height: 30px;
    color: #ffffff;
  }
}
</style> 
