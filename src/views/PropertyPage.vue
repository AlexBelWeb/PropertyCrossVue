<template>
  <fragment>
    <div v-if="!property" class="pageloader is-active">
      <span class="title">Loading...</span>
    </div>
    <fragment v-else>
      <section class="hero is-light">
        <div class="hero-body">
          <div class="columns">
            <div class="column is-12-mobile is-4-tablet has-text-centered">
              <figure class="image">
                <img :src="property.imgUrl" :alt="property.title" />
              </figure>
            </div>
            <div class="column is-12-mobile is-8-tablet">
              <h1 class="title is-size-1">{{ property.title }}</h1>
              <h2 class="subtitle is-size-2">
                {{ property.location.longTitle }}
              </h2>
              <p class="has-text-weight-light is-size-5">
                {{ property.summary }}
              </p>
              <h3>
                <span class="tag is-info is-medium mt1">{{
                  property.priceFormatted
                }}</span>
              </h3>
              <br />
              <p class="has-text-weight-light is-size-6">
                Updated: {{ property.updatedInDaysFormatted }}
              </p>
              <button
                :class="[
                  'button is-rounded mt1',
                  { 'is-success': isFavorite, 'is-outlined': !isFavorite }
                ]"
                @click="toggleFavorites"
              >
                <span class="icon">
                  <i class="fa fa-heart"></i>
                </span>
                <span class="ml-2">Favorites</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <table class="table is-fullwidth is-bordered is-striped">
            <tbody>
              <tr>
                <td>Bathrooms</td>
                <td class="has-text-centered">{{ property.bathroomNumber }}</td>
              </tr>
              <tr>
                <td>Bedrooms</td>
                <td class="has-text-centered">{{ property.bedroomNumber }}</td>
              </tr>
              <tr>
                <td>Car spaces</td>
                <td class="has-text-centered">{{ property.carSpaces }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </fragment>
  </fragment>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  name: "PropertyPage",
  props: {
    placeName: { type: String, required: true },
    id: { type: String, required: true }
  },
  computed: {
    ...mapGetters({
      property: "properties/property"
    }),
    ...mapState("favorites", {
      favorites: "items"
    }),
    isFavorite: function() {
      return this.favorites.hasOwnProperty(this.property.id);
    }
  },
  watch: {
    $route: function() {
      this.loadProperty({ placeName: this.placeName, id: this.id });
    }
  },
  created() {
    this.loadProperty({ placeName: this.placeName, id: this.id });
  },
  beforeDestroy() {
    this.resetProperty();
  },
  methods: {
    ...mapActions({
      loadProperty: "properties/getProperty",
      resetProperty: "properties/resetProperty",
      addToFavorites: "favorites/addToFavorites",
      removeFromFavorites: "favorites/removeFromFavorites"
    }),
    toggleFavorites() {
      if (!this.isFavorite) {
        this.addToFavorites(this.property);
      } else {
        this.removeFromFavorites(this.property);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.mt1 {
  margin-top: 1rem;
}
</style>
