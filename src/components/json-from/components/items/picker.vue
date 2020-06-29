<script>
import mixin from "../../utils/form-item-mixin";
import assign from "../../utils/assign";
import { VAN_CEIL_STYLE } from "./base";
import vueMask from "@components/mask";
import { Icon, Picker } from "vant";

function pickerActiveValueInit(h, props, format) {
  return h("div", {
    domProps: {
      innerHTML:
        format && typeof format == "function" && this.form[this.form_item_key]
          ? format(this.form[this.form_item_key]) || props.label
          : props.label
    }
  });
}

function maskInit(h, props, columns) {
  return h(
    vueMask,
    {
      props: {
        show: this.is_show,
        position: "bottom"
      }
    },
    [pickerInit.call(this, h, props, columns)]
  );
}

function pickerInit(h, props, columns) {
  return h(Picker, {
    props: assign(props, {
      columns: columns,
      "show-toolbar": true,
      "value-key": "value"
    }),
    on: {
      confirm: e => {
        this.hide();
        this.form[this.form_item_key] = e;
      },
      cancel: e => {
        this.hide();
      }
    }
  });
}

export default {
  mixins: [mixin],
  data: () => {
    return {
      is_show: false
    };
  },
  computed: {
    active_option_value: () => {
      let result = undefined;
    }
  },
  methods: {
    show: function() {
      this.is_show = true;
    },
    hide: function() {
      this.is_show = false;
    }
  },
  render(h) {
    let { props, columns, events, format } = this.form_item_config;
    props = props || {};
    events = events || {};
    return h(
      "div",
      {
        class: "van-cell",
        style: VAN_CEIL_STYLE,
        on: {
          click: () => {
            this.show();
            if (events.click && typeof events.click == "function") {
              events.click();
            }
          }
        }
      },
      [
        pickerActiveValueInit.call(this, h, props, format),
        h(Icon, {
          props: {
            name: "arrow-down"
          }
        }),
        maskInit.call(this, h, props, columns)
      ]
    );
  }
};
</script>

<style lang="less" scoped>
.van-picker {
  border-radius: 4px 4px 0 0;
  overflow: hidden;
}
</style>