import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Fragment from "vue-fragment";

Vue.use(Fragment.Plugin);

Vue.filter("truncate", function(value, maxLength) {
  return value.length > maxLength
    ? value.slice(0, maxLength - 3) + "..."
    : value;
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
