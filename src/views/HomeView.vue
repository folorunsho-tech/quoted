<script setup lang="ts">
import { computed } from "vue";
import QouteCard from "@/components/QouteCard.vue";
import ShareModal from "@/components/ShareModal.vue";
import { useQouteOfTheDayStore } from "@/stores/qouteOfTheDay";
import { useQuotesStore } from "@/stores/quotes";

// Gets the qoute of the day from the store
const qouteOfTheDay = useQouteOfTheDayStore();
qouteOfTheDay.getQoute();

// Gets the quotes from the store
const Quotes = useQuotesStore();
Quotes.getQuotes();

// Computed values of the qoute of the day and the top 20 qoutes
const qouteToday = computed(() => qouteOfTheDay.qoute);

const topQoutes = computed(() => Quotes.qoutes);
</script>

<template>
  <header class="bg-teal-950 rounded-br-3xl relative">
    <section class="bg-teal-900 p-3 pl-0 space-y-3 rounded-br-3xl">
      <h2 class="text-2xl pl-5 font-bold text-white">
        Your daily dose of inspiration
      </h2>
      <QouteCard :is-favourite="false" :qoute="qouteToday" :is-header="true" />
    </section>
  </header>
  <main class="p-4 w-full">
    <h2 class="font-bold text-xl underline text-teal-950 underline-offset-8">
      Top 20 Famous Qoutes
    </h2>
    <section
      class="flex flex-col gap-4 w-full my-4 py-4 sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
    >
      <div v-for="q in topQoutes" class="bg-gray-200 p-2 rounded-xl w-full">
        <QouteCard :is-favourite="true" :qoute="q" :is-header="false" />
      </div>
    </section>
  </main>
  <ShareModal />
</template>
