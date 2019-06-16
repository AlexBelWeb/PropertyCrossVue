<template>
  <div class="columns is-multiline">
    <div
      v-for="property of properties"
      :key="property.id"
      class="column is-12-mobile is-4-tablet is-3-desktop"
    >
      <properties-list-item :property="property"></properties-list-item>
    </div>
  </div>
</template>

<script>
import PropertiesListItem from "./PropertiesListItem.vue";
export default {
  name: "PropertiesList",
  components: {
    PropertiesListItem
  },
  props: {
    properties: { type: Array, required: true }
  }
};
</script>

<style></style>
