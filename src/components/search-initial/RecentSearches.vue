<template>
  <div class="columns">
    <div class="column has-text-centered animated slideInUp faster">
      <h3 class="title is-size-4">Recent searches</h3>
      <div v-if="recents.length" class="list is-hoverable">
        <router-link
          v-for="query of recents"
          :key="query.placeName"
          :to="{
            name: 'properties',
            params: { placeName: query.placeName }
          }"
          class="list-item"
          >{{ query.longTitle }}</router-link
        >
      </div>
      <div v-else class="list-group-item text-center">No recent searches</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "RecentSearches",
  computed: {
    ...mapGetters({
      recents: "recents/items"
    })
  }
};
</script>

<style></style>
