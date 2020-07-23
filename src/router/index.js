import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import NotFound from "../views/misc/NotFound.vue";
import store from "../store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/about",
    name: "About",
    meta: {
      requiresAuth: true,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "*",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isLogin = store.getters["user/isAuthenticated"];
  console.log(`is Authenticated: ${isLogin}`);
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (isLogin) {
      next();
      return;
    }
    next("/login");
    return;
  }
  console.log("ajdbjb");
  if (to.matched.some((record) => record.meta.hideForAuth)) {
    if (isLogin) {
      next("/");
      return;
    }
  }
  console.log("ajdbjb");

  next();
});
export default router;
