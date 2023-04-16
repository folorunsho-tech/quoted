<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import QouteCard from "@/components/QouteCard.vue";
import { useRoute } from "vue-router";
import { ref } from "vue";
const route = useRoute();
const showHeaderQoute = ref(route.fullPath === "/");
// console.log(route.name);
</script>

<template>
  <header class="bg-teal-950 w-full p-4 rounded-br-3xl space-y-6">
    <div class="flex items-center justify-between">
      <h1 class="text-4xl font-bold text-white">Quoted</h1>
      <font-awesome-icon
        icon="fa-solid fa-magnifying-glass"
        class="text-white text-2xl"
      />
    </div>
    <nav class="flex items-center gap-3">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/favourites">Favourites</RouterLink>
    </nav>
    <section
      v-show="showHeaderQoute"
      class="bg-teal-900 p-3 pl-0 space-y-3 rounded-br-3xl"
    >
      <h2 class="text-2xl pl-5 font-bold text-white">
        Your daily dose of inspiration
      </h2>
      <QouteCard
        qoute="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      voluptates, quod, quia, voluptate quae voluptatem quibusdam quos
      accusantium quas dolorum voluptatum. Quisquam, quae. Quisquam, quae.
      Quisquam, quae. Quisquam, quae."
        author="Folorunsho Ibrahim"
        :is-header="true"
      />
    </section>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  max-height: 30rem;
}
.router-link-exact-active {
  color: #f56565;
}
</style>
