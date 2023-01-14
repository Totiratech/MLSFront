<template>
  <div class="login">
    <div class="container py-5">
      <div class="row">
        <div class="col-12">
          <div class="form_holder">
            <div class="row scroll_row w-100 mx-0">
              <div class="col-md-5 d-none d-md-block">
                <img
                  src="@/assets/images/auth-img.png"
                  alt=".."
                  class="img-fluid"
                />
              </div>
              <div class="col-md-5 d-md-none d-block">
                <img
                  src="@/assets/images/auth-mob-img.png"
                  alt=".."
                  class="img-fluid"
                />
              </div>
              <div class="col-md-7">
                <div class="container py-3 pe-3">
                  <div class="row">
                    <div class="col-12 text-end">
                      <router-link to="/login" class="mid_grey"
                        >Login</router-link
                      >
                    </div>
                    <div class="col-12">
                      <b class="main_color">Sign Up</b><br />
                      <span class="light_grey small_font"
                        >List your property, and we will take care of the
                        rest.</span
                      >
                      <div class="login-box mt-4 sign_up">
                        <form>
                          <div class="row">
                            <div class="col-md-6">
                              <div class="user-box">
                                <input type="text" />
                                <label class="capitalize mid_grey">
                                  first name</label
                                >
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="user-box">
                                <input type="text" class="mb-2" />
                                <label class="capitalize mid_grey">
                                  last name</label
                                >
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="user-box">
                                <input type="email" />
                                <label class="capitalize mid_grey">
                                  email</label
                                >
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="user-box">
                                <input type="text" />
                                <label class="capitalize mid_grey">
                                  number</label
                                >
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="user-box">
                                <input type="text" />
                                <label class="capitalize mid_grey">
                                  country</label
                                >
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="user-box">
                                <input type="password" />
                                <label class="capitalize mid_grey">
                                  password</label
                                >
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div class="user-box">
                                <input type="password" />
                                <label class="capitalize mid_grey">
                                  confirm password</label
                                >
                              </div>
                            </div>
                            <div class="col-md-12 d-flex align-items-center">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                id="terms"
                              />
                              <label for="terms" class="ps-2"
                                >I Agree to
                                <router-link
                                  to="/"
                                  class="main_color capitalize"
                                  >terms and condition</router-link
                                ></label
                              >
                            </div>
                            <div class="col-12 text-center pt-4">
                              <div class="d-grid gap-2 col-8 mx-auto">
                                <button
                                  type="button"
                                  class="btn btn-lg main_btn px-5"
                                >
                                  Sign up
                                </button>
                              </div>
                              <p class="mid_grey capitalize pt-3 small_font">
                                already have an account ?
                                <router-link to="/login" class="main_color"
                                  >Login</router-link
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
a.main_color {
  text-decoration: none;
}
.form_holder .scroll_row {
  height: calc(100vh - 3rem - 100px);
  overflow: hidden;
}
.scroll_row .col-md-5,
.scroll_row .col-md-7 {
  height: 100%;
}
.scroll_row img {
  height: 100%;
  width: 100%;
  max-width: initial;
  object-fit: contain;
  object-position: top;
}
.scroll_row .col-md-7 {
  overflow: auto;
}
/* start media */
@media (max-width: 767.98px) {
  .form_holder .scroll_row {
    height: unset;
    overflow: unset;
  }
}
</style>
