import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faStar,
  faShareNodes,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { createPinia } from "pinia";
import "./assets/main.css";
const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
library.add(faStar, faShareNodes, faMagnifyingGlass);
app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");
