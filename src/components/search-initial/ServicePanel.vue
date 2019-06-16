<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-12-mobile is-6-tablet">
          <recent-searches v-if="searchStatus === 'init'" />
          <locations-list v-else-if="searchStatus === 'success'" />
          <error-alert v-else-if="searchStatus === 'error'">
            {{ errorMessage }}
          </error-alert>
          <spinner v-else-if="searchStatus === 'loading'" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RecentSearches from "./RecentSearches.vue";
import LocationsList from "./LocationsList.vue";
import ErrorAlert from "../common/ErrorAlert.vue";
import Spinner from "../common/Spinner.vue";

import { mapState } from "vuex";

export default {
  name: "ServicePanel",
  components: {
    RecentSearches,
    LocationsList,
    ErrorAlert,
    Spinner
  },
  computed: {
    ...mapState("locations", ["searchStatus", "errorMessage"])
  }
};
</script>

<style></style>
