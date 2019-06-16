<template>
  <fragment>
    <search-panel />
    <service-panel />
  </fragment>
</template>

<script>
import SearchPanel from "../components/search-initial/SearchPanel.vue";
import ServicePanel from "../components/search-initial/ServicePanel.vue";
import { mapActions } from "vuex";
export default {
  name: "SearchInitialPage",
  components: { SearchPanel, ServicePanel },
  beforeDestroy() {
    this.resetSearch();
  },
  methods: {
    ...mapActions({
      resetSearch: "locations/resetSearch"
    })
  }
};
</script>

<style></style>
