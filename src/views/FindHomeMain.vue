<template>
  <div class="findHome">
    <!-- start header -->
    <div class="header py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6 d-flex align-items-center">
            <div class="text-start d-flex flex-column">
              <h1 class="capitalize">find dream home</h1>
              <p>
                Crimson Rose will take your hassle out and simplify your entire
                Rental/Leasing process
              </p>
              <form
                class="search-container"
                action="//llamaswill.tumblr.com/search"
              >
                <input
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
                <input type="submit" id="search-submit" />
              </form>
            </div>
          </div>
          <div class="col-md-6">
            <img
              src="@/assets/images/findHome.png"
              class="img-fluid"
              alt=".."
            />
          </div>
        </div>
      </div>
    </div>
    <!-- end header -->

    <!-- start home -->
    <div class="container py-5">
      <div class="row">
        <div
          class="col-lg-3 col-md-4 col-12 mt-md-4 mt-3"
          v-for="x in 12"
          :key="x"
        >
          <HomeDetailCard />
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
h1,
h2,
h3,
h4,
h5 {
  font-family: "Literata-Regular";
}
.header {
  background-color: #000;
}
.header h1,
.header p {
  color: #fff;
}
.search-box {
  transition: width 0.6s, border-radius 0.6s, background 0.6s, box-shadow 0.6s;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  background: radial-gradient(
    100% 359.18% at 0% 0%,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(255, 255, 255, 0.03) 100%
  );
}
.search-box + label .search-icon {
  color: #fff;
}
.search-box:hover {
  color: white;
  background: radial-gradient(
    100% 359.18% at 0% 0%,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(255, 255, 255, 0.03) 100%
  );
}
.search-box:hover + label .search-icon {
  color: white;
}
.search-box:focus {
  transition: width 0.6s cubic-bezier(0, 1.22, 0.66, 1.39), border-radius 0.6s,
    background 0.6s;
  border: none;
  outline: none;
  box-shadow: none;
  padding-left: 15px;
  cursor: text;
  width: 300px;
  border-radius: auto;
  background: radial-gradient(
    100% 359.18% at 0% 0%,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(255, 255, 255, 0.03) 100%
  );
  color: #fff;
}
.search-box:focus + label .search-icon {
  color: #fff;
}
.search-box:not(:focus) {
  text-indent: -5000px;
}

#search-submit {
  position: relative;
  left: -5000px;
}

.search-icon {
  position: relative;
  left: -30px;
  color: white;
  cursor: pointer;
}
</style>
