<script setup lang="ts">
import QouteCard from "@/components/QouteCard.vue";
</script>

<template>
  <header class="bg-teal-950 rounded-br-3xl">
    <section class="bg-teal-900 p-3 pl-0 space-y-3 rounded-br-3xl">
      <h2 class="text-2xl pl-5 font-bold text-white">
        Your daily dose of inspiration
      </h2>
      <QouteCard
        :is-favourite="false"
        qoute="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quod, quia, voluptate quae voluptatem quibusdam quos
     accusantium quas dolorum voluptatum. Quisquam, quae. Quisquam, quae.
     Quisquam, quae. Quisquam, quae."
        author="Folorunsho Ibrahim"
        :is-header="true"
      />
    </section>
  </header>
  <main class="p-4">
    <h2 class="font-bold text-xl underline text-teal-950 underline-offset-8">
      Top 20 Famous Qoutes
    </h2>
    <section v-for="n in 20" class="flex flex-col gap-4 w-full py-4">
      <div class="bg-gray-200 p-2 rounded-xl">
        <QouteCard
          :is-favourite="true"
          qoute="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quod, quia, voluptate quae voluptatem quibusdam quos
        accusantium quas dolorum voluptatum. Quisquam, quae. Quisquam, quae.
        Quisquam, quae. Quisquam, quae."
          author="Folorunsho Ibrahim"
          :is-header="false"
        />
      </div>
    </section>
  </main>
</template>
