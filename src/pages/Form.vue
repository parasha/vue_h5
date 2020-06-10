<template>
  <div id="form-page">
    <div class="form">
      <config-form :config="form_config" :form='form'></config-form>
    </div>
  </div>
</template>

<script>
import configForm from "@components/form";
export default {
  components: {
    configForm,
  },
  data() {
    return {
      form_config:{
        username:{
          name: '账号',
          type: 'input',
        },
        password:{
          name: '密码',
          type: 'password'
        }
      },
      form:{
        username: 'ningzhenyu',
        password: 123321,
      }
    };
  },

  methods: {}
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
}
</style>
