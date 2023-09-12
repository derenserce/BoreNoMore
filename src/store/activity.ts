import { defineStore } from "pinia";
import Activity from "../interfaces";

export const useActivityStore = defineStore("activity", {
  state: () => {
    return {
      show: false,
      favorites: [] as Activity[],
      activity: [],
    };
  },
  getters: {
    isActivityInFavorites: (state) => (activity: Activity) => {
      return state.favorites.some((fav) => fav.activity === activity.activity);
    },
  },
  actions: {
    addFavorite(activity: Activity) {
      if (!this.favorites.some((favorite) => favorite.activity === activity.activity)) {
        this.favorites.push(activity);
      }
    },
    deleteFavorite(activity: Activity) {
      const index = this.favorites.indexOf(activity);
      this.favorites.splice(index, 1);
    },
  },
  persist: true,
});
