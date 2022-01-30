<template>
  <div>
    <h1>Clicked video's ID = {{ this.$route.query.id }}</h1>
  </div>
</template>

<script>
export default {
  name: "WatchPage",
  mounted() {
    console.log(this.$route.query)
  }
}
</script>

<style scoped>

</style>