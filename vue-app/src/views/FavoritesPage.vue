<template>
  <div>
    <Header/>
    <div id="video-list-container">
      <FavoriteVideo
          v-for="video in filteredVideos"
          :video="video"
          :key="video.id">
      </FavoriteVideo>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import FavoriteVideo from "@/components/FavoriteVideo";
import axios from "axios";
import {mapGetters} from "vuex";
export default {
  name: "FavoritesPage",
  components: {
    FavoriteVideo,
    Header
  },
  computed:{
    ...mapGetters({
      videos: "getVideoInfo",
      filteredVideos: "getFavoriteVideoInfo"
    })
  },
  async mounted(){
    const _path = "https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos";
    const { data } = await axios.get(_path);
    this.videos = data;
    console.log(data);
  }
}
</script>

<style scoped>

</style>