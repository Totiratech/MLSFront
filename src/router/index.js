import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import FindHome from "../views/FindHome.vue";
import Login from "../views/Auth/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/find",
    name: "find",
    component: FindHome,
  },
    {
        path: "/login",
        name: "login",
        component: Login,
    },

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;