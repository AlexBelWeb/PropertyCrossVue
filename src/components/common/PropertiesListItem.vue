<template>
  <div class="card animated slideInUp faster">
    <router-link
      :to="{
        name: 'property',
        params: { placeName: property.location.placeName, id: property.id }
      }"
    >
      <div class="card-image">
        <figure class="image">
          <img
            :src="property.imgUrl"
            class="card-img-top"
            :alt="property.title"
          />
        </figure>
      </div>
    </router-link>
    <div class="card-content">
      <div class="media-content">
        <h5 class="title is-size-5">{{ property.title | truncate(30) }}</h5>
        <h6 class="subtitle is-size-6">{{ property.priceFormatted }}</h6>
      </div>
    </div>
    <div class="card-footer">
      <div class="card-footer-item has-text-centered">
        <small class="has-text-weight-light is-size-7"
          >Updated: {{ property.updatedInDaysFormatted }}</small
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PropertyListItem",
  props: {
    property: { type: Object, required: true }
  }
};
</script>

<style></style>
