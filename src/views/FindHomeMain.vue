<template>
  <div class="findHome">
    <!-- start header -->
    <div class="header py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-12 d-flex align-items-center">
            <div class="text-start d-flex flex-column">
              <h1 class="capitalize">find dream home</h1>
              <p>
                Crimson Rose will take your hassle out and simplify your entire
                Rental/Leasing process
              </p>
              <div class="search_box relative_pos p-3">
                <form class="row row-cols-lg-auto g-3 align-items-center">
                  <div class="col-md-6 col-6">
                    <div class="input-group">
                      <input type="text" class="form-control" id="search-text" placeholder="Search" />
                    </div>
                  </div>
                  <div class="col-md-6 col-6">
                    <div class="form-check">
                      <input class="form-check-input" value="Sale" checked name="search_type" id="property-status" type="radio" />
                      <label class="form-check-label" for="inlineFormCheck">
                        Sale
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" value="Lease" name="search_type" id="property-status" type="radio" />
                      <label class="form-check-label" for="inlineFormCheck">
                        Rent
                      </label>
                    </div>

                  </div>

                  <div class="col-md-6 col-6">
                    <select class="form-select mt-2" aria-label="Default select example" id="type">
                      <option value="residentialproperty" selected> Residential</option>
                      <option value="condoproperty"> Condo</option>
                    </select>
                  </div>

                  <div class="col-md-6 col-6">
                    <select class="form-select mt-2" aria-label="Default select example">
                      <option selected disabled class="capitalize">
                        location
                      </option>
                      <option value="1">Rent</option>
                      <option value="2">Sale</option>
                    </select>
                  </div>
                  <div class="col-md-6 col-6">
                      <input type="number" class="form-control"  placeholder="price" id="max-price" />
                  </div>
                  <div class="col-md-6 col-6">
                    <select class="form-select mt-2" aria-label="Default select example" id="bathrooms">
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
                  <div class="col-md-6 col-6">
                    <select class="form-select mt-2" aria-label="Default select example" id="bedrooms">
                      <option value="" selected  class="capitalize">beds</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </div>

                  <div class="col-md-6 col-6">
                    <select class="form-select mt-2" aria-label="Default select example">
                      <option selected disabled>more features</option>
                      <option value="1">Rent</option>
                      <option value="2">Sale</option>
                    </select>
                  </div>

                  <div class="search_btn abs_pos">
                    <button class="btn" id="search-btn">
                      <img src="@/assets/images/last.png" alt=".." class="img-fluid search_icon" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end header -->

    <!-- start home -->
    <div class="container py-5">
      <div class="row">
        <div class="col-md-7">
          <div class="container">
            <div class="row" id="cards-holder">
              <div class="col-md-6 col-12 mt-md-4 mt-3" v-for="x in 6" :key="x">
                <HomeDetailCard />
              </div>
            </div>
            <!-- start pagination -->
            <div class="col-12 mt-3">
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center" id="navigation-holder">
                  <li class="page-item disabled">
                    <a class="page-link">Previous</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">1</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">2</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">3</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
            <!-- end pagination -->
          </div>
        </div>
        <div class="col-md-5">
          <div id="map_right_listing" class="h-full" style="width: 400px; height: 500px;"></div>
        </div>
      </div>
    </div>
    <!-- end home -->
  </div>
</template>
<script>
// import map.js file
import { initMap } from "@/assets/js/map.js";
// @ is an alias to /src
import HomeDetailCard from "@/components/HomeDetailCard.vue";
// Import Swiper Vue.js components
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default {
  name: "HomeView",
  components: {
    HomeDetailCard,
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

select,
input {
  background: radial-gradient(100% 359.18% at 0% 0%,
      rgba(255, 255, 255, 0.18) 0%,
      rgba(255, 255, 255, 0.03) 100%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(15px);
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
}

.header h1,
.header p {
  color: #fff;
}

.search_box {
  background: radial-gradient(100% 359.18% at 0% 0%,
      rgba(255, 255, 255, 0.18) 0%,
      rgba(255, 255, 255, 0.03) 100%);
  /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
  border: 1.4636px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0px 29.2719px 58.5439px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(21.9539px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 11.7088px;
}

.search_btn {
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
</style>
