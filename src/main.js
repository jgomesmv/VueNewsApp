import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

//if no js file name occurs then it will look for index.js.
require("./components/news/news");
require("./components/global/global");

new Vue({
  render: h => h(App)
}).$mount("#app");
