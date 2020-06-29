<template>
  <div id="Vant-Json-Form">
    <div class="form">
      <json-form :config="form_config" :form="form">
        <span>slot 测试</span>
      </json-form>
    </div>
    <div class="button" @click="submit">提交</div>
  </div>
</template>

<script>
import Vue from "vue";
import jsonForm from "@components/json-from";

// test
import testButton from '../components/json-from/test-button';
export default {
  components: { jsonForm },
  data() {
    return {
      form_config: {
        name: {
          type: "field",
          props: {
            label: "姓名",
            placeholder: "请输入姓名"
          },
          slots:{
            button: testButton
          }
        },
        idcard: {
          type: "field",
          props: {
            label: "身份证",
            placeholder: "请输入身份证"
          },
          ifRender: form => {
            return form.name;
          }
        },
        relation: {
          type: "radio",
          props: {
            label: "与本人关系",
            direction: "horizontal",
            "icon-size": "15px",
            disabled: false
          },
          ifDiasbled: form => {
            return !form.name;
          },
          options: [
            {
              key: 0,
              value: "本人",
              props: {
                disabled: false
              },
              ifDiasbled: form => {
                return form.name == "123";
              }
            },
            { key: 1, value: "亲属" },
            { key: 2, value: "朋友" }
          ]
        },
        words: {
          type: "checkbox",
          props: {
            label: "复选",
            direction: "horizontal",
            "icon-size": "15px"
          },
          options: [
            { key: 0, value: "a" },
            { key: 1, value: "b" },
            { key: 2, value: "c" },
            { key: 3, value: "d" }
          ]
        },
        city: {
          type: "picker",
          props: {
            label: "城市"
          },
          columns: [
            { key: "hz", value: "杭州" },
            { key: "nb", value: "宁波" },
            { key: "wz", value: "温州" },
            { key: "jx", value: "嘉兴" },
            { key: "hz", value: "湖州" }
          ],
          format: function(result) {
            return result.value;
          }
        },
        time: {
          type: "picker",
          props: {
            label: "时间"
          },
          columns: [
            {
              values: ["周一", "周二", "周三", "周四", "周五"]
            },
            // 第二列
            {
              values: ["上午", "下午", "晚上"],
              defaultIndex: 1
            }
          ],
          format: function(result) {
            // 用与结果展示
            return result[0] + "-" + result[1];
          }
        },
        date: {
          type: "date",
          props: {
            label: "日期",
            type: "date",
            "min-date": new Date()
          },
          format: function(result){
            return result ? result.getTime() : '时间'
          }
        }
      },
      form: {
        name: undefined,
        idcard: undefined,
        relation: 0,
        words: [1, 2],
        city: undefined,
        date: undefined
      }
    };
  },
  methods: {
    submit: function() {
      console.log(this.form);
    }
  }
};
</script>

<style lang="less" scoped>
#Vant-Json-Form {
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  .form {
    width: 300px;
    border-radius: 8px;
    box-shadow: rgba(153, 153, 153, 0.12) 0 2px 16px 8px;
    padding: 20px 16px;
  }
  .button {
    width: 250px;
    margin-top: 15px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 8px;
    font-size: 18px;
    border: 1px solid #e5e5e5;
  }
}
</style>
