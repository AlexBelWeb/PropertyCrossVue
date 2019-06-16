<template>
  <nav class="navbar is-dark">
    <div class="navbar-brand">
      <router-link class="navbar-item" :to="{ name: 'search-initial' }"
        >PropertyCrossVue</router-link
      >
      <a
        role="button"
        :class="['navbar-burger', 'burger', { 'is-active': isOpen }]"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar-collapsed"
        @click="isOpen = !isOpen"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div
      id="navbar-collapsed"
      :class="['navbar-menu', { 'is-active': isOpen }]"
    >
      <div class="navbar-end">
        <div class="navbar-item">
          <router-link
            class="button is-info my-2 my-sm-0"
            :to="{ name: 'favorites' }"
            >Faves</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
  data() {
    return {
      isOpen: false
    };
  }
};
</script>
