import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/faves",
      name: "favorites",
      component: () =>
        import(/* webpackChunkName: "favorites" */ "./views/FavoritesPage.vue")
    },
    {
      path: "/",
      name: "search-initial",
      component: () =>
        import(/* webpackChunkName: "search-initial" */ "./views/SearchInitialPage.vue")
    },
    {
      path: "/:placeName/properties",
      name: "properties",
      component: () =>
        import(/* webpackChunkName: "properties" */ "./views/PropertiesPage.vue"),
      props: true
    },
    {
      path: "/:placeName/properties/:id",
      name: "property",
      component: () =>
        import(/* webpackChunkName: "property" */ "./views/PropertyPage.vue"),
      props: true
    }
  ],
  mode: "hash"
});
