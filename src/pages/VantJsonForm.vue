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
import jsonForm from "@components/json-from";
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
          }
        },
        idcard: {
          type: "field",
          props: {
            label: "身份证",
            placeholder: "请输入身份证"
          }
        },
        relation: {
          type: "radio",
          props: {
            label: "与本人关系",
            direction: "horizontal",
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
                return form.name == '123';
              }
            },
            { key: 1, value: "亲属" },
            { key: 2, value: "朋友" }
          ]
        }
      },
      form: {
        name: undefined,
        idcard: undefined,
        relation: 0
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
