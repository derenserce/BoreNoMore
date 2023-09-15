<script setup lang="ts">
import Activity from "../interfaces";
import ActivityCard from "./ActivityCard.vue";
import { useActivityStore } from "../store/activity";

defineProps({
  title: String,
  listArray: Array,
  array: Array as () => Activity[],
  inBoard: Boolean,
  inFinished: Boolean,
});

const activityStore = useActivityStore();
</script>

<template>
  <div
    v-if="listArray"
    class="h-full overflow-y-scroll rounded-xl bg-blue-400/20 p-4">
    <div class="flex justify-between pb-4">
      <h1 class="flex w-full justify-between text-xl font-bold">
        <p>{{ title }}</p>
        <button
          v-if="inFinished"
          class="buttonActivity px-2 py-1"
          @click="activityStore.clearFinished">
          Clear finished
        </button>
      </h1>
    </div>
    <ul class="space-y-2">
      <li v-for="activity in array">
        <ActivityCard
          :activity="activity"
          :inBoard="inBoard"
          :inFinished="inFinished" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
