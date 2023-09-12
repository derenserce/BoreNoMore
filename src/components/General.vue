<script setup lang="ts">
  defineProps({
    fetchFree: Function,
    fetchPaid: Function,
  });
</script>

<template>
  <div class="flex flex-col items-center justify-center 2xl:px-20">
    <img src="../assets/logo.png" alt="logo" class="mx-auto w-3/4 sm:w-max" />
    <div class="mt-4 flex justify-center gap-4">
      <button @click="fetchFree?.()" class="buttonActivity">🔎 Free activity</button>
      <button @click="fetchPaid?.()" class="buttonActivity">🔎 Paid activity</button>
    </div>
  </div>
</template>

<style scoped></style>
