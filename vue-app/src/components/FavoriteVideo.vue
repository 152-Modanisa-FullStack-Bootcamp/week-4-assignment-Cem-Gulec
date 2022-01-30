<template>
  <div class="video-container">
    <img
        id="video-image"
        :src="imagePath"
        @mouseover="MouseOver"
        @mouseleave="MouseLeave"
        @click="RouteToVideo">
    <div class="description-container">
      <span>{{video.title}}</span>
      <span>{{video.viewCount}} views &emsp; {{video.publishDateInMonth}} months ago</span>
      <div class="owner-container">
        <img
            id="owner-image"
            :src="video.ownerImage">
        <span>{{video.ownerName}}</span>
      </div>
      <span>{{video.description}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "FavoriteVideo",
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
    MouseOver() {
      this.imagePath = this.video.hoverImage;
    },
    MouseLeave() {
      this.imagePath = this.video.coverImage;
    }
  }
}
</script>

<style scoped>
.video-container{
  width: 1400px;
  height: 200px;
  margin-right: 40px;
  margin-bottom: 100px;
  display: flex;
}
.description-container{
  display: flex;
  flex-direction: column;
  margin-top: 5px;
}
.owner-container{
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  margin-bottom: 5px;
}
#video-image{
  width: 360px;
  height: 200px;
}
#owner-image{
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 10px;
}
</style>