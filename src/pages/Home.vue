<script setup lang="ts">
import "vue3-toastify/dist/index.css";
import { ref } from "vue";
import activityAPI from "../api/activityAPI";
import General from "../components/General.vue";
import Info from "../components/Info.vue";

const activity = ref();

async function fetchPaid() {
  await activityAPI.fetchPaidActivity(activity);
}

async function fetchFree() {
  await activityAPI.fetchFreeActivity(activity);
}
</script>

<template>
  <div
    class="mx-auto flex max-h-screen flex-col gap-10 bg-neutral-800 p-5 text-center text-white md:px-28 lg:px-40 xl:flex-row xl:justify-between xl:bg-cover xl:px-32 2xl:bg-img 2xl:px-32">
    <General :fetchFree="fetchFree" :fetchPaid="fetchPaid"/>
    <div class="mx-auto h-0.5 w-40 bg-white xl:hidden"></div>
    <Info :activity="activity" />   
  </div>
</template>

<style scoped></style>
