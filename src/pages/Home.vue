<script setup lang="ts">
import "vue3-toastify/dist/index.css";
// import { ref } from "vue";
import General from "../components/General.vue";
import Info from "../components/Info.vue";
import { useActivityAPI } from "../composables/useActivityAPI";

const { activity, fetchFreeActivity, fetchPaidActivity } = useActivityAPI();
</script>

<template>
  <div
    class="mx-auto flex h-screen max-h-screen  flex-col gap-10 bg-neutral-800 p-5 text-center text-white md:px-28 lg:px-40 xl:flex-row xl:justify-around xl:bg-cover xl:px-32 2xl:bg-img 2xl:px-32">
    <General
      :fetchFree="fetchFreeActivity"
      :fetchPaid="fetchPaidActivity" />
    <div class="mx-auto h-0.5 w-40 bg-white xl:hidden"></div>
    <Info :activity="activity" class="overflow-y-scroll"/>
  </div>
</template>

<style scoped></style>