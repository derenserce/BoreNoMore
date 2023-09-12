<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useActivityStore } from "../store/activity";

  const acitityStore = useActivityStore();

  const { favorites } = storeToRefs(acitityStore);
  favorites;
</script>

<template>
  <div class="h-screen w-screen bg-gray-900"></div>
</template>

<style scoped></style>
