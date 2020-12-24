import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: "/main",
    name: "mainPage",
    component: () => import("../views/MainPage.vue")
  },
  {
    path: "/",
    redirect: '/main',
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
  },
  {
    path: "/item/:goodId",
    name: "item",
    component: () => import("../views/ItemPage.vue")
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/CartPage.vue")
  },
  {
    path: "/self",
    name: "self",
    component: () => import("../views/SelfPage.vue")
  },
  {
    path: "/mygood",
    name: "mygood",
    component: () => import("../views/MygoodPage.vue")
  },
  {
    path: "/editgood",
    name: "editgood",
    component: () => import("../views/Editgood.vue")
  },
  {
    path: "/creategood",
    name: "creategood",
    component: () => import("../views/CreateGood.vue")
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../views/SearchPage.vue")
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from) => {
  if (to.path == "/register") {
    return true;
  }
  if (to.path != "/login" && sessionStorage.getItem("login") === null) {
    return { path: '/login' };
  }
  return true;
});

export default router;
