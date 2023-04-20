<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="bg-teal-950 w-full p-4 flex flex-col gap-3">
    <div class="flex items-center justify-between">
      <h1 class="text-4xl font-bold text-white">Quoted</h1>
      <RouterLink to="/search">
        <font-awesome-icon
          icon="fa-solid fa-magnifying-glass"
          class="text-white text-2xl"
        />
      </RouterLink>
    </div>
    <nav class="flex items-center gap-3 text-white">
      <RouterLink class="p-2" to="/">Home</RouterLink>
      <RouterLink class="p-2" to="/categories">Categories</RouterLink>
    </nav>
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
