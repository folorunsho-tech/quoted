<template lang="">
  <section class="flex flex-col justify-end h-max">
    <blockquote :class="getColor" class="flex flex-col gap-2 w-full">
      <q>
        {{ getContent || "" }}
      </q>
      <div
        class="flex justify-between items-center px-3 transition duration-200 cursor-pointer hover:bg-teal-800 hover:text-white w-max"
      >
        <a :href="getAuthorLink" target="_blank">
          <cite class="font-bold text-lg">--- {{ getAuthor || "" }}</cite>
        </a>
      </div>
      <div class="flex items-center gap-1 my-3">
        <span
          v-for="tag in getTags"
          class="bg-teal-700 hover:bg-teal-800 text-sm p-1 px-3 w-max rounded-sm text-white transition duration-200 cursor-pointer"
        >
          <router-link :to="{ name: 'Categories', query: { tag: `${tag}` } }">
            {{ tag }}
          </router-link>
        </span>
      </div>
    </blockquote>
    <div
      v-if="!isHeader"
      class="flex justify-between mt-3 gap-1 items-center cursor-pointer"
    >
      <!-- <button
    @click.prevent="addtoFavourites"
    class="p-2 w-1/3 text-2xl bg-teal-600 rounded-lg"
    >
    <font-awesome-icon
    icon="fa-solid fa-star"
    :style="{ color: getFColor }"
    />
  </button> -->
      <button
        class="p-2 w-full text-2xl rounded-lg bg-teal-800 transition duration-150 hover:bg-teal-700"
      >
        <font-awesome-icon
          icon="fa-solid fa-share-nodes"
          class="text-gray-200"
        />
      </button>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { computed, ref, defineProps } from "vue";
const favouriteState = ref(false);
const props = defineProps({
  qoute: {
    type: Object,
    required: true,
  },
  isHeader: {
    type: Boolean,
    default: false,
    required: true,
  },
  isFavourite: {
    type: Boolean,
    default: false,
    required: false,
  },
});

const getContent = computed(() => {
  return props.qoute?.content;
});
const getAuthor = computed(() => {
  return props.qoute?.author;
});

const getTags = computed(() => {
  return props.qoute?.tags;
});

const getColor = computed(() =>
  props.isHeader ? "text-white" : "text-gray-900"
);
const getAuthorLink = computed(() => {
  return props.qoute?.author_link;
});
// const getFColor = computed(() => (props.isFavourite ? "#eab308" : "#ffffff"));
const addtoFavourites = () => {
  favouriteState.value = !favouriteState.value;
};
</script>
<style lang=""></style>
