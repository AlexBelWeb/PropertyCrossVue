<template>
  <section class="section">
    <div v-if="!favorites" class="pageloader is-active">
      <span class="title">Loading...</span>
    </div>
    <div v-else class="container is-fluid">
      <div class="has-text-centered">
        <h1 class="title is-size-1">Favorites</h1>
        <h2 class="subtitle is-size-5">
          Total {{ favorites.length }} items in favorites.
        </h2>
        <properties-list :properties="favorites"></properties-list>
      </div>
    </div>
  </section>
</template>

<script>
import PropertiesList from "../components/common/PropertiesList.vue";
import { mapGetters } from "vuex";
export default {
  name: "FavoritesPage",
  components: {
    PropertiesList
  },
  computed: {
    ...mapGetters({
      favorites: "favorites/favoritesToArray"
    })
  }
};
</script>

<style></style>
