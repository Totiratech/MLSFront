<template>
  <div class="findHome">
    <div class="container loader_container py-3">
      <div class="d-flex justify-content-center align-items-center">
        <svg
          version="1.1"
          id="L3"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enable-background="new 0 0 0 0"
          xml:space="preserve"
          style="width: 100px"
        >
          <circle
            fill="none"
            stroke="#B5121B"
            stroke-width="4"
            cx="50"
            cy="50"
            r="44"
            style="opacity: 0.5"
          />
          <circle
            fill="#fff"
            stroke="#B5121B"
            stroke-width="3"
            cx="8"
            cy="54"
            r="6"
          >
            <animateTransform
              attributeName="transform"
              dur="2s"
              type="rotate"
              from="0 50 48"
              to="360 50 52"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
    </div>
    <!-- start header -->
    <div class="header py-5" id="fillter_holder" style="display: none">
      <div class="container mx-auto">
        <div class="row">
          <div class="col-md-12 d-flex align-items-center">
            <div class="text-start d-flex flex-column w-100">
              <h1 class="capitalize">find dream home</h1>
              <p>
                Crimson Rose will take your hassle out and simplify your entire
                Rental/Leasing process
              </p>
              <div class="search_box relative_pos p-3">
                <form
                  class="row row-cols-lg-auto align-items-center search_form d-flex"
                >
                  <!-- col-md-6 col-6 px-1 -->
                  <div class="col-auto px-1">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        id="search-text"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <div class="col-auto px-1 d-flex">
                    <div class="form-check me-2">
                      <input
                        class="form-check-input property-status"
                        value="Sale"
                        checked
                        name="search_type"
                        type="radio"
                      />
                      <label class="form-check-label" for="inlineFormCheck">
                        Sale
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input property-status"
                        value="lease"
                        name="search_type"
                        type="radio"
                      />
                      <label class="form-check-label" for="inlineFormCheck">
                        Rent
                      </label>
                    </div>
                  </div>

                  <div class="col-auto px-1">
                    <select
                      class="form-select my-1"
                      aria-label="Default select example"
                      id="type"
                    >
                      <option value="residentialproperty" selected>
                        Residential
                      </option>
                      <option value="condoproperty">Condo</option>
                    </select>
                  </div>

                  <div class="col-auto px-1">
                    <select
                      class="form-select my-1"
                      aria-label="Default select example"
                      id="area"
                    >
                      <option value="" selected class="capitalize">
                        location
                      </option>
                      <option
                        v-for="area in this.areas"
                        :value="area.Area_num"
                        class="capitalize"
                        :key="area"
                      >
                        {{ area.Area }}
                      </option>
                    </select>
                  </div>
                  <div class="col-auto px-1">
                    <input
                      type="number"
                      class="form-control my-1"
                      placeholder="price"
                      id="max-price"
                      min="1"
                    />
                  </div>
                  <div class="col-auto px-1">
                    <select
                      class="form-select my-1"
                      aria-label="Default select example"
                      id="bathrooms"
                    >
                      <option value="" selected class="capitalize">
                        baths
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </div>
                  <div class="col-auto px-1">
                    <select
                      class="form-select my-1"
                      aria-label="Default select example"
                      id="bedrooms"
                    >
                      <option value="" selected class="capitalize">beds</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </div>
                  <div class="col-auto px-1">
                    <button
                      class="moreFeatures btn btn-secondary text-start w-100 my-1"
                      type="button"
                      @click.prevent="moreFeatures()"
                    >
                      Features
                      <img src="@/assets/images/arrowdown.png" alt="" />
                    </button>
                  </div>
                  <div class="search_btn abs_pos">
                    <button class="btn" id="search-btn">
                      <img
                        src="@/assets/images/last.png"
                        alt=".."
                        class="img-fluid search_icon"
                      />
                    </button>
                  </div>
                </form>
              </div>
              <div class="filter_detail p-3">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6 form-check">
                      <input
                        type="checkbox"
                        id="cableTV"
                        class="me-2 form-check-input conditions"
                        name="Cable"
                      />
                      <label for="cableTV">Cable TV</label>
                    </div>
                    <div class="col-md-6 form-check">
                      <input
                        type="checkbox"
                        id="cac"
                        class="me-2 form-check-input conditions"
                        name="Cac_inc"
                      />
                      <label for="cac">CAC</label>
                    </div>
                    <div class="col-md-6 form-check">
                      <input
                        type="checkbox"
                        id="centralvac"
                        class="me-2 form-check-input conditions"
                        name="Central_vac"
                      />
                      <label for="centralvac">Central Vac</label>
                    </div>
                    <div class="col-md-6 form-check">
                      <input
                        type="checkbox"
                        id="commonelem"
                        class="me-2 form-check-input conditions"
                        name="Comel_inc"
                      />
                      <label for="commonelem">Common Elements</label>
                    </div>
                    <div class="col-md-6 form-check">
                      <input
                        type="checkbox"
                        id="familyroom"
                        class="me-2 form-check-input conditions"
                        name="Den_fr"
                      />
                      <label for="familyroom">Family Room</label>
                    </div>
                    <div class="col-md-6 form-check">
                      <input
                        type="checkbox"
                        id="energycer"
                        class="me-2 form-check-input conditions"
                        name="Energy_cert"
                      />
                      <label for="energycer">Energy Certfication</label>
                    </div>
                    <div class="col-md-6 form-check">
                      <input
                        type="checkbox"
                        id="fireplace"
                        class="me-2 form-check-input conditions"
                        name="Fpl_num"
                      />
                      <label for="fireplace">Fireplace Stove</label>
                    </div>
                    <div class="col-md-6 form-check">
                      <input
                        type="checkbox"
                        id="heat"
                        class="me-2 form-check-input conditions"
                        name="Heat_inc"
                      />
                      <label for="heat">Heat</label>
                    </div>
                    <div class="col-md-6 form-check">
                      <input
                        type="checkbox"
                        id="hydro"
                        class="me-2 form-check-input conditions"
                        name="Hydro_inc"
                      />
                      <label for="hydro">Hydro</label>
                    </div>
                    <div class="col-md-6 form-check">
                      <input
                        type="checkbox"
                        id="kitchen"
                        class="me-2 form-check-input conditions"
                        name="Num_kit"
                      />
                      <label for="kitchen">Kitchens</label>
                    </div>
                    <div class="col-md-6 form-check">
                      <input
                        type="checkbox"
                        id="parking"
                        class="me-2 form-check-input conditions"
                        name="Prkg_inc"
                      />
                      <label for="parking">Parking</label>
                    </div>
                    <div class="col-md-6 form-check">
                      <input
                        type="checkbox"
                        id="privateentterance"
                        class="me-2 form-check-input conditions"
                        name="Pvt_ent"
                      />
                      <label for="privateentterance">Private Enterance</label>
                    </div>
                    <div class="col-md-6 form-check">
                      <input
                        type="checkbox"
                        id="streetdir"
                        class="me-2 form-check-input conditions"
                        name="St_dir"
                      />
                      <label for="streetdir">Street Direction</label>
                    </div>
                    <div class="col-md-6 form-check">
                      <input
                        type="checkbox"
                        id="water"
                        class="me-2 form-check-input conditions"
                        name="Water_inc"
                      />
                      <label for="water">Water</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end header -->

    <!-- start home -->
    <div class="container py-5" id="listing_holder" style="display: none">
      <div class="row">
        <div class="col-md-7">
          <div class="container">
            <div class="row" id="cards-holder">
              <div class="col-md-6 mt-md-4 mt-3" v-for="x in 6" :key="x">
                <HomeDetailCard />
              </div>
            </div>
            <!-- start pagination -->
            <div class="col-12 mt-3">
              <nav aria-label="Page navigation example">
                <ul
                  class="pagination justify-content-center"
                  id="pagination-holder"
                >
                  <li class="page-item disabled">
                    <a class="page-link">
                      <font-awesome-icon icon="fa-solid fa-chevron-left" />
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link active" href="#"></a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#"></a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#"></a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      <font-awesome-icon icon="fa-solid fa-chevron-right" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <!-- end pagination -->
          </div>
        </div>
        <div class="col-md-5">
          <div
            id="map_right_listing"
            class="h-full"
            style="width: 100%; height: 500px"
          ></div>
        </div>
      </div>
    </div>
    <!-- end home -->
  </div>
