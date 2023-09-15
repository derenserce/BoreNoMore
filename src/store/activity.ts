import { defineStore } from "pinia";
import Activity from "../interfaces";
import { ref, computed } from "vue";

export const useActivityStore = defineStore(
  "activity",
  () => {
    const show = ref(false);
    const todos = ref<Activity[]>([]);
    const finished = ref<Activity[]>([]);

    const isActivityInTodos = computed(() => (activity: Activity) => {
      return todos.value.some(
        (todo) => todo.activity === activity.activity,
      );
    });

    function addTodo(activity: Activity) {
      if (!isActivityInTodos.value(activity)) {
        todos.value.push(activity);
      }
    }

    function deleteTodo(activity: Activity) {
      const index = todos.value.indexOf(activity);
      todos.value.splice(index, 1);
    }

    function addFinished(activity: Activity) {
      if (
        !finished.value.some(
          (finished) => finished.activity === activity.activity,
        )
      ) {
        const index = todos.value.indexOf(activity);
        todos.value.splice(index, 1);
        finished.value.push(activity);
      }
    }

    function clearFinished() {
      finished.value = [];
    }

    return {
      show,
      todos,
      finished,
      isActivityInTodos,
      addTodo,
      deleteTodo,
      addFinished,
      clearFinished,
    };
  },
  {
    persist: true,
  },
);
