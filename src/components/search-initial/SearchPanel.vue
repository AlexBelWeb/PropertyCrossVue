<template>
  <section class="hero is-light is-medium">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title is-size-1">Search</h1>
        <h2 class="subtitle is-size-5 has-text-weight-light">
          Use the form below to search for houses to buy.
          <br />You can search by place-name or click 'My location', to search
          in your current location!
        </h2>
        <div class="columns is-centered">
          <div class="column is-12-mobile is-8-tablet is-5-desktop">
            <input
              v-model="query"
              class="input is-rounded"
              type="text"
              placeholder="Input your location"
            />
          </div>
        </div>
        <div class="buttons are-medium is-centered">
          <button class="button is-success" @click="handleGoButtonClick">
            GO
          </button>
          <button class="button is-info" @click="handleMyLocationButtonClick">
            MY LOCATION
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SearchPanel",
  data() {
    return {
      query: ""
    };
  },
  methods: {
    ...mapActions({
      getByName: "locations/getLocationsByName",
      getByCoords: "locations/getLocationsByCoords"
    }),
    handleGoButtonClick() {
      const key = this.query
        .split(/[\s,]+/)
        .join("_")
        .toLowerCase();
      this.getByName(key);
    },
    handleMyLocationButtonClick() {
      const coords = { lat: 0, long: 0 };
      window.navigator.geolocation.getCurrentPosition(position => {
        coords.lat = position.coords.latitude;
        coords.long = position.coords.longitude;
        this.getByCoords(coords);
      });
    }
  }
};
</script>

<style></style>
