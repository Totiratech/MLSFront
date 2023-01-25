<template>
  <div class="card" v-if="home">
    <router-link :to="`/find/${type}/${home.Ml_num}`" target="_blank">
      <!-- {{ home }} -->
      <!-- src="@/assets/images/staticHome.png" -->
      <!-- :style="{
          'background-image': 'url(' + img_url + '/' + home.Ml_num + '/0.jpg)',
        }" -->

      <div class="img_container">
        <img
          :src="img_url + '/' + home.Ml_num + '/0.jpg'"
          onerror="this.onerror=null; this.src='images/LOGO.png'"
          class="card-img-top img-fluid"
          alt="..."
        />
      </div>
      <div class="card-body pe-0">
        <div class="row pt-2 g-0">
          <div class="col-6">
            <span class="main_color price">$ {{ home.Orig_dol }}</span>
          </div>
          <div class="col-6 d-flex align-items-center">
            <font-awesome-icon
              icon="fa-solid fa-heart"
              class="pe-2 fav_icon"
              :class="{ fav: isFav }"
              @click.prevent="favouriteAction()"
            />
            <div
              class="rent_bg text-center"
              v-if="home.S_r == 'rent' || home.S_r == 'sale'"
            >
              <span>Rent</span>
            </div>
            <div class="sale_bg text-center" v-else>
              <span>{{ home.S_r }}</span>
            </div>
          </div>

          <div class="col-12 py-2 text-start">
            <div class="d-flex align-items-start black_font">
              <img
                src="@/assets/images/mapMarker.png"
                alt=".."
                class="img-fluid pt-1 pe-2"
              />
              <span class="small_font">
                {{
                  home.Addr +
                  ", " +
                  home.Municipality +
                  ", " +
                  home.County +
                  ", " +
                  home.Zip
                }}
              </span>
            </div>
          </div>
          <div class="col-4">
            <div class="d-flex align-items-center">
              <img
                src="@/assets/images/bed.png"
                alt="..."
                class="img-fluid pe-1"
              />
              <span class="small_font capitalize">{{ home.Br }} beds </span>
            </div>
          </div>
          <div class="col-4">
            <div class="d-flex align-items-center">
              <img
                src="@/assets/images/dis.png"
                alt="..."
                class="img-fluid pe-2"
              />
              <span class="small_font capitalize">{{ homeArea }} ft2</span>
            </div>
          </div>
          <div class="col-4">
            <div class="d-flex align-items-center">
              <img
                src="@/assets/images/bath.png"
                alt="..."
                class="img-fluid pe-1"
              />
              <span class="small_font capitalize"
                >{{ home.Bath_tot }} baths</span
              >
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
import axios from "axios";
import $ from "jquery";
export default {
  name: "card",
  props: ["home", "type", "pref", "property", "fav", "relProp"],
  data() {
    return {
      userID: "",
      option: "remove",
      isFav: this.home.is_fav ? this.home.is_fav : false,
      img_url: "https://totira2.crimsonrose.a2hosted.com/images/",
    };
  },
  computed: {
    homeArea() {
      return parseFloat(this.home.Front_ft * this.home.Depth).toFixed(0);
    },
  },
  mounted() {
    this.getUserID();
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
    // fav ation
    favouriteAction() {
      if (this.option == "remove") {
        this.option = "add";
        this.isFav = true;
        // $(".fav_icon").addClass("fav");
      } else {
        this.option = "remove";
        this.isFav = false;
        // $(".fav_icon").removeClass("fav");
      }
      const data = {
        uid: this.userID,
        mls: this.home.Ml_num,
        type: this.home.S_r,
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
  },
};
</script>
<style scoped>
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
  font-size: 1.2em;
  font-family: "Lato-Regular";
}
.card {
  width: 100% !important;
}
.fav {
  color: #b5121b;
}
.fa-heart {
  cursor: pointer;
}
a,
a:hover {
  color: unset;
  text-decoration: none;
}
</style>
