<template lang="">
  <blockquote :class="getColor" class="flex flex-col gap-2">
    <q>
      {{ qoute }}
    </q>
    <cite class="font-bold text-lg">--- {{ author }}</cite>
  </blockquote>
  <div
    v-if="!isHeader"
    class="flex justify-between mt-3 gap-1 items-center cursor-pointer"
  >
    <button
      @click.prevent="addtoFavourites"
      class="p-2 w-1/3 text-2xl bg-teal-600 rounded-lg"
    >
      <font-awesome-icon
        icon="fa-solid fa-star"
        :style="{ color: getFColor }"
      />
    </button>
    <button class="p-2 w-2/3 text-2xl rounded-lg bg-teal-800">
      <font-awesome-icon icon="fa-solid fa-share-nodes" class="text-gray-200" />
    </button>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";
const favouriteState = ref(false);
const props = defineProps({
  qoute: {
    type: String,
    required: true,
  },
  author: {
    type: String,
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
    required: true,
  },
});
const getColor = computed(() =>
  props.isHeader ? "text-white" : "text-gray-900"
);
const getFColor = computed(() => (props.isFavourite ? "#eab308" : "#ffffff"));
const addtoFavourites = () => {
  favouriteState.value = !favouriteState.value;
};
</script>
<style lang=""></style>
