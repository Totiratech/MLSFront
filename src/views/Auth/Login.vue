<template>
  <div class="login light_grey_bg">
    <div class="container py-5">
      <div class="row">
        <div class="col-12">
          <div class="form_holder white_box">
            <div class="row w-100 mx-0">
              <div class="col-md-5 d-none d-md-block">
                <img
                  src="@/assets/images/auth-img.png"
                  alt=".."
                  class="img-fluid" />
              </div>
              <div class="col-md-5 d-md-none d-block">
                <img
                  src="@/assets/images/auth-mob-img.png"
                  alt=".."
                  class="img-fluid" />
              </div>
              <div class="col-md-7">
                <div class="container py-3 pe-3">
                  <div class="row">
                    <div class="col-12 text-end">
                      <router-link to="/Signup" class="mid_grey"
                        >Signup</router-link
                      >
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
                                <input
                                  type="email"
                                  class="mb-1"
                                  v-model="$v.email.$model" />
                                <label class="capitalize mid_grey">
                                  Email/Number</label
                                >
                              </div>
                              <p
                                v-if="$v.email.$error"
                                class="main_color small_font mb-0">
                                {{ this.required }}
                              </p>
                            </div>
                            <div class="col-md-12 mt-4">
                              <div class="user-box">
                                <input
                                  id="password-field"
                                  type="text"
                                  class="mb-1"
                                  v-model="$v.password.$model" />
                                <span
                                  toggle="#password-field"
                                  class="fa fa-fw fa-eye field-icon toggle-password"></span>
                                <label class="capitalize mid_grey">
                                  Password</label
                                >
                              </div>
                              <p
                                v-if="$v.password.$error"
                                class="main_color small_font mb-0">
                                {{ this.required }}
                              </p>
                            </div>
                            <div
                              class="col-md-6 d-flex align-items-center mt-2">
                              <input
                                class="form-check-input mt-0"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                                id="remeber" />
                              <label for="remeber" class="ps-2"
                                >Remeber Me</label
                              >
                            </div>
                            <div class="col-md-6 d-flex justify-content-end">
                              <router-link
                                to="/forgetPassword"
                                class="main_color capitalize small_font">
                                forget your password ?</router-link
                              >
                            </div>
                            <div class="col-12 text-center pt-4">
                              <div class="d-grid gap-2 col-8 mx-auto">
                                <button
                                  type="button"
                                  class="btn btn-lg main_btn px-5"
                                  @click.prevent="login()">
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
<script>
import axios from "axios";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import $ from "jquery";
export default {
  mixins: [validationMixin],
  data() {
    return {
      email: "",
      password: "",
      required: "This input is required",
    };
  },
  validations: {
    email: {
      required,
    },

    password: {
      required,
    },
  },
  methods: {
    // login fn
    login() {
      const data = {
        email: this.email,
        password: this.password,
      };
      // check validation
      this.$v.$touch();
      if (!this.$v.$error) {
        axios
          .post("https://test.crimsonrose.a2hosted.com/api/login", data, {})
          .then((response) => {
            console.log(response.data.data.access_token);
            localStorage.setItem("userToken", response.data.data.access_token);
            window.location.href = "/";
          })
          .catch((errors) => {
            console.log(errors);
          });
      }
    },
  },
  mounted() {
    function showpass() {
      $(".toggle-password").click(function () {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
          input.attr("type", "text");
        } else {
          input.attr("type", "password");
        }
      });
    }

    showpass();
  },
};
</script>

<style scoped>
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
.field-icon {
  float: right;
  margin-left: -25px;
  margin-top: 15px;
  position: relative;
  z-index: 2;
}
</style>
