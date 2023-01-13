<template>
  <div class="login">
    <div class="container py-5">
      <div class="row">
        <div class="col-12">
          <div class="form_holder">
            <div class="row w-100 mx-0">
              <div class="col-md-5">
                <img
                  src="@/assets/images/auth-img.png"
                  alt=".."
                  class="img-fluid"
                />
              </div>
              <div class="col-md-7">
                <div class="container py-3 pe-3">
                  <div class="row">
                    <div class="col-12 text-end">
                      <router-link to="/" class="mid_grey">Signup</router-link>
                    </div>
                    <div class="col-12">
                      <b class="main_color">Login</b><br />
                      <span class="light_grey small_font"
                        >Welcome Back! Login for latest property listings.</span
                      >
                      <div class="login-box mt-4">
                        <form>
                          <div class="row">
                            <div class="col-md-12">
                              <div class="user-box">
                                <input type="email" />
                                <label class="capitalize mid_grey">
                                  Email/Number</label
                                >
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="user-box">
                                <input type="text" />
                                <label class="capitalize mid_grey">
                                  Password</label
                                >
                              </div>
                            </div>
                            <div class="col-12 text-center">
                              <div class="d-grid gap-2 col-8 mx-auto">
                                <button
                                  type="button"
                                  class="btn btn-lg main_btn px-5"
                                >
                                  Login
                                </button>
                              </div>
                              <p class="mid_grey capitalize pt-3 small_font">
                                Do not have an account?
                                <router-link to="/Signup" class="main_color"
                                  >Signup</router-link
                                >
                              </p>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
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
.login {
  background-color: #f6f8f9;
}
b.main_color {
  font-size: 1.5em;
}
label.mid_grey,
p.mid_grey {
  font-weight: 500;
}
p .main_color {
  text-decoration: none;
}
</style>
