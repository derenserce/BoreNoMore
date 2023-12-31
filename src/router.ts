import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/board",
      component: () => import("./pages/Board.vue"),
    },
  ],
});
