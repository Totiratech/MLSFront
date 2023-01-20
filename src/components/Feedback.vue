<template>
  <div class="feedback">
    <div class="card">
      <div class="card-body py-3">
        <div class="container">
          <div class="row">
            <div class="col-6 text-start">
              <span class="capitalize">great work</span>
            </div>
            <div class="col-6 text-end">
              <font-awesome-icon
                icon="fa-solid fa-star"
                class="colored_star"
                v-for="x in 5"
                :key="x"
              />
            </div>
            <div class="col-12 text-start py-4">
              <span>
                Explore our listingsExplore our listingsExplore our listings
              </span>
            </div>
            <div class="d-flex justify-content-start">
              <img
                src="@/assets/images/user.jpg"
                class="img-fluid rounded_img"
                alt="user"
              />
              <div
                class="d-flex flex-column justify-content-start align-items-start ps-3"
              >
                <span class="username capitalize">khalid ali</span>
                <span class="capitalize">Banker</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "feedback",
};
</script>
<style scoped>
.colored_star {
  color: #ffbc00;
}
.rounded_img {
  border-radius: 50%;
  width: 50px;
}
.username {
  font-weight: 500;
}
</style>
