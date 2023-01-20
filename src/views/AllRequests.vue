<template>
  <div class="allReq light_grey_bg">
    <div class="container py-3">
      <div class="row">
        <div class="col-12">
          <div class="white_box px-3 py-5">
            <div class="container">
              <div class="row">
                <div class="col-9">
                  <div class="d-flex align-items-start">
                    <router-link to="/profile">
                      <img
                        src="@/assets/images/Vector.png"
                        alt=".."
                        class="img-fluid me-3 back"
                    /></router-link>
                    <h4 class="mid_grey">
                      128 Fawn ST Nation, Ontario, K0a 2M0
                    </h4>
                  </div>
                </div>
                <div class="col-3">
                  <div class="d-flex justify-content-end align-items-center">
                    <img
                      src="@/assets/images/trash.png"
                      class="img-fluid trash"
                      alt=".."
                    />
                    <img
                      src="@/assets/images/edit.png"
                      class="img-fluid trash ms-1"
                      alt=".."
                    />
                  </div>
                </div>
              </div>
              <div class="row mt-4">
                <div
                  class="col-lg-3 col-md-4 col-12 mt-4"
                  v-for="x in 8"
                  :key="x"
                >
                  <div
                    class="req_box p-3 d-flex flex-column justify-content-center align-items-center"
                  >
                    <img
                      src="@/assets/images/notification-lg.png"
                      alt=".."
                      class="img-fluid"
                    />
                    <span class="capitalize"> reem yasser </span>
                    <span class="light_grey capitalize">ui/ux designer</span>
                    <router-link
                      to="/personalInfo"
                      class="main_color capitalize"
                      >view all info</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.back,
.trash {
  width: 25px;
}
.req_box {
  background: #ffffff;
  box-shadow: 0px 18.8017px 47.0043px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
}
@media (max-width: 767.98px) {
  h4 {
    font-size: 1.1em;
  }
}
</style>
