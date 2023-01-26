<template>
  <div class="personal_info light_grey_bg">
    <div class="container py-5">
      <div class="row">
        <div class="col-12">
          <div class="white_box p-4">
            <div class="container">
              <form>
                <div class="row">
                  <div class="col-8">
                    <div class="d-flex align-items-center">
                      <router-link to="/allRequests">
                        <img
                          src="@/assets/images/Vector.png"
                          alt=".."
                          class="img-fluid me-3 back"
                      /></router-link>
                      <h4 class="mid_grey mb-0">Personal info</h4>
                    </div>
                  </div>
                  <div
                    class="col-4 d-flex align-items-center justify-content-end"
                  >
                    <button type="button" class="btn btn-lg main_btn px-5">
                      Approve
                    </button>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="fname" class="form-label capitalize small_font"
                      >first name</label
                    >
                    <input type="text" class="form-control" id="fname" />
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="job" class="form-label capitalize small_font"
                      >job</label
                    >
                    <input type="text" class="form-control" id="job" />
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="sName" class="form-label capitalize small_font"
                      >second name</label
                    >
                    <input type="text" class="form-control" id="sName" />
                  </div>
                  <div class="col-md-6 mb-3">
                    <label
                      for="company"
                      class="form-label capitalize small_font"
                      >company</label
                    >
                    <input type="text" class="form-control" id="company" />
                  </div>
                  <div class="col-12 mt-2">
                    <h5 class="mid_grey capitalize pb-1">contact info</h5>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="number" class="form-label capitalize small_font"
                      >number</label
                    >
                    <input type="text" class="form-control" id="number" />
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="email" class="form-label capitalize small_font"
                      >email</label
                    >
                    <input type="email" class="form-control" id="email" />
                  </div>
                  <div class="col-12 mt-2">
                    <h5 class="mid_grey capitalize pb-1">address</h5>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="unit" class="form-label capitalize small_font"
                      >unit</label
                    >
                    <input type="text" class="form-control" id="unit" />
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="city" class="form-label capitalize small_font"
                      >city/town</label
                    >
                    <input type="text" class="form-control" id="city" />
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="code" class="form-label capitalize small_font"
                      >postal/ZIP code</label
                    >
                    <input type="text" class="form-control" id="code" />
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="box" class="form-label capitalize small_font"
                      >PO box</label
                    >
                    <input type="text" class="form-control" id="box" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.back {
  width: 25px;
}
</style>
