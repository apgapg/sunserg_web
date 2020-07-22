import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import Vuex from "vuex";
import store from "./store/index";
//import VueGAPI from 'vue-gapi'

Vue.config.productionTip = false;
Vue.use(Vuex);

// var CLIENT_ID =
//   "851934031431-c5gtr9vlli9090i6k209tbi6ekcjgf3p.apps.googleusercontent.com";
// var API_KEY = "AIzaSyB_FT7QtN6wNjCZIbD42qenIdBSXRHdP10";

// // Array of API discovery doc URLs for APIs used by the quickstart
// var DISCOVERY_DOCS = [
//   "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"
// ];

// // Authorization scopes required by the API; multiple scopes can be
// // included, separated by spaces.
// var SCOPES = "https://www.googleapis.com/auth/drive.metadata.readonly";

// // create the 'options' object
// const apiConfig = {
//   apiKey: API_KEY,
//   clientId: CLIENT_ID,
//   discoveryDocs: DISCOVERY_DOCS,
//   // see all available scopes here: https://developers.google.com/identity/protocols/googlescopes'
//   scope: SCOPES,

//   // works only with `ux_mode: "prompt"`
//   refreshToken: true,
// }

// Vue.use(VueGAPI, apiConfig)

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
