<template>
  <article class="message is-danger animated slideInUp faster">
    <div class="message-header">
      <p class="is-capitalized">Error</p>
    </div>
    <div class="message-body has-text-centered">
      <slot></slot>
    </div>
  </article>
</template>

<script>
export default {
  name: "ErrorAlert"
};
</script>

<style></style>
