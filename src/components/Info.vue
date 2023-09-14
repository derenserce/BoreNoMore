<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useActivityStore } from "../store/activity";
import ActivityCard from "./ActivityCard.vue";
import { PropType } from "vue";
import Activity from "../interfaces";
import FavoritesList from "./FavoritesList.vue";

defineProps({
  activity: Object as PropType<Activity>,
});

const { favorites } = storeToRefs(useActivityStore());

const TodoTitle = "To do's";
</script>

<template>
  <div
    class="mx-auto flex w-full max-w-lg flex-col gap-4 xl:-mx-20 xl:ml-60 xl:py-24">
    <div>
      <ActivityCard :activity="activity" />
    </div>
    <div class="overflow-y-scroll">
      <FavoritesList
        v-if="favorites.length > 0"
        :title="TodoTitle"
        :listArray="favorites"
        :array="favorites" />
    </div>
  </div>
</template>
