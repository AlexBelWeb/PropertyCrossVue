<template>
  <section class="section">
    <div class="container is-fluid">
      <div class="has-text-centered">
        <h1 v-if="location" class="title is-size-1">
          {{ location.longTitle }}
        </h1>
        <h2 v-if="properties" class="subtitle is-size-5">
          Displaying {{ properties.length }} of {{ totalResults }} items.
        </h2>
        <properties-list :properties="properties"></properties-list>
        <spinner v-if="loading"></spinner>
        <div :class="['pageloader', { 'is-active': !properties }]">
          <span class="title">Loading...</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PropertiesList from "../components/common/PropertiesList.vue";
import Spinner from "../components/common/Spinner";

import { mapActions, mapState } from "vuex";
export default {
  name: "PropertiesPage",
  components: {
    PropertiesList,
    Spinner
  },
  props: {
    placeName: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState("properties", [
      "properties",
      "loading",
      "hasMore",
      "totalResults",
      "errorMessage",
      "location",
      "page"
    ])
  },
  watch: {
    $route: function() {
      this.resetProperties();
      this.loadProperties({ placeName: this.placeName, page: this.page + 1 });
    }
  },
  created() {
    this.loadProperties({ placeName: this.placeName, page: this.page + 1 });
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
    this.resetProperties();
  },
  methods: {
    ...mapActions({
      loadProperties: "properties/getProperties",
      resetProperties: "properties/resetProperties"
    }),
    onScroll: function() {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 20 &&
        !this.loading &&
        this.hasMore
      ) {
        this.loadProperties({ placeName: this.placeName, page: this.page + 1 });
      }
    }
  }
};
</script>

<style></style>
