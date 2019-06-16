import Vue from "vue";
import Vuex from "vuex";
import favorites from "./modules/favorites";
import recents from "./modules/recents";
import locations from "./modules/locations";
import properties from "./modules/properties";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    favorites,
    recents,
    locations,
    properties
  },
  strict: debug
});
