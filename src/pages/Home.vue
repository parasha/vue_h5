<template>
  <layout>
    <video ref="videoVNode" controls></video>
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
  created: function(){
    this.$store.commit('changeTab','home');
    this.$nextTick().then(()=>{
      const video = new Video(this.$refs.videoVNode, videoUrl)
      video.play()
    })
  },
};
</script>

<style lang="less" scoped>
video{
  display: block;
  width: 80%;
  margin: 20px auto;
}
</style>
