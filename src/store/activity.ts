import { defineStore } from "pinia";
import Activity from "../interfaces";
import { ref, computed } from "vue";

export const useActivityStore = defineStore(
  "activity",
  () => {
    const show = ref(false);
    const favorites = ref<Activity[]>([]);
    const finished = ref<Activity[]>([]);

    const isActivityInFavorites = computed(() => (activity: Activity) => {
      return favorites.value.some(
        (favorite) => favorite.activity === activity.activity,
      );
    });

    function addFavorite(activity: Activity) {
      if (!isActivityInFavorites.value(activity)) {
        favorites.value.push(activity);
      }
    }

    function deleteFavorite(activity: Activity) {
      const index = favorites.value.indexOf(activity);
      favorites.value.splice(index, 1);
    }

    function addFinished(activity: Activity) {
      if (
        !finished.value.some(
          (finished) => finished.activity === activity.activity,
        )
      ) {
        const index = favorites.value.indexOf(activity);
        favorites.value.splice(index, 1);
        finished.value.push(activity);
      }
    }

    function clearFinished() {
      finished.value = [];
    }

    return {
      show,
      favorites,
      finished,
      isActivityInFavorites,
      addFavorite,
      deleteFavorite,
      addFinished,
      clearFinished,
    };
  },
  {
    persist: true,
  },
);
