<template>
  <layout>
    <video ref="videoVNode" controls></video>
    <hr>
    <p>stateNum: {{bus.stateNum}}</p>
    <button @click='injectHandle'>+1</button>
  </layout>
</template>

<script>
import layout from "@components/layout";
import Video from '@common/js/mediaSourceVideo'
import videoUrl from '../assets/frag_bunny.mp4'

export default {
  components: {
    layout
  },
  inject: ['bus'],
  created: function(){
    this.$store.commit('changeTab','home');
    this.$nextTick().then(()=>{
      const video = new Video(this.$refs.videoVNode, videoUrl)
      video.play()
    })
  },
  methods: {
    injectHandle(){
      this.bus.stateNum += 1;
    }
  }
};
</script>

<style lang="less" scoped>
video{
  display: block;
  width: 80%;
  margin: 20px auto;
}
</style>
