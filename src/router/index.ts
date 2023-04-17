import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FavouritesView from "../views/FavouritesView.vue";
import SearchView from "../views/SearchView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/favourites",
      name: "Favourites",
      component: FavouritesView,
    },
    {
      path: "/search",
      name: "Search",
      component: SearchView,
    },
  ],
});

export default router;
