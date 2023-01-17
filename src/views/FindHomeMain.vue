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
                      <input
                        type="text"
                        class="form-control"
                        id="search"
                        placeholder="Search"
                        v-model="search"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 col-6">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        value="Lease"
                        type="radio"
                        id="rent"
                        v-model="property_status"
                      />
                      <label class="form-check-label" for="inlineFormCheck">
                        Rent
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        value="Sale"
                        type="radio"
                        id="sale"
                        v-model="property_status"
                      />
                      <label class="form-check-label" for="inlineFormCheck">
                        Sale
                      </label>
                    </div>
                  </div>

                  <div class="col-md-6 col-6">
                    <select
                      class="form-select mt-2"
                      aria-label="Default select example"
                    >
                      <option selected disabled class="capitalize">
                        residential
                      </option>
                      <option value="1">Rent</option>
                      <option value="2">Sale</option>
                    </select>
                  </div>

                  <div class="col-md-6 col-6">
                    <select
                      class="form-select mt-2"
                      aria-label="Default select example"
                    >
                      <option selected disabled class="capitalize">
                        location
                      </option>
                      <option value="1">Rent</option>
                      <option value="2">Sale</option>
                    </select>
                  </div>
                  <div class="col-md-6 col-6">
                    <select
                      class="form-select mt-2"
                      aria-label="Default select example"
                    >
                      <option selected disabled class="capitalize">
                        price
                      </option>
                      <option value="1">Rent</option>
                      <option value="2">Sale</option>
                    </select>
                  </div>
                  <div class="col-md-6 col-6">
                    <select
                      class="form-select mt-2"
                      aria-label="Default select example"
                    >
                      <option selected disabled class="capitalize">
                        baths
                      </option>
                      <option value="1">Rent</option>
                      <option value="2">Sale</option>
                    </select>
                  </div>
                  <div class="col-md-6 col-6">
                    <select
                      class="form-select mt-2"
                      aria-label="Default select example"
                    >
                      <option selected disabled class="capitalize">beds</option>
                      <option value="1">Rent</option>
                      <option value="2">Sale</option>
                    </select>
                  </div>

                  <div class="col-md-6 col-6">
                    <select
                      class="form-select mt-2"
                      aria-label="Default select example"
                    >
                      <option selected disabled>more features</option>
                      <option value="1">Rent</option>
                      <option value="2">Sale</option>
                    </select>
                  </div>

                  <div class="search_btn abs_pos">
                    <button class="btn">
                      <img
                        src="@/assets/images/last.png"
                        alt=".."
                        class="img-fluid search_icon"
                      />
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
            <div class="row">
              <div class="col-md-6 col-12 mt-md-4 mt-3" v-for="x in 6" :key="x">
                <HomeDetailCard />
              </div>
              <!-- start pagination -->
              <div class="col-12 mt-3">
                <nav aria-label="Page navigation example">
                  <ul class="pagination justify-content-center">
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
        </div>
        <div class="col-md-5">
          <GmapMap
            :center="{ lat: 10, lng: 10 }"
            :zoom="7"
            map-type-id="terrain"
            style="width: 500px; height: 300px"
          >
            <!--             <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true"
              :draggable="true" @click="center = m.position" /> -->
          </GmapMap>
        </div>
      </div>
    </div>
    <!-- end home -->
  </div>
</template>

<script>
// import map.js file
import "@/assets/js/map.js";
// @ is an alias to /src
import HomeDetailCard from "@/components/HomeDetailCard.vue";
// Import Swiper Vue.js components
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";

import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBOKejn9qrmXuRYLpx-zOBagbC1T0JDuik",
    libraries: "places", // This is required if you use the Autocomplete plugin
  },
});

export default {
  name: "HomeView",
  data() {
    return {
      search: "",
      property_status: "Sale",
    };
  },
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
    search();
    function search() {
      const data = {
        search: this.search,
        property_status: this.property_status,
      };
      console.log(data);
      axios
        .post("https://test.crimsonrose.a2hosted.com/api/search", data, {})
        .then((response) => {
          //console.log(response);
          //localStorage.setItem("userToken", response.data.data.access_token);
          // window.location.href = "/";
        })
        .catch((errors) => {
          console.log(errors);
        });
    }
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
  background: radial-gradient(
    100% 359.18% at 0% 0%,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(255, 255, 255, 0.03) 100%
  );
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

.search_btn {
  right: -60px;
}

.search_icon {
  width: 70px;
}
</style>
