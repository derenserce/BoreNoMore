<script setup lang="ts">
import { useActivityStore } from "../store/activity";
import Activity from "../interfaces";
import { PropType } from "vue";

const activityStore = useActivityStore();

defineProps({
  activity: Object as PropType<Activity>,
  inBoard: Boolean,
  inFinished: Boolean,
});
</script>

<template>
  <div
    v-if="activity"
    class="flex h-full  flex-col rounded-xl bg-gray-100/40 px-4">
    <div
      class="mb-2 flex justify-between py-2 text-start text-xl font-semibold">
      {{ activity.activity }}
      <div v-if="!inBoard">
        <button
          v-if="!activityStore.isActivityInTodos(activity)"
          @click="activityStore.addTodo(activity)"
          class="likeDislike">
          +
        </button>
        <button
          v-else
          @click="activityStore.deleteTodo(activity)"
          class="likeDislike">
          -
        </button>
      </div>
      <div
        v-if="inBoard && !inFinished"
        class="flex gap-4">
        <button
          @click="activityStore.deleteTodo(activity)"
          class="likeDislike">
          -
        </button>
        <button
          @click="activityStore.addFinished(activity)"
          class="likeDislike">
          +
        </button>
      </div>
    </div>
    <div class="flex gap-2 pb-4 text-center">
      <span class="cardInfo">🧍‍♂️{{ activity.participants }}</span>
      <span class="cardInfo">💸{{ activity.price }}</span>
      <span class="cardInfo flex gap-2 capitalize"
        ><span>ℹ</span>{{ activity.type }}</span
      >
    </div>
  </div>
</template>
