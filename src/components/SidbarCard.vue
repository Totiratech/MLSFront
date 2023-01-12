<template>
  <div class="card sidebarcard">
    <img
      src="@/assets/images/sidebarCard.png"
      class="card-img-top"
      alt="house image" />
    <div class="card-body">
      <h5 class="card-title d-flex justify-content-between">
        <h2 class="eprice main_color">99.000$</h2>
        <div class="actions">
            <font-awesome-icon icon="fa-thin fa-heart" />
            <span>Rent</span>
        </div>
      </h5>
      <p class="card-text elocation">
        <font-awesome-icon icon="fa-light fa-location-dot" />
        128 Fawn ST Nation, Ontario, K0a 2M0
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FindHome",
};
</script>

<style lang="scss" scoped>
.sidebarcard {
  width: 356px;
  height: 650px;
  border-radius: 8px;
  img {
    width: 356px;
    height: 400px;
  }
  .card-text {
    overflow-wrap: break-word;
  }
  .card-body{
    background: #ffffff;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.15);
  }
}
@media (min-width: 1410px) {
  .sidebarcard {
    width: 416px;

    img {
      width: 416px;
    }
  }
}
</style>