</template>
<script>
// import map.js file
import { initMap } from "@/assets/js/map.js";
import axios from "axios";
import "@/assets/css/map.css";
// @ is an alias to /src
import HomeDetailCard from "@/components/HomeDetailCard.vue";
// Import Swiper Vue.js components
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import $ from "jquery";
export default {
  name: "HomeView",
  data() {
    return {
      areas: [],
      loader: true,
    };
  },
  components: {
    HomeDetailCard,
  },
  setup() {
    const onSwiper = (swiper) => {};
    const onSlideChange = () => {};
    return {
      onSwiper,
      onSlideChange,
    };
  },
  methods: {
    // appear more features
    moreFeatures() {
      $(".filter_detail").slideToggle();
      $(".filter_detail").css("display", "block");
    },
  },
  mounted() {
    axios
      .get("https://test.crimsonrose.a2hosted.com/api/getAreas")
      .then((response) => {
        this.areas = response.data.area;
        this.loader = false;
      })
      .catch((errors) => {
        this.errorsHandler = errors.response.data.errors;
      });

    $(".filter_detail").css("display", "none");
    $(".filter_detail").slideUp();
    /*     console.log(document.getElementById('map_right_listing')); */
    initMap();

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

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
    // feedback swiper
    new Swiper(this.$refs.swiperFeedback, {
      // configure Swiper to use modules
      modules: [Navigation, Pagination],
      // Optional parameters
      loop: true,
      slidesPerView: 3,
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

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  },
};
</script>
<style lang="scss" scoped>
::placeholder,
label,
select {
  color: #fff !important;
  font-weight: 300;
}

select option {
  color: #000;
}

.search {
  width: 35px;
}
.loader_container {
  height: 300px;
}
.loader_container div {
  height: 100%;
}

select,
input,
.search_box .moreFeatures {
  /*background: radial-gradient(
    100% 359.18% at 0% 0%,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(255, 255, 255, 0.03) 100%
  );*/
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(15px);
  background-color: transparent;

  /* Note: backdrop-filter has minimal browser support */

  border-radius: 8px;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: "Literata-Regular";
}

.header {
  background-image: url(../assets/images/find_home.png);
  background-size: cover;
}

.header h1,
.header p {
  color: #fff;
}

.search_box,
.filter_detail {
  background: radial-gradient(
    100% 359.18% at 0% 0%,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(255, 255, 255, 0.03) 100%
  );
  /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
  border: 1.4636px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0px 29.2719px 58.5439px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(21.9539px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 11.7088px;
}

#search-btn {
  position: absolute;
  right: -60px;
}

.search_icon {
  width: 70px;
}

.rent_bg,
.sale_bg {
  color: #fff;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  width: 100%;
}
.rent_bg {
  background-color: #b5121b;
}
.sale_bg {
  background-color: #000;
}
.price {
  font-weight: 600;
  font-size: 1.3em;
  font-family: "Lato-Regular";
}
.card {
  width: 100% !important;
}
.form-check-input[type="radio"] {
  border-radius: 3px;
}
.form-select {
  background-image: url("@/assets/images/arrowdown.png");
  background-size: inherit;
}
.form-check-input:checked {
  background-color: transparent;
  border-color: rgba(255, 255, 255, 0.3);
}
input[type="number"] {
  width: 140px;
  color: #f5f5f5;
}
input:focus {
  background-color: transparent;
}
select option {
  color: #f5f5f5;
  background-color: rgb(0 0 0 / 80%) !important;
}
#cards-holder .card {
  margin-bottom: 30px;
}
.search_box .pac-target-input {
  width: auto;
}
#search-btn:active {
  border: 0;
}
/*pagination */
.page-link {
  width: 20px;
  height: 20px;
  background: #c8c8c8;
  border-radius: 50%;
  padding: 0;
  border: 0;
}
.active > .page-link,
.page-link.active {
  background: #b5121b;
  border: 0;
}
.abs_pos {
  position: absolute;
  top: 4px;
  right: 12px;
}
@media (max-width: 992px) {
  .abs_pos {
    top: -18%;
    right: 3%;
  }
  #search-btn {
    right: 40%;
  }
  .map_right_listing {
    width: 100% !important;
    height: 300px !important;
  }
  #cards-holder .card {
    margin-bottom: 30px;
  }
  .search_box {
    margin-top: 60px;
    padding-top: 60px !important;
  }

  input[type="number"] {
    width: 100%;
  }
  .search_box .pac-target-input {
    width: 100%;
  }
}
@media (max-width: 767px) {
  #search-btn {
    right: 30%;
  }
}

@media (min-width: 1440px) {
  .search_form {
    justify-content: space-evenly;
  }
}
</style>
