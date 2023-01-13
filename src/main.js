import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserGroup, faLocationDot, faEnvelope, faClock, faPhone,faHeart,faHouseChimney} from '@fortawesome/free-solid-svg-icons'
import { faSquareInstagram, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import './assets/css/style.css'

/* add icons to the library */
library.add(faUserGroup, faSquareInstagram, faTwitter, faFacebookF, faLocationDot, faEnvelope, faClock, faPhone,faHeart,faHouseChimney)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");