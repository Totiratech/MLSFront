<template>
  <div class="card" v-if="home">
    <!-- {{ home }} -->
    <img
      src="@/assets/images/staticHome.png"
      class="card-img-top img-fluid"
      alt="..." />
    <div class="card-body pe-0">
      <div class="row pt-2">
        <div class="col-6 text-start">
          <span class="main_color price"> {{ home.Orig_dol }} $ </span>
        </div>
        <div class="col-6 d-flex align-items-center">
          <font-awesome-icon icon="fa-solid fa-heart" class="pe-2" />
          <!-- <div class="rent_bg text-center">
            <span>Rent</span>
          </div> -->
          <div class="sale_bg text-center">
            <span>{{ home.S_r }}</span>
          </div>
        </div>
        <div class="col-12 py-2 text-start">
          <div class="d-flex align-items-start black_font">
            <img
              src="@/assets/images/mapMarker.png"
              alt=".."
              class="img-fluid pt-1 pe-2" />
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
              class="img-fluid pe-2" />
            <span class="small_font capitalize">{{ home.Br }} beds</span>
          </div>
        </div>
        <div class="col-4">
          <div class="d-flex align-items-center">
            <img
              src="@/assets/images/dis.png"
              alt="..."
              class="img-fluid pe-2" />
            <span class="small_font capitalize">{{ homeDistance }} ft2</span>
          </div>
        </div>
        <div class="col-4">
          <div class="d-flex align-items-center">
            <img
              src="@/assets/images/bath.png"
              alt="..."
              class="img-fluid pe-2" />
            <span class="small_font capitalize">{{ home.Bath_tot }} baths</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "card",
  props: ["home"],
  computed: {
    homeDistance() {
      return parseFloat(this.home.distance).toFixed(0);
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
  font-size: 1.3em;
  font-family: "Lato-Regular";
}
.card {
  width: 100% !important;
}
.card-body .black_font .small_font {
  height: 50px;
}
.card .card-img-top {
  height: 266px;
}
</style>
