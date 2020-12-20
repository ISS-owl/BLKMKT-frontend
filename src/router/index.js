import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: "/",
    name: "mainPage",
    component: () => import("../views/mainPage.vue")
  },
  {
    path: "/login",
    name: "loginPage",
    component: () => import("../views/loginPage.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/registerPage.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
