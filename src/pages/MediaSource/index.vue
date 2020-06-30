<template>
  <div>
    <video ref="videoVNode" controls></video>
  </div>
</template>

<script>
import video from '@common/js/mediaSourceVideo'
import videoUrl from './frag_bunny.mp4'
export default {
  mounted() {
    this.$nextTick().then(()=>{
      const video = new Video(this.$refs.video, videoUrl)
      video.play()
    })
  },
}
</script>

<style lang="less" scoped>
video{
  width: 80%;
}
</style>
