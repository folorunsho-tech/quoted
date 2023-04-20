import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SearchView from "../views/SearchView.vue";
import QuoteView from "../views/QuoteView.vue";
import CategoriesView from "../views/CategoriesView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/categories",
      name: "Categories",
      component: CategoriesView,
    },
    {
      path: "/q/:quote",
      alias: "/quote/:quote",
      name: "Quote",
      component: QuoteView,
    },
    {
      path: "/search",
      name: "Search",
      component: SearchView,
    },
  ],
});

export default router;
