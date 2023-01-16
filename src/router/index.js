import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import FindHome from "../views/FindHome.vue";
import Login from "../views/Auth/Login.vue";
import Signup from "../views/Auth/Signup.vue";
import FindHomeMain from "../views/FindHomeMain.vue";
import Mortgage from "../views/Mortgage.vue";
import ProfileData from "../views/profileData.vue";
import AddProperty from "../views/AddProperty.vue";
import ForgetPassword from "../views/ForgetPass.vue";
import NewPassword from "../views/NewPass.vue";
import AllRequests from "../views/AllRequests.vue";



Vue.use(VueRouter);

const routes = [{
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
    {
        path: "/signup",
        name: "signup",
        component: Signup,
    },
    {
        path: "/findHome",
        name: "findHome",
        component: FindHomeMain,
    },
    {
        path: "/mortgage",
        name: "mortgage",
        component: Mortgage,
    },
    {
        path: "/profile",
        name: "profile",
        component: ProfileData,
    },
    {
        path: "/addprop",
        name: "addproperty",
        component: AddProperty,
    },

    {
        path: "/forgetPassword",
        name: "forgetPassword",
        component: ForgetPassword,
    },
    {
        path: "/newPassword",
        name: "newPassword",
        component: NewPassword,
    },
    {
        path: "/allRequests",
        name: "allRequests",
        component: AllRequests,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;