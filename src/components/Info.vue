<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useActivityStore } from "../store/activity";
  import ActivityCard from "./ActivityCard.vue";
  import { PropType } from "vue";
  import Activity from "../interfaces";

  defineProps({
    activity: Object as PropType<Activity>,
  });

  const activityStore = useActivityStore();

  const { favorites } = storeToRefs(useActivityStore());
</script>

<template>
  <div class="mx-auto flex max-w-lg flex-col gap-4 overflow-y-scroll  xl:-mx-40 2xl:ml-80 xl:py-24">
    <ul>
      <ActivityCard :activity="activity" />
    </ul>
    <div
      class="overflow-y-scroll rounded-xl bg-gray-900/80 p-4"
      v-if="activityStore.favorites.length > 0">
      <div class="flex justify-between pb-4">
        <h1 class="pb-4 text-xl font-bold">Favorites</h1>
        <router-link to="/board" class="buttonActivity px-4 py-2">Board</router-link>
      </div>
      <ul class="space-y-2">
        <li v-for="activity in favorites">
          <ActivityCard :activity="activity" />
        </li>
      </ul>
    </div>
  </div>
</template>
