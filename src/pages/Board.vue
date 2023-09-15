<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useActivityStore } from "../store/activity";
import FavoritesList from "../components/FavoritesList.vue";

const acitityStore = useActivityStore();

const { todos, finished } = storeToRefs(acitityStore);

const inBoard = true;
const inFinished = true;

const TodoTitle = "To do's";
const FinishedTitle = "Finished";
</script>

<template>
  <div class="h-screen w-screen bg-gray-900 px-20 py-20 text-white">
    <router-link
      to="/"
      class="buttonActivity absolute inset-4 h-max w-max px-4 py-2"
      >Back to home!</router-link
    >
    <div class="mx-auto grid h-full w-full xl:w-3/4 grid-rows-2 xl:grid-cols-2 gap-20">
      <FavoritesList
        :title="TodoTitle"
        :listArray="todos"
        :array="todos"
        :inBoard="inBoard" />
      <FavoritesList
        :title="FinishedTitle"
        :listArray="finished"
        :array="finished"
        :inBoard="inBoard"
        :inFinished="inFinished" />
    </div>
  </div>
</template>

<style scoped></style>
