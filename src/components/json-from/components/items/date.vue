<script>
import mixin from "../../utils/form-item-mixin";
import assign from "../../utils/assign";

import vueMask from "@components/mask";
import { Icon, DatetimePicker } from "vant";
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
        style: {
          "align-items": "center",
          "justify-content": "space-between"
        },
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
        h("div", {
          domProps: {
            innerHTML: (() => {
              if (
                format &&
                typeof format == "function" &&
                this.form[this.form_item_key]
              ) {
                return format(this.form[this.form_item_key]) || props.label;
              } else {
                return props.label;
              }
            })()
          }
        }),
        h(Icon, {
          props: {
            name: "arrow-down"
          }
        }),
        h(
          vueMask,
          {
            props: {
              show: this.is_show,
              position: "bottom"
            }
          },
          [
            h(DatetimePicker, {
              props: assign(props, {
                "show-toolbar": true,
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
            })
          ]
        )
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