<template>
  <div id="form-page">
    <div class="form">
      <config-form :config="form_config" :form="form"></config-form>
      <div class="button" @click="submit">提交</div>
    </div>
  </div>
</template>

<script>
import configForm from "@components/simple-form";
export default {
  components: {
    configForm
  },
  data() {
    return {
      form_config: {
        username: {
          name: "账号",
          type: "input"
        },
        password: {
          name: "密码",
          type: "input",
          attrs: {
            type: "password"
          }
        },
        relation: {
          name: "关系",
          type: "radio",
          options: [
            { key: 0, value: "本人" },
            { key: 1, value: "父母" },
            { key: 2, value: "子女" },
            { key: 3, value: "其他" }
          ]
        },
        birthday: {
          name: "出生日期",
          type: "date",
          ifRender: function(form){
            return form.relation > 0
          }
        }
      },
      form: {
        username: "ningzhenyu",
        password: 123321,
        relation: 0,
        birthday: new Date()
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
#form-page {
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
    margin-top: 15px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    border-radius: 8px;
    font-size: 18px;
    border: 1px solid #e5e5e5;
  }
}
</style>
