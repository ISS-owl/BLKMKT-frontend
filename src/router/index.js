import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: "/",
    name: "mainPage",
    component: () => import("../views/MainPage.vue")
  },
  {
    path: "/login",
    name: "loginPage",
    component: () => import("../views/LoginPage.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterPage.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
