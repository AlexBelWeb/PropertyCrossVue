<template>
  <div id="app">
    <app-navbar />
    <router-view />
  </div>
</template>

<script>
import AppNavbar from "./components/common/AppNavbar.vue";

export default {
  name: "App",
  components: {
    AppNavbar
  }
};
</script>

<style></style>
