<template lang="">
  <blockquote class="text-white flex flex-col gap-2">
    <q>
      {{ qoute }}
    </q>
    <cite class="font-bold text-lg">--- {{ author }}</cite>
  </blockquote>
  <div
    v-if="!isHeader"
    class="flex justify-between gap-1 items-center cursor-pointer"
  >
    <button class="p-2 w-1/3 text-2xl">
      <font-awesome-icon icon="fa-solid fa-star" style="color: #eab308" />
    </button>
    <button class="p-2 w-2/3 text-2xl rounded-lg bg-teal-800">
      <font-awesome-icon icon="fa-solid fa-share-nodes" class="text-gray-200" />
    </button>
  </div>
</template>
<script lang="ts">
export default {
  name: "QouteCard",
  props: {
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
  },
};
</script>
<style lang=""></style>
