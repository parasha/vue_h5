<script>
import input from "./input/input";
function createFormItemName(h, form_item_config) {
  return h("div", {
    class: "form-item-name",
    domProps: {
      innerHTML: form_item_config.name
    }
  });
}

function createFormItemInput(h, form_item_config, form, form_item_key) {
  if (form_item_config.type == "input" || form_item_config.type == "password") {
    return h(input, { props: { form_item_config, form, form_item_key } });
  }
}
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
  methods: {},
  render(h) {
    console.log("render run");
    return h(
      "div",
      {
        class: "form-item"
      },
      // 这里不能这么写
      [
        createFormItemName(h, this.form_item_config),
        createFormItemInput(
          h,
          this.form_item_config,
          this.form,
          this.form_item_key
        )
      ]
    );
  }
};
</script>

<style lang="less" scoped>
.form-item {
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #666666;
  margin-bottom: 10px;
  border-bottom: 1px solid #e5e5e5;
  padding: 5px 5px 10px;
  .form-item-name {
    width: 60px;
    flex-shrink: 0;
    margin-right: 5px;
  }
  .form-item-input {
    flex: 1;
  }
}
</style>
