<template lang="">
  <div></div>
</template>
<script lang="ts" setup>
import QouteCard from "@/components/QouteCard.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
const route = useRoute();
const getQoute = computed(() => {
  return route.params.qoute;
});
console.log(getQoute.value);
</script>
<style lang=""></style>
