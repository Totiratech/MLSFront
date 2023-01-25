import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import {
    faUserGroup,
    faLocationDot,
    faEnvelope,
    faClock,
    faPhone,
    faMagnifyingGlass,
    faStar,
    faHeart,
    faHouseChimney,
    faArrowUpFromBracket,
    faBell,
    faXmark,
    faCircle,
    faCheck,
    faChevronLeft,
    faChevronRight,
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import {
    faSquareInstagram,
    faTwitter,
    faFacebookF,
    faGooglePlus,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./assets/css/style.css";
import $ from "jquery";
import Toaster from "@meforma/vue-toaster";


/* add icons to the library */
library.add(
    faUserGroup,
    faSquareInstagram,
    faTwitter,
    faFacebookF,
    faLocationDot,
    faEnvelope,
    faClock,
    faPhone,
    faMagnifyingGlass,
    faHeart,
    faStar,
    faGooglePlus,
    faInstagram,
    faHouseChimney,
    faBell,
    faArrowUpFromBracket,
    faXmark,
    faCircle,
    faCheck,
    faChevronLeft,
    faChevronRight,
    faChevronDown
);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);
axios.defaults.baseURL = "https://test.crimsonrose.a2hosted.com/api/";
axios.defaults.headers.common["Authorization"] =
    "Bearer " + (localStorage.getItem("userToken") || "");
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Accept"] = "application/json";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");


// createApp(App).use(Toaster).mount("#app");