<script setup lang="ts">
  import { useActivityStore } from "../store/activity";
  import Activity from "../interfaces";
  import { PropType } from "vue";

  const activityStore = useActivityStore();
  
  defineProps({
    activity: Object as PropType<Activity>,
  });
</script>

<template>
  <div
    v-if="activity"
    class="flex h-full w-full flex-col rounded-xl bg-gray-100/40 px-4">
    <div class="mb-2 flex justify-between py-2 text-xl font-bold">
      {{ activity?.activity }}
      <button
        v-if="!activityStore.isActivityInFavorites(activity)"
        @click="activityStore.addFavorite(activity)"
        class="likeDislike">
        ♥
      </button>
      <button
        v-else
        @click="activityStore.deleteFavorite(activity)"
        class="likeDislike">
        -
      </button>
    </div>
    <div class="flex gap-2 pb-4 text-center">
      <span class="cardInfo">🧍‍♂️{{ activity.participants }}</span>
      <span class="cardInfo">💸{{ activity.price }}</span>
      <span class="cardInfo flex gap-2"><span>ℹ</span>{{ activity.type }}</span>
    </div>
  </div>
</template>
