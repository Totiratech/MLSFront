<template>
  <div class="home">
    <!-- start header -->
    <div class="header py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6 d-flex align-items-center">
            <div class="text-start d-flex flex-column">
              <h1>We Are Here <br />For You!</h1>
              <p>
                Crimson Rose will take your hassle out and simplify your entire
                Rental/Leasing process
              </p>
              <form class="search-container pt-3">
                <div class="search_con_box py-2">
                  <div class="container">
                    <div class="row">
                      <div class="col-10 hide_search d-flex px-0">
                        <div class="row mx-0 w-100">
                          <div class="col-5 d-flex align-items-center">
                            <div class="input-group">
                              <input
                                type="text"
                                class="form-control"
                                id="search"
                                placeholder="Search"
                                v-model="search_text"
                              />
                            </div>
                          </div>
                          <div
                            class="col-4 d-flex align-items-center justify-content-end"
                          >
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="radioType"
                                id="rent"
                                value="rent"
                                v-model="sale_rent"
                              />
                              <label class="form-check-label" for="rent">
                                Rent
                              </label>
                            </div>
                            <div class="form-check ms-2">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="radioType"
                                id="sale"
                                value="sale"
                                v-model="sale_rent"
                              />
                              <label class="form-check-label" for="sale">
                                Sale
                              </label>
                            </div>
                          </div>
                          <div class="col-3 d-flex align-items-center">
                            <div
                              class="filters d-flex align-items-center filter_btn"
                              @click.prevent="filters()"
                            >
                              <img
                                src="@/assets/images/undo.png"
                                alt=".."
                                class="img-fluid undo"
                              />
                              <span>Filters</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-2">
                        <button class="btn search_home p-0">
                          <img
                            src="@/assets/images/search_home.png"
                            alt=".."
                            class="img-fluid search_btn"
                            @click.prevent="getSearchInputs()"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="filter_box py-3">
                  <div class="container">
                    <div class="row">
                      <div class="col-12">
                        <div class="row w-100 mx-0">
                          <div class="col-md-4">
                            <select
                              class="form-select mt-2"
                              aria-label="Default select example"
                              v-model="selected_res"
                            >
                              <option selected value="1">Residential</option>
                              <option value="2">Condo</option>
                            </select>
                          </div>
                          <div class="col-md-4">
                            <select
                              class="form-select mt-2"
                              aria-label="Default select example"
                              v-model="selected_location"
                            >
                              <option selected disabled>Location</option>
                              <option value="1">Toronto</option>
                            </select>
                          </div>
                          <div class="col-md-4 d-flex align-items-end">
                            <input
                              type="number"
                              class="form-control mt-2"
                              placeholder="price"
                              id="max-price"
                              v-model="price"
                            />
                          </div>
                        </div>
                        <div class="row w-100 mx-0">
                          <div class="col-md-4">
                            <select
                              class="form-select mt-2"
                              aria-label="Default select example"
                              v-model="selected_batn_num"
                            >
                              <option selected disabled>Baths</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                            </select>
                          </div>
                          <div class="col-md-4">
                            <select
                              class="form-select mt-2"
                              aria-label="Default select example"
                              v-model="selected_bed_num"
                            >
                              <option selected disabled>Beds</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                            </select>
                          </div>
                          <div class="col-md-4 d-flex align-items-end">
                            <button
                              class="btn btn-secondary text-start w-100"
                              type="button"
                              @click.prevent="moreFeatures()"
                            >
                              More features
                            </button>
                          </div>
                        </div>
                      </div>
                      <!-- <div class="col-3 d-flex align-items-center">
                        <button class="btn search_home">
                          <img
                            src="@/assets/images/search_home.png"
                            alt=".."
                            class="img-fluid search_btn"
                          />
                        </button>
                      </div> -->
                    </div>
                  </div>
                </div>

                <div class="filter_detail p-3">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-6">
                        <input
                          type="checkbox"
                          id="1"
                          class="me-2"
                          value="cableTV"
                          v-model="optionNames"
                        />
                        <label for="1">Cable TV</label>
                      </div>
                      <div class="col-md-6">
                        <input
                          type="checkbox"
                          id="2"
                          class="me-2"
                          value="cac"
                          v-model="optionNames"
                        />
                        <label for="2">CAC</label>
                      </div>
                      <div class="col-md-6">
                        <input
                          type="checkbox"
                          id="3"
                          class="me-2"
                          value="centralvac"
                          v-model="optionNames"
                        />
                        <label for="3">Central Vac</label>
                      </div>
                      <div class="col-md-6">
                        <input
                          type="checkbox"
                          id="4"
                          class="me-2"
                          value="commonelem"
                          v-model="optionNames"
                        />
                        <label for="4">Common Elements</label>
                      </div>
                      <div class="col-md-6">
                        <input
                          type="checkbox"
                          id="5"
                          class="me-2"
                          value="familyroom"
                          v-model="optionNames"
                        />
                        <label for="5">Family Room</label>
                      </div>
                      <div class="col-md-6">
                        <input
                          type="checkbox"
                          id="6"
                          class="me-2"
                          value="energycer"
                          v-model="optionNames"
                        />
                        <label for="6">Energy Certfication</label>
                      </div>
                      <div class="col-md-6">
                        <input
                          type="checkbox"
                          id="7"
                          class="me-2"
                          value="fireplace"
                          v-model="optionNames"
                        />
                        <label for="7">Fireplace Stove</label>
                      </div>
                      <div class="col-md-6">
                        <input
                          type="checkbox"
                          id="8"
                          class="me-2"
                          value="heat"
                          v-model="optionNames"
                        />
                        <label for="8">Heat</label>
                      </div>
                      <div class="col-md-6">
                        <input
                          type="checkbox"
                          id="9"
                          class="me-2"
                          value="hydro"
                          v-model="optionNames"
                        />
                        <label for="9">Hydro</label>
                      </div>
                      <div class="col-md-6">
                        <input
                          type="checkbox"
                          id="10"
                          class="me-2"
                          value="kitchen"
                          v-model="optionNames"
                        />
                        <label for="10">Kitchens</label>
                      </div>
                      <div class="col-md-6">
                        <input
                          type="checkbox"
                          id="11"
                          class="me-2"
                          value="parking"
                          v-model="optionNames"
                        />
                        <label for="12">Parking</label>
                      </div>
                      <div class="col-md-6">
                        <input
                          type="checkbox"
                          id="12"
                          class="me-2"
                          value="privateentterance"
                          v-model="optionNames"
                        />
                        <label for="13">Private Enterance</label>
                      </div>
                      <div class="col-md-6">
                        <input
                          type="checkbox"
                          id="12"
                          class="me-2"
                          value="streetdir"
                          v-model="optionNames"
                        />
                        <label for="13">Street Direction</label>
                      </div>
                      <div class="col-md-6">
                        <input
                          type="checkbox"
                          id="14"
                          class="me-2"
                          value="water"
                          v-model="optionNames"
                        />
                        <label for="14">Water</label>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <input
                  id="search-box"
                  type="text"
                  class="search-box"
                  name="q"
                />
                <label for="search-box"
                  ><font-awesome-icon
                    icon="fa-solid fa-magnifying-glass"
                    class="pe-1 search-icon"
                /></label>
                <input type="submit" id="search-submit" /> -->
              </form>
            </div>
          </div>
          <div class="col-md-6">
            <img src="@/assets/images/home.png" class="img-fluid" alt=".." />
          </div>
        </div>
      </div>
    </div>
    <!-- end header -->
    <!-- start why us -->
    <div class="container py-5">
      <div class="row">
        <div class="col-12 text-center why_us">
          <h2 class="black_font">Why choose us !</h2>
        </div>
        <div class="col-md-4 d-flex justify-content-center align-items-end">
          <div class="features text-center">
            <img
              src="@/assets/images/homeIcon.gif"
              class="img-fluid mb-2"
              alt=".."
            /><br />
            <b class="black_font">find dream home</b>
            <p>
              Crimson Rose will take your hassle out and simplify your entire
              Rental/Leasing process
            </p>
          </div>
        </div>
        <div class="col-md-4 d-flex justify-content-center align-items-end">
          <div class="features text-center">
            <img
              src="@/assets/images/keys.gif"
              class="img-fluid mb-2"
              alt=".."
            /><br />
            <b class="black_font">find dream home</b>
            <p>
              Crimson Rose will take your hassle out and simplify your entire
              Rental/Leasing process
            </p>
          </div>
        </div>
        <div class="col-md-4 d-flex justify-content-center align-items-end">
          <div class="features text-center">
            <img
              src="@/assets/images/search.gif"
              class="img-fluid mb-2"
              alt=".."
            /><br />
            <b class="black_font">find dream home</b>
            <p>
              Crimson Rose will take your hassle out and simplify your entire
              Rental/Leasing process
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- end why us -->

    <!-- start slider popular prop -->
    <div class="container slider pb-5" v-if="nearbyData">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="black_font pb-5">discover popular properties</h2>
          <div ref="swiper" class="swiper">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(home, index) in nearbyData"
                :key="`nearby${index}`"
              >
                <HomeDetailCard :home="home" />
              </div>
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>

            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <!-- If we need scrollbar -->
            <div class="swiper-scrollbar"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- end slider popular prop -->

    <!-- start our listings -->
    <div class="container pb-5">
      <div class="row">
        <div class="col-12 pb-3">
          <h2 class="black_font capitalize">Explore our listings</h2>
          <span>
            Explore our listingsExplore our listingsExplore our listings
          </span>
        </div>
        <div class="col-md-3">
          <div class="img_list">
            <img src="@/assets/images/listings-1.png" class="img-fluid" />
            <router-link :to="`/findHome?city=oakvile`">
              <div
                class="overlay d-flex flex-column justify-content-center align-items-center"
              >
                <img src="@/assets/images/arrowaction.png" alt="" />
                <b>OAKVILE</b>
                <span>3 listings</span>
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-md-3">
          <div class="img_list">
            <img src="@/assets/images/listings-2.png" class="img-fluid" />
            <router-link :to="`/findHome?city=mississauga`">
              <div
                class="overlay d-flex flex-column justify-content-center align-items-center"
              >
                <img src="@/assets/images/arrowaction.png" alt="" />
                <b>Mississauga</b>
                <span>3 listings</span>
              </div></router-link
            >
          </div>
        </div>
        <div class="col-md-3">
          <div class="img_list">
            <img src="@/assets/images/listings-3.png" class="img-fluid" />
            <router-link :to="`/findHome?city=toronto`">
              <div
                class="overlay d-flex flex-column justify-content-center align-items-center"
              >
                <img src="@/assets/images/arrowaction.png" alt="" />
                <b>Toronto</b>
                <span>3 listings</span>
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-md-3">
          <router-link :to="`/findHome?city=brampton`">
            <div class="img_list">
              <img src="@/assets/images/listings-4.png" class="img-fluid" />
              <div
                class="overlay d-flex flex-column justify-content-center align-items-center"
              >
                <img src="@/assets/images/arrowaction.png" alt="" />
                <b>Brampton</b>
                <span>3 listings</span>
              </div>
            </div></router-link
          >
        </div>
      </div>
    </div>
    <!-- end our listings -->

    <!-- start find selling -->
    <div class="container pb-5">
      <div class="row">
        <div class="col-md-6">
          <h2 class="black_font capitalize">
            lets find the right<br />
            selling option for you
          </h2>
          <span>
            Explore our listingsExplore our listingsExplore our listings
          </span>
          <ul class="pt-3">
            <li class="pb-3" v-for="x in 4" :key="x">
              Explore our listingsExplore our listingsExplore our listings
            </li>
          </ul>
        </div>
        <div class="col-md-6">
          <div>
            <img
              src="@/assets/images/dev-home.png"
              class="img-fluid"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
    <!-- end find selling -->

    <!-- start slider people living -->
    <!-- <div class="container slider pb-5">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="black_font pb-5">
            people love living with<br />
            crimson rose
          </h2>
          <div ref="swiperFeedback" class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="x in 6" :key="x">
                <Feedback />
              </div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-scrollbar"></div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- end slider people living -->

    <!-- start suggested -->
    <div class="container pb-5" v-if="loggedIn && prefrencesData">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="black_font pb-3 capitalize">Suggested for you</h2>
        </div>
        <div
          class="col-lg-3 col-md-4 mt-4"
          v-for="(pref, index) in prefrencesData"
          :key="`pref${index}`"
        >
          <HomeDetailCard :home="pref" />
        </div>
      </div>
    </div>
    <!-- end suggested -->

    <!-- start contact -->
    <div class="container pb-5 contact-sc" id="contact-sc">
      <div class="row">
        <div class="col-12">
          <div class="form d-flex align-items-end justify-content-end rel_pos">
            <div class="img_contact">
              <img
                src="@/assets/images/contact-bg.png"
                class="img-fluid"
                alt=".."
              />
            </div>
            <div class="form_contact abs_pos p-4">
              <h2 class="black_font capitalize">Let's Connect us</h2>
              <span class="black_font">
                We're all ears! please contact us with any questions or<br />
                comments.
              </span>
              <div class="login-box mt-4">
                <form>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="user-box">
                        <input type="text" v-model="$v.name.$model" />
                        <label class="capitalize light_grey">
                          <img
                            src="@/assets/images/profile-circle.png"
                            alt=".."
                            class="img-fluid pe-1 light_grey"
                          />
                          Enter your first name</label
                        >
                        <p
                          v-if="$v.name.$error"
                          class="main_color small_font mb-0"
                        >
                          {{ this.required }}
                        </p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="user-box">
                        <input type="text" v-model="$v.lastname.$model" />
                        <label class="capitalize light_grey">
                          <img
                            src="@/assets/images/profile-circle.png"
                            alt=".."
                            class="img-fluid pe-1 light_grey"
                          />
                          Enter your last name</label
                        >
                        <p
                          v-if="$v.lastname.$error"
                          class="main_color small_font mb-0"
                        >
                          {{ this.required }}
                        </p>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="user-box">
                        <input type="email" v-model="$v.email.$model" />
                        <label class="capitalize light_grey">
                          <img
                            src="@/assets/images/sms.png"
                            alt=".."
                            class="img-fluid pe-1 light_grey"
                          />Enter your email</label
                        >
                        <p
                          v-if="$v.email.$error"
                          class="main_color small_font mb-0"
                        >
                          {{ this.required }}
                        </p>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="user-box">
                        <textarea
                          rows="3"
                          v-model="$v.message.$model"
                        ></textarea>
                        <label class="capitalize light_grey light_grey"
                          >your message</label
                        >
                        <p
                          v-if="$v.message.$error"
                          class="main_color small_font mb-0"
                        >
                          {{ this.required }}
                        </p>
                      </div>
                    </div>
                    <div class="col-12 d-flex justify-content-end">
                      <button
                        type="button"
                        class="btn main_btn px-5"
                        @click.prevent="contact()"
                      >
                        Send
                      </button>
                    </div>
                    <div class="col-12 text-center pt-2">
                      <a href="#" class="contact_brand">
                        <font-awesome-icon
                          icon="fa-brands fa-facebook-f"
                          class="pe-4 contact_brand_icon"
                        />
                      </a>
                      <a href="#" class="contact_brand">
                        <font-awesome-icon
                          icon="fa-brands fa-instagram"
                          class="pe-4 contact_brand_icon"
                        />
                      </a>
                      <a href="#" class="contact_brand">
                        <font-awesome-icon
                          icon="fa-brands fa-twitter"
                          class="pe-4 contact_brand_icon"
                        />
                      </a>
                      <a href="#" class="contact_brand">
                        <font-awesome-icon
                          icon="fa-brands fa-google-plus"
                          class="contact_brand_icon"
                        />
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end contact -->
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from "vue";
import HomeDetailCard from "@/components/HomeDetailCard.vue";
import Feedback from "@/components/Feedback.vue";
// Import Swiper Vue.js components
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import $ from "jquery";
import VueGeolocation from "vue-browser-geolocation";
Vue.use(VueGeolocation);
export default {
  name: "HomeView",
  mixins: [validationMixin],
  components: {
    HomeDetailCard,
    Feedback,
  },
  data() {
    return {
      name: "",
      lastname: "",
      email: "",
      message: "",
      required: "This input is required",
      lat: "",
      lng: "",
      nearbyData: [],
      prefrencesData: [],
      loggedIn: false,
      search_text: "",
      sale_rent: "",
      selected_res: "",
      selected_location: "",
      selected_batn_num: "",
      selected_bed_num: "",
      price: "",
      optionNames: [],
    };
  },
  validations: {
    name: {
      required,
    },
    lastname: {
      required,
    },
    email: {
      required,
    },
    message: {
      required,
    },
  },

  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
  mounted() {
    this.search();
    this.auth();
    $(".filter_box").css("display", "none");
    $(".filter_box").slideUp();
    $(".filter_detail").css("display", "none");
    $(".filter_detail").slideUp();

    // call geolocation
    this.geolocation();
    this.prefrences();

    // // feedback swiper
    // new Swiper(this.$refs.swiperFeedback, {
    //   // configure Swiper to use modules
    //   modules: [Navigation, Pagination],
    //   // Optional parameters
    //   loop: false,
    //   slidesPerView: 3,
    //   spaceBetween: 10,
    //   // allowTouchMove: true,

    new Swiper(this.$refs.swiper, {
      // configure Swiper to use modules
      modules: [Navigation, Pagination],
      // Optional parameters
      loop: true,
      slidesPerView: 4,
      spaceBetween: 10,
      allowTouchMove: true,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      //breakpoints
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      },
      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });

    //   // If we need pagination
    //   pagination: {
    //     el: ".swiper-pagination",
    //   },

    //   // Navigation arrows
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },

    //   // And if we need scrollbar
    //   scrollbar: {
    //     el: ".swiper-scrollbar",
    //   },
    // });
  },
  methods: {
    // appear more features
    moreFeatures() {
      $(".filter_detail").slideToggle();
      $(".filter_detail").css("display", "block");
    },
    // appear filters options
    filters() {
      $(".filter_box").slideToggle();
      $(".filter_box").css("display", "block");
      $(".filter_detail").css("display", "none");
      // $(".filter_box").show();
    },
    // search fn
    search() {
      console.log("test search");
      $(".hide_search").toggleClass("search_width");
      $(".search_home").parents(".search_con_box").toggleClass("search_box");
    },
    // contact fn
    contact() {
      this.error = "";
      const data = {
        name: this.name,
        lastname: this.lastname,
        email: this.email,
        message: this.message,
      };
      // check validation
      this.$v.$touch();
      if (!this.$v.$error) {
        axios
          .post("contact", data, {})
          .then((response) => {
            console.log(response);
          })
          .catch((errors) => {
            console.log(errors.response.data.message);
          });
      }
    },
    // get geolocation
    geolocation() {
      this.$getLocation().then((coordinates) => {
        this.lat = coordinates.lat;
        this.lng = coordinates.lng;
        this.getNearbyProp();
      });
    },
    // get nearby prop
    getNearbyProp() {
      const data = {
        lat: this.lat,
        lng: this.lng,
      };
      axios
        .post("nearby", data)
        .then((response) => {
          this.nearbyData = response.data.props;
          console.log("nearby", this.nearbyData);

          new Swiper(this.$refs.swiper, {
            // configure Swiper to use modules
            modules: [Navigation, Pagination],
            // Optional parameters
            loop: false,
            slidesPerView: 4,
            spaceBetween: 10,
            allowTouchMove: true,

            // If we need pagination
            pagination: {
              el: ".swiper-pagination",
            },

            // Navigation arrows
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            //breakpoints
            breakpoints: {
              300: {
                slidesPerView: 1,
              },
              767: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 4,
              },
            },
            // And if we need scrollbar
            scrollbar: {
              el: ".swiper-scrollbar",
            },
          });
        })
        .catch((errors) => {
          console.log(errors);
        });
    },

    // get prefrences
    prefrences() {
      axios
        .get("userPreferences")
        .then((response) => {
          console.log("pref", response);
          this.prefrencesData = response.data.data;
          console.log("prefArr", this.prefrencesData);
          // let _arr = [];
          // for (const key in nearbyData) {
          //   _arr.push(nearbyData[key]);
          // }
          // this.nearbyData = _arr;
        })
        .catch((errors) => {
          console.log("pref", errors);
        });
    },
    // check login
    auth() {
      if (localStorage.getItem("userToken")) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    },
    // get search data and store it in local storage

    getSearchInputs() {
      const searchDataArr = {
        search_text: this.search_text,
        sale_rent: this.sale_rent,
        selected_res: this.selected_res,
        selected_location: this.selected_location,
        selected_batn_num: this.selected_batn_num,
        selected_bed_num: this.selected_bed_num,
        price: this.price,
        optionNames: this.optionNames,
        // search_options_Prkg_inc:,
        // search_options_Pvt_ent:,
        // search_options_St_dir:,
        // search_options_Water_inc:,
        // search_options_Num_kit:,
        // search_options_Hydro_inc:,
        // search_options_Heat_inc:,
        // search_options_Fpl_num:,
        // search_options_Energy_cert:,
        // search_options_Cable:,
        // search_options_Cac_inc:,
        // search_options_Central_vac:,
        // search_options_Comel_inc:,
        // search_options_Den_fr:,
      };

      localStorage.setItem("searchInputs", searchDataArr);
      console.log("search", searchDataArr);
    },
  },
};
</script>
<style lang="scss" scoped>
h1,
h2,
h3,
h4,
h5 {
  font-family: "Literata-Regular";
}
.header {
  background-image: url(../assets/images/header-bg.png);
  background-size: cover;
}
.header h1,
.header p {
  color: #fff;
}
.features b {
  text-transform: capitalize;
}
.features img {
  width: 180px;
}
.slider h2,
.why_us h2 {
  text-transform: capitalize;
}
.img_list {
  position: relative;
}
.img_list .overlay {
  position: absolute;
  bottom: 0;
  top: 0;
  background: rgb(181, 18, 27);
  color: #f1f1f1;
  width: 100%;
  transition: 1s ease;
  opacity: 0;
  color: white;
  font-size: 18px;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
}
.img_list .overlay b {
  font-size: 1.3em;
}
.img_list:hover .overlay {
  opacity: 1;
}
ul {
  padding-left: 1em;
}
ul ::marker {
  color: #b5121b;
}
ul li {
  width: 60%;
}
.contact {
  background-image: url(../assets/images/contact-bg.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
}
.img_contact {
  width: 710px;
}
.form_contact {
  background: rgba(255, 255, 255, 0.8);
  mix-blend-mode: normal;
  box-shadow: 0px 20px 26px rgba(0, 0, 0, 0.05), 0px 8px 9px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(15px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 24px;
  left: 0;
  top: 15%;
  width: 50%;
}

.user-box img {
  width: 25px;
}
.undo {
  width: 20px;
}
.contact_brand_icon {
  font-size: 1.3em;
  color: #a1a1a5;
}
.contact_brand_icon:hover {
  transform: rotate(360deg);
  transform-origin: center;
  color: #b5121b;
  transition: all 0.5s ease-in-out;
}
.search_box,
.filter_box {
  background: radial-gradient(
      138% 0% at 0% 0%,
      rgba(255, 255, 255, 0.18) 0%,
      rgba(255, 255, 255, 0.03) 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  border: 1px solid rgba(181, 18, 27, 0.3);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(15px);
  /* Note: backdrop-filter has minimal browser support */
}
.dropdown-menu {
  background: radial-gradient(
    100% 359.18% at 9% -115%,
    rgb(91, 14, 19) 74%,
    rgba(255, 255, 255, 0.2) 113%
  );
}
.search_box {
  border-radius: 8px 8px 0px 0px;
}
.filter_box {
  border-radius: 0px 0px 8px 8px;
}
::placeholder,
.search-container label,
.search-container select,
.search-container input {
  color: #fff !important;
  font-weight: 300;
}
select option {
  color: #000;
}
.search-container select,
.search-container input,
.filter_detail,
.filter_box button,
.filter_box button:hover,
.filter_box button:focus,
.filter_box button:active,
.search-container .dropdown .btn,
input [type="checkbox"] {
  /*background: radial-gradient(
    100% 359.18% at 0% 0%,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(255, 255, 255, 0.03) 100%
  );*/
  border: 2px solid rgba(181, 18, 27, 0.3);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(15px);
  /* Note: backdrop-filter has minimal browser support */
  background-color: transparent;
  border-radius: 8px;
}
.search-container select {
  background-image: url("@/assets/images/arrowdown.png");
  background-size: inherit;
}
.dropdown-toggle::after {
  border: 0;
  background-image: url("@/assets/images/arrowdown.png");
  background-size: inherit;
  background-repeat: no-repeat;
  height: 8px;
  vertical-align: middle;
  background-position: 50%;
  margin-left: 60px;
  width: 20px;
}
.search-container .dropdown .btn {
  width: 100%;
}
.search_box span {
  color: #fff;
  font-weight: 300;
}
.search_btn {
  width: 50px;
}
.search_home,
.search_home:hover,
.search_home:active,
.search_home:focus {
  border: none;
}
.swiper {
  padding-bottom: 3em;
}
.swiper-button-next,
.swiper-button-prev {
  bottom: 0;
  top: unset;
  color: #b5121b;
}
.swiper-button-prev:after,
.swiper-rtl .swiper-button-next:after {
  content: "\f137";
}
.swiper-button-next:after {
  content: "\f138";
}
.swiper-button-next:after,
.swiper-button-prev:after {
  font-family: fontawesome;
  font-size: 20px;
}
.swiper-button-prev {
  left: 40%;
}
.swiper-button-next {
  right: 40%;
}
.form-check-input {
  border-radius: 3px !important;
}
.filter_btn {
  cursor: pointer;
}
.hide_search {
  width: 0%;
  transition: all 0.4s;
  overflow: hidden;
  opacity: 0;
}
.search_width {
  width: 83.33333333%;
  opacity: 1;
}
.search_con_box input,
.dropdown-menu input {
  color: #fff;
}
.more_features {
  width: 350px;
}
// .filter_box {
//   height: 0;
//   transition: all 0.4s;
//   overflow: hidden;
//   padding: 0;
// }
// .full_height {
//   height: 100%;
//   padding: 1em;
// }

@media (max-width: 992px) {
  .form_contact {
    width: 60%;
  }
}
@media (max-width: 767px) {
  .img_list img {
    width: 100%;
  }
  .overlay img {
    width: auto;
  }
  .img_contact {
    width: 100%;
  }
  .form-control {
    position: relative;
  }
  .contact-sc .main_btn {
    margin: 30px 0;
  }
}
</style>
