<template>
  <fragment>
    <div class="columns has-text-centered">
      <div class="column animated slideInUp faster">
        <h3 class="title is-size-4">Available locations</h3>
      </div>
    </div>
    <div class="list is-hoverable animated slideInUp faster">
      <a
        v-for="location of locations"
        :key="location.id"
        class="list-item has-text-centered"
        @click.prevent="handleLocationClick(location)"
        >{{ location.longTitle }}</a
      >
    </div>
  </fragment>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "LocationsList",
  computed: {
    ...mapState("locations", {
      locations: "items"
    })
  },
  methods: {
    ...mapActions({
      addLocationToRecents: "recents/addLocationToRecents"
    }),
    handleLocationClick(location) {
      this.addLocationToRecents(location);
      this.$router.push({
        name: "properties",
        params: { placeName: location.placeName }
      });
    }
  }
};
</script>

<style></style>
