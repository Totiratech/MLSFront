<template>
  <div id="findhome" class="py-3">
    <div class="container loader_container" v-if="loading">
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
    <div class="container" v-else>
      <div class="row">
        <!--left side-->
        <div class="col-lg-8 col-md-12">
          <div class="content">
            <!-- propertyDetails -->
            <div class="propertyDetails">
              <h2 class="main_color">
                <font-awesome-icon icon="fa-solid fa-house-chimney" />
                Property Details
                <!-- {{ prop.property_info.Ad_text }} -->
              </h2>
              <div class="propDes" v-if="prop.property_info.Ad_text">
                <h4 class="headingSec">Description</h4>
                <p>
                  {{ prop.property_info.Ad_text }}
                </p>
              </div>
            </div>
            <!-- 3D Tour or Video -->
            <div class="videotour">
              <h4 class="headingSec">3D Tour or Video</h4>
              <div class="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                  title="YouTube video"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <!-- photo Gallery -->
            <div class="LightBox-Gallary">
              <h4 class="headingSec">Photos</h4>
              <lightbox css="itemphoto" :items="images" :cells="4"></lightbox>
            </div>
            <!--Agent Information-->
            <div
              class="propertytables table-responsive"
              v-if="prop.property_info.Rltr"
            >
              <table class="table">
                <thead>
                  <th>Agent Information</th>
                </thead>
                <tbody>
                  <tr>
                    <td class="main_color">
                      {{ prop.property_info.Rltr }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--Property Details-->
            <div class="propertydetails">
              <h4 class="headingSec">Property Details</h4>
              <div class="propertytables table-responsive">
                <table class="table">
                  <thead>
                    <th>Property MLS</th>
                    <th>Property Type</th>
                    <th>Property Price</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{{ prop.mls }}</td>
                      <td>{{ prop.property_info.Style }}</td>
                      <td>389,000$</td>
                    </tr>
                    <tr class="thead">
                      <th>Parking Type</th>
                      <th colspan="2">Annual Property Taxes</th>
                    </tr>
                    <tr>
                      <td>{{ prop.property_info.Gar_type }}</td>
                      <td colspan="2">{{ prop.property_info.Taxes }}$</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- map location -->
            <div class="maplocation">
              <h4 class="headingSec">Location on maps</h4>
              <iframe
                :src="
                  'https://maps.google.com/maps?q=' +
                  prop.property_info.lat +
                  ',' +
                  prop.property_info.lng +
                  '&z=15&output=embed'
                "
                width="100%"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                disableDefaultUI="disableDefaultUI"
              ></iframe>
            </div>
            <!--Building Details-->
            <div class="buildingdeta">
              <h4 class="headingSec">Building Details</h4>
              <div class="propertytables table-responsive">
                <table class="table">
                  <thead>
                    <th>Cooling</th>
                    <th>Heating</th>
                    <th>Bedrooms</th>
                    <th>Bathrooms</th>
                    <th>Bedrooms Plus</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{{ prop.property_info.Constr1_out }}</td>
                      <td>{{ prop.property_info.Bsmt1_out }}</td>
                      <td>{{ prop.property_info.Br }}</td>
                      <td>{{ prop.property_info.Bath_tot }}</td>
                      <td>{{ prop.property_info.Br_plus }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!--Exterior Features-->
            <div class="Exterior">
              <h4 class="headingSec">Exterior Features</h4>
              <div class="propertytables table-responsive">
                <table class="table">
                  <thead>
                    <th>Exterior Finish</th>
                    <th>Basement</th>
                    <th>Secondry Basement</th>
                    <th>Sewer</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{{ prop.property_info.Constr1_out }}</td>
                      <td>{{ prop.property_info.Bsmt1_out }}</td>
                      <td>{{ prop.property_info.Bsmt2_out }}</td>
                      <td>{{ prop.property_info.Sewer }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!--Rooms Details-->
            <div class="Roomsdeta">
              <h4 class="headingSec">Rooms Details</h4>
              <div class="propertytables table-responsive">
                <table class="table">
                  <thead>
                    <th>Room</th>
                    <th>Dimensions</th>
                    <th>Description</th>
                  </thead>
                  <tbody>
                    <tr v-if="prop.property_info.Rm1_out">
                      <td class="th">{{ prop.property_info.Rm1_out }}</td>
                      <td>
                        {{ prop.property_info.Rm1_len }} m X
                        {{ prop.property_info.Rm1_wth }} m
                      </td>
                      <td>{{ prop.property_info.Rm1_dc1_out }}</td>
                    </tr>
                    <tr v-if="prop.property_info.Rm2_out">
                      <td class="th">{{ prop.property_info.Rm2_out }}</td>
                      <td>
                        {{ prop.property_info.Rm2_len }} m X
                        {{ prop.property_info.Rm2_wth }} m
                      </td>
                      <td>{{ prop.property_info.Rm2_dc1_out }}</td>
                    </tr>
                    <tr v-if="prop.property_info.Rm3_out">
                      <td class="th">{{ prop.property_info.Rm3_out }}</td>
                      <td>
                        {{ prop.property_info.Rm3_len }} m X
                        {{ prop.property_info.Rm3_wth }} m
                      </td>
                      <td>{{ prop.property_info.Rm3_dc1_out }}</td>
                    </tr>
                    <tr v-if="prop.property_info.Rm4_out">
                      <td class="th">{{ prop.property_info.Rm4_out }}</td>
                      <td>
                        {{ prop.property_info.Rm4_len }} m X
                        {{ prop.property_info.Rm4_wth }} m
                      </td>
                      <td>{{ prop.property_info.Rm4_dc1_out }}</td>
                    </tr>
                    <tr v-if="prop.property_info.Rm5_out">
                      <td class="th">{{ prop.property_info.Rm5_out }}</td>
                      <td>
                        {{ prop.property_info.Rm5_len }} m X
                        {{ prop.property_info.Rm5_wth }} m
                      </td>
                      <td>{{ prop.property_info.Rm5_dc1_out }}</td>
                    </tr>
                    <tr v-if="prop.property_info.Rm6_out">
                      <td class="th">{{ prop.property_info.Rm6_out }}</td>
                      <td>
                        {{ prop.property_info.Rm6_len }} m X
                        {{ prop.property_info.Rm6_wth }} m
                      </td>
                      <td>{{ prop.property_info.Rm6_dc1_out }}</td>
                    </tr>
                    <tr v-if="prop.property_info.Rm7_out">
                      <td class="th">{{ prop.property_info.Rm7_out }}</td>
                      <td>
                        {{ prop.property_info.Rm7_len }} m X
                        {{ prop.property_info.Rm7_wth }} m
                      </td>
                      <td>{{ prop.property_info.Rm7_dc1_out }}</td>
                    </tr>
                    <tr v-if="prop.property_info.Rm8_out">
                      <td class="th">{{ prop.property_info.Rm8_out }}</td>
                      <td>
                        {{ prop.property_info.Rm8_len }} m X
                        {{ prop.property_info.Rm8_wth }} m
                      </td>
                      <td>{{ prop.property_info.Rm8_dc1_out }}</td>
                    </tr>
                    <tr v-if="prop.property_info.Rm9_out">
                      <td class="th">{{ prop.property_info.Rm9_out }}</td>
                      <td>
                        {{ prop.property_info.Rm9_len }} m X
                        {{ prop.property_info.Rm9_wth }} m
                      </td>
                      <td>{{ prop.property_info.Rm9_dc1_out }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!--Amenities & Neighbourhood Features -->
            <div class="neighfeature">
              <h4 class="headingSec mb-4">
                Amenities & Neighbourhood Features
              </h4>
              <!-- <div> -->
              <div ref="amenities_swiper" class="swiper">
                <div class="swiper-wrapper">
                  <div
                    class="swiper-slide"
                    v-for="(el, index) in amenities"
                    :key="index"
                  >
                    <div class="featureicon">
                      <img
                        v-if="el == 'Fireplace/Stove'"
                        src="`/images/am-icons/Fireplace-Stove.png`"
                      />
                      <img
                        v-else
                        :src="`/images/am-icons/${el.replaceAll(' ', '-')}.png`"
                      />
                    </div>
                    <span>{{ el }}</span>
                  </div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-scrollbar"></div>
              </div>
              <!-- </div> -->

              <!-- <div class="row">
                <div
                  class="col-md-3 feature mt-3"
                  v-for="(el, index) in amenities"
                  :key="index"
                >
                  <div class="featureicon">
                    <img
                      v-if="el == 'Fireplace/Stove'"
                      src="`/images/am-icons/Fireplace-Stove.png`"
                    />
                    <img
                      v-else
                      :src="`/images/am-icons/${el.replaceAll(' ', '-')}.png`"
                    />
                  </div>
                  <span>{{ el }}</span>
                </div>
              </div> -->
            </div>
            <div class="morethan mt-5">
              <h1 class="my-5 pt-5">More like this</h1>
              <div class="row">
                <div
                  class="col-md-6 mb-4"
                  v-for="(relProp, index) in relatedProp"
                  :key="`relProp${index}`"
                >
                  <HomeDetailCard :home="relProp" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--right side (sticky card)-->
        <div class="col-lg-4 col-md-12">
          <div class="sidbar sticky-top">
            <div class="card sidebarcard mx-auto mt-2">
              <div class="img_container_full">
                <img
                  :src="images[0]"
                  class="card-img-top img-fluid"
                  alt="house image"
                />
              </div>

              <div class="card-body pe-0">
                <div
                  class="card-title d-flex justify-content-between align-items-center"
                >
                  <h3 class="eprice main_color">
                    ${{ prop.property_info.Orig_dol }}
                  </h3>
                  <div class="actions">
                    <a
                      href="#"
                      class="makeFav"
                      @click.prevent="addFav()"
                      :class="{ active: isActive }"
                    >
                      <font-awesome-icon icon="fa-solid fa-heart" />
                    </a>

                    <span>{{ prop.property_info.S_r }}</span>
                  </div>
                </div>
                <div class="location d-flex mb-3">
                  <font-awesome-icon icon="fa-solid fa-location-dot" />
                  <p class="card-text elocation">
                    {{ prop.property_info.Addr }}, {{ prop.property_info.Area }}
                  </p>
                </div>
                <div class="d-flex justify-content-center">
                  <button
                    class="btn main_btn px-5"
                    data-bs-toggle="modal"
                    data-bs-target="#rent"
                    @click.prevent="applyRent()"
                  >
                    Apply To Rent
                  </button>
                </div>

                <!-- <a
                  href="#"
                  class="btn btn-crimson mb-3"
                  data-bs-toggle="modal"
                  data-bs-target="#rent"
                  >Add To Rent</a
                > -->
              </div>
            </div>
          </div>

          <!--Rent Modal -->
          <div
            class="modal fade"
            id="rent"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div
                  class="modal-body d-flex flex-column justify-content-center align-items-center"
                >
                  <img
                    src="@/assets/images/tick.gif"
                    alt=""
                    class="img-fluid success"
                  />
                  <p class="lg_font">
                    Your application has been successfully submitted
                  </p>
                  <router-link
                    to="/"
                    class="btn main_btn px-5 mb-4 lg_font capitalize"
                    data-bs-dismiss="modal"
                  >
                    Back to home
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <!--Error Rent Modal -->
          <div
            class="modal fade"
            id="errRent"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div
                  class="modal-body d-flex flex-column justify-content-center align-items-center"
                >
                  <img
                    src="@/assets/images/errorrent.gif"
                    alt=""
                    class="img-fluid error"
                  />
                  <p class="lg_font">
                    You will not be able to place an offer if you do not
                    complete your basic information
                  </p>
                  <button type="button" class="btn main_btn px-5 lg_font mb-4">
                    Complete it now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* import layout */
import AppHeader from "@/components/global/AppHeader.vue";
/* homedetailscard */
import HomeDetailCard from "@/components/HomeDetailCard.vue";

import AppFooter from "@/components/global/AppFooter.vue";
import Vue from "vue";

import $ from "jquery";

import axios from "axios";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
/* lightbox  */
import "@morioh/v-lightbox/dist/lightbox.css";
import Lightbox from "@morioh/v-lightbox";
// global register
Vue.use(Lightbox);

export default {
  name: "FindHome",
  data() {
    return {
      isActive: false,
      type: this.$route.params.type,
      ml_num: this.$route.params.ml_num,
      userID: "",
      prop: [],
      amenities: [],
      relatedProp: [],
      option: "remove",
      loading: true,
      url_img: "https://totira2.crimsonrose.a2hosted.com/images/",
    };
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
  components: {
    AppHeader,
    HomeDetailCard,
    AppFooter,
  },

  mounted() {
    this.getUserID();
    axios
      .get(
        "https://test.crimsonrose.a2hosted.com/api/property/show/" +
          this.type +
          "/" +
          this.ml_num
      )
      .then((response) => {
        this.loading = false;
        this.prop = response.data;
        this.amenities = response.data.amenities;
        this.relatedProp = response.data.related_properties;
        console.log("am", this.amenities);
        // swiper for aminites

        // let _arr = [];
        // for (const key in amenities) {
        //   _arr.push(amenities[key]);
        // }
        // this.amenities = _arr;
        // console.log("am", this.amenities);
        let images = [];
        Object.values(response.data.images).forEach((value) => {
          images.push(value);
        });
        this.images = images;

        //window.location.href = "/Login";
      });
  },

  methods: {
    // get user id
    getUserID() {
      axios
        .post("getProfile")
        .then((response) => {
          this.userID = response.data.id;
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
    /* make fav item */
    addFav(e) {
      this.isActive = !this.isActive;
      if (this.option == "remove") {
        this.option = "add";
      } else {
        this.option = "remove";
      }
      const data = {
        uid: this.userID,
        mls: this.prop.mls,
        type: "rent",
        option: this.option,
      };
      axios
        .post("addFavourites", data)
        .then((response) => {
          console.log(response);
        })
        .catch((errors) => {
          console.log(errors);
        });
    },

    // apply to rent
    applyRent() {
      axios
        .post("submitRent/" + this.prop.property_info.id)
        .then((response) => {
          console.log("rent", response);
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.img_container_full img {
  object-fit: contain;
  margin: auto;
  display: block;
  width: auto;
  height: 250px;
  padding: 15px;
}
.loader_container {
  height: 300px;
}
.loader_container div {
  height: 100%;
}
.sticky-top {
  top: 10%;
}

.feature_icon {
  width: 50px;
}

.success,
.error {
  width: 250px;
}

.headingSec {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-transform: capitalize;
  color: #626262;
  margin-bottom: 24px;
}

#findhome {
  /* left side (the content) */
  .content {
    padding-top: 70px;

    /* property details section */
    .propertyDetails {
      margin-bottom: 60px;

      h2 {
        margin-bottom: 60px;
        font-style: normal;
        text-transform: capitalize;

        path {
          fill: transparent;
          stroke: #b5121b;
          stroke-width: 20px;
        }
      }

      .propDes {
        p {
          font-style: normal;
          text-transform: capitalize;
          overflow-wrap: break-word;
          color: #292953;
        }
      }
    }

    /* 3d tour & video  */
    .videotour {
      iframe {
        background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.4),
          rgba(0, 0, 0, 0.4)
        );
        box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
      }
    }

    /* tables */
    .propertytables {
      border-radius: 8px;
      border: 1px solid #f5f5f5;
      margin-bottom: 60px;
    }

    .propertytables .table {
      margin-bottom: 0;
    }

    .propertytables thead,
    .propertytables .thead {
      background: #f5f5f5;
    }

    .propertytables th,
    .propertytables td {
      padding: 20px 30px;
      border: 0;
    }

    .Roomsdeta .propertytables td {
      color: #a1a1a5;
    }

    .propertytables td,
    .Roomsdeta .propertytables .th {
      color: #b5121b;
    }

    .propertytables thead th,
    .propertytables td,
    .propertytables th,
    .propertytables .th {
      font-style: normal;
      font-weight: 500;
      text-transform: capitalize;
    }

    .propertytables thead th {
      color: #000000;
    }

    /* features */
    .neighfeature {
      .feature {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .featureicon {
        background: #ffffff;
        box-shadow: 0px 0px 4px 1px rgb(0 0 0 / 15%);
        padding: 15px;
        border-radius: 50%;
        margin-bottom: 5px;
      }
      .featureicon img {
        max-width: 55px;
      }

      h5 {
        font-style: normal;
        text-transform: capitalize;
        color: #a1a1a5;
      }
    }

    .morethan {
      h1 {
        font-family: "Literata";
        font-style: normal;
        font-weight: 400;
        text-transform: capitalize;
        color: #000000;
      }

      .card-img,
      .card-img-top,
      .card {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
      }
    }

    .maplocation,
    .videotour,
    .LightBox-Gallary {
      margin-bottom: 64px;
    }
  }

  /* right side (sticky card) */
  .sidebarcard {
    width: 310px;
    height: auto !important;
    border-radius: 8px;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.15);
    background: #ffffff;

    .card-body {
      .makeFav {
        color: transparent;

        svg {
          stroke: #b5121b;
          stroke-width: 25px;
          fill: transparent;
          height: 22px;
        }

        &.active {
          color: #b5121b;
        }
      }

      .eprice {
        font-style: normal;
      }

      .actions {
        span {
          background: rgba(181, 18, 27, 0.5);
          border-radius: 3px 0px 0px 3px;
          font-style: normal;
          font-weight: 600;
          font-size: 19.0722px;
          line-height: 23px;
          padding: 3px 27px;
          color: #ffffff;
          margin-left: 15px;
        }
      }

      .location {
        padding-right: 20px;

        // margin: 30px 0;
        .card-text {
          overflow-wrap: break-word;
          font-style: normal;
          color: #000;
          text-align: left;
        }

        svg {
          margin-right: 12px;
          margin-top: 4px;

          path {
            fill: transparent;
            stroke: #000;
            stroke-width: 20px;
          }
        }
      }

      .btn-crimson {
        width: 306px;
        height: 48px;
      }
    }
  }

  .btn-crimson {
    background: #b5121b;
    border-radius: 4px;
    padding: 12px 0;
    margin-right: 20px;
    color: #fff;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-transform: capitalize;
  }

  .modal-body p {
    margin: 30px auto;
    font-style: normal;
    font-weight: 400;
    // font-size: 24px;
    // line-height: 29px;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: capitalize;
    color: #000000;
    width: 300px;
    overflow-wrap: break-word;
  }

  .modal-body .btn-crimson {
    width: 250px;
    height: 64px;
    margin: 0 auto;
    margin-bottom: 50px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
  }

  #errRent p {
    width: 400px;
  }
}

/* media */
@media (min-width: 1410px) {
  .sidebarcard {
    width: 416px;

    img {
      width: 416px;
    }
  }
}

@media (max-width: 767px) {
  #findhome .sidebarcard,
  #findhome .sidebarcard img {
    width: 100%;
  }
}
</style>
