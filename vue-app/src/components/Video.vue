<template>
  <div class="video-container">
    <img
        class="video-image"
        :src="imagePath"
        @mouseover="MouseOver"
        @mouseleave="MouseLeave"
        @click="RouteToVideo">
    <div class="description-container">
      <img
          id="owner-image"
          :src="video.ownerImage">
      <div>
        <span>{{video.title}}<br></span>
        <span>{{video.ownerName}}<br></span>
        <span>{{video.viewCount}} views&emsp;</span>
        <span>{{video.publishDateInMonth}} months ago</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Video",
  props: {
    video: Object
  },
  data(){
    return {
      imagePath: this.video.coverImage
    }
  },
  methods: {
    RouteToVideo() {
      const path = "/watch?id=" + this.video.id;
      this.$router.push(path)
    },
    MouseOver(){
      this.imagePath = this.video.hoverImage;
    },
    MouseLeave(){
      this.imagePath = this.video.coverImage;
    }
  }
}
</script>

<style scoped>
.video-container{
  width: 360px;
  height: 200px;
  margin-right: 40px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
}
.description-container{
  display: flex;
  margin-top: 5px;
}
.video-image{
  width: 100%;
  height: 100%;
}
#owner-image{
  border-radius: 50%;
  width: 36px;
  height: 36px;
  margin-right: 10px;
}
</style>