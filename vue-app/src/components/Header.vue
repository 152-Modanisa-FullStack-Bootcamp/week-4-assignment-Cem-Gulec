<template>
  <div class="header-container">
    <button
        id="favorites-button"
        @click="RouteToFavorites">
      Favorites</button>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    RouteToFavorites(){
      this.$router.push("/favorites/bootcamp")
    }
  }
}
</script>

<style scoped>
.header-container{
  display: flex;
  background-color: #9b9e9c;
  width: 1600px;
  justify-content: space-between;
  padding: 10px 20px;
  margin-top: 50px;
}
#favorites-button{
  margin-left: auto;
}
</style>