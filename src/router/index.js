import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: "/",
    name: "test",
    component: () => import("../views/mainPage.vue")
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
