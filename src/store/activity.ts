import { defineStore } from "pinia";
import Activity from "../interfaces";
import { ref, computed } from "vue";

export const useActivityStore = defineStore(
  "activity",
  () => {
    const favorites = ref<Activity[]>([]);
    const show = ref(false);

    const isActivityInFavorites = computed(() => (activity: Activity) => {
      return favorites.value.some((favorite) => favorite.activity === activity.activity);
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

    return {
      favorites,
      show,
      isActivityInFavorites,
      addFavorite,
      deleteFavorite,
    };
  },
  {
    persist: true,
  },
);
