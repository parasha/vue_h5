<script>
import mixin from "../../utils/form-item-mixin";
import assign from "../../utils/assign";

import vueMask from "@components/mask";
import { Icon, Picker } from "vant";
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
    let { props, columns, events } = this.form_item_config;
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
            innerHTML: props.label
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
            h(Picker, {
              props: assign(props, {
                columns: columns,
                "show-toolbar": true,
                "value-key": "value"
              }),
              on: {
                confirm: e => {
                  this.hide();
                  console.log(e);
                  this.form[this.form_item_key] = e.key;
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