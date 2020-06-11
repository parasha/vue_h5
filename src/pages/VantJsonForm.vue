<template>
  <div id="Vant-Json-Form">
    <div class="form">
      <json-form :config="form_config" :form="form"></json-form>
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
        username: {
          type: "field",
          props: {
            label: "用户名",
            rules: [{ required: true, message: "请填写用户名" }]
          },
          events: {
            focus: function() {
              console.log("focus");
            }
          }
        },
        password: {
          type: "field",
          props: {
            label: "密码",
            type: "password",
            disabled: false
          },
          ifDiasbled: function(form) {
            if (form.username && form.username.length > 7) {
              return true;
            }
          }
        },
        message: {
          type: "field",
          props: {
            rows: "1",
            autosize: true, // 这里有一些参数不好使
            label: "留言",
            type: "textarea",
            placeholder: "请输入留言",
            "show-word-limit": true
          },
          ifRender: function(form) {
            const { username } = form;
            return username && username.length > 5;
          }
        }
      },
      form: {
        username: undefined,
        password: 123321,
        message: undefined
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
