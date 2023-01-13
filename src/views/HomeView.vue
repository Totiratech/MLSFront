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
    <div class="container slider pb-5">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="black_font pb-5">discover popular properties</h2>
          <div ref="swiper" class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="x in 6" :key="x">
                <HomeDetailCard />
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
            <div
              class="overlay d-flex flex-column justify-content-center align-items-center"
            >
              <b>OAKVILLE</b>
              <span>3 listings</span>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="img_list">
            <img src="@/assets/images/listings-2.png" class="img-fluid" />
            <div
              class="overlay d-flex flex-column justify-content-center align-items-center"
            >
              <b>OAKVILLE</b>
              <span>3 listings</span>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="img_list">
            <img src="@/assets/images/listings-3.png" class="img-fluid" />
            <div
              class="overlay d-flex flex-column justify-content-center align-items-center"
            >
              <b>OAKVILLE</b>
              <span>3 listings</span>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="img_list">
            <img src="@/assets/images/listings-4.png" class="img-fluid" />
            <div
              class="overlay d-flex flex-column justify-content-center align-items-center"
            >
              <b>OAKVILLE</b>
              <span>3 listings</span>
            </div>
          </div>
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
    <div class="container slider pb-5">
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
    <!-- end slider people living -->

    <!-- start suggested -->
    <div class="container pb-5">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="black_font pb-3 capitalize">Suggested for you</h2>
        </div>
        <div class="col-lg-3 col-md-4 mt-4" v-for="x in 8" :key="x">
          <HomeDetailCard />
        </div>
      </div>
    </div>
    <!-- end suggested -->

    <!-- start contact -->
    <div class="container pb-5">
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
                        <input type="text" />
                        <label class="capitalize light_grey">
                          <img
                            src="@/assets/images/profile-circle.png"
                            alt=".."
                            class="img-fluid pe-1"
                          />
                          Enter your name</label
                        >
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="user-box">
                        <input type="email" />
                        <label class="capitalize light_grey">
                          <img
                            src="@/assets/images/sms.png"
                            alt=".."
                            class="img-fluid pe-1"
                          />Enter your email</label
                        >
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="user-box">
                        <textarea rows="3"></textarea>
                        <label class="capitalize light_grey"
                          >your message</label
                        >
                      </div>
                    </div>
                    <div class="col-12 d-flex justify-content-end">
                      <button type="button" class="btn main_btn px-5">
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
import HomeDetailCard from "@/components/HomeDetailCard.vue";
import Feedback from "@/components/Feedback.vue";
// Import Swiper Vue.js components
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  name: "HomeView",
  components: {
    HomeDetailCard,
    Feedback,
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
.header {
  background-image: url(../assets/images/header-bg.png);
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
  background-image: url(http://localhost:8080/img/contact-bg.980b291a.png);
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
</style>
