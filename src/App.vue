<template>
  <div id="app">
    <router-view>
    </router-view>
  </div>
</template>

<script>
export default {

  components: {
      },
    created() {
      console.log('created calisti ')
        this.$store.dispatch("getAllCountries")
    }
}
</script>

<style>
#app {

}
</style>
