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
                      />
                    </div>
                  </div>
                  <div class="col-md-6 col-6">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="rent"
                      />
                      <label class="form-check-label" for="inlineFormCheck">
                        Rent
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="sale"
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41266661.93352347!2d-61.79051155799839!3d50.85492169779694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2z2YPZhtiv2Kc!5e0!3m2!1sar!2seg!4v1673650676527!5m2!1sar!2seg"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    <!-- end home -->
  </div>
</template>

<script>
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
