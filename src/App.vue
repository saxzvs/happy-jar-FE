<template>
  <Navigation/>
  <router-view/>
</template>

<script>
import Navigation from "./components/App/Navigation";

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
@import "style/reset.scss";
@import "style/color.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
