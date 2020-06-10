<script>
/**
 * 有关 render 的用法，可以参考这个： https://www.jianshu.com/p/5539c5c7858f
 * 整个表单的思路来自： https://zhuanlan.zhihu.com/p/48241645
 */
import formItem from "./components/formItem";

function formInit(h, config, form) {
  let arr = [];
  if (config) {
    for (const key in config) {
      if (config.hasOwnProperty(key)) {
        const element = config[key];
        arr.push(
          h(formItem, {
            props: { form_item_config: element, form, form_item_key: key }
          })
        );
      }
    }
    return arr;
  } else {
    return arr;
  }
}

export default {
  components: { formItem },
  props: {
    /**
     * form type: input password radio date select
     */
    config: {
      type: Object,
      required: true
    },
    form: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {},
  render(h) {
    return h(
      "div",
      {
        class: "config-form"
      },
      formInit(h, this.config, this.form)
    );
  }
};
</script>

<style lang="less" scoped>
</style>
