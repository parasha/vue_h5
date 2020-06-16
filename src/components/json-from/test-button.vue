<template>
  <div @click='click'>
    按钮
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  methods: {
    click: function(){
      console.log('click');
    }
  }
}
</script>

<style lang="less" scoped>
div{
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: 1px solid #e5e5e5;
  border-radius: 20px;
}
</style>
