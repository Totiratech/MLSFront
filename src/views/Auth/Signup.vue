<template>
  <div class="login light_grey_bg">
    <div class="container py-5">
      <div class="row">
        <div class="col-12">
          <div class="form_holder white_box">
            <div class="row scroll_row w-100 mx-0">
              <div class="col-md-5 d-none d-md-block">
                <img src="@/assets/images/auth-img.png" alt=".." class="img-fluid" />
              </div>
              <div class="col-md-5 d-md-none d-block">
                <img src="@/assets/images/auth-mob-img.png" alt=".." class="img-fluid" />
              </div>
              <div class="col-md-7">
                <div class="container py-3 pe-3">
                  <div class="row">
                    <div class="col-12 text-end">
                      <router-link to="/login" class="mid_grey">Login</router-link>
                    </div>
                    <div class="col-12">
                      <b class="main_color">Sign Up</b><br />
                      <span class="light_grey small_font">List your property, and we will take care of the
                        rest.</span>
                      <div class="login-box mt-4 sign_up">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="user-box">
                              <input type="text" v-model="$v.fname.$model" />
                              <label class="capitalize mid_grey">
                                first name</label>
                            </div>
                            <p v-if="$v.fname.$error" class="main_color small_font mb-0">
                              {{ this.required }}
                            </p>
                            <p v-if="errorsHandler.fname" class="main_color small_font mb-0">
                              <ul>
                                <li v-for="error in this.errorsHandler.fname">{{ error }}</li>
                              </ul>
                            </p>
                          </div>
                          <div class="col-md-6">
                            <div class="user-box">
                              <input type="text" class="mb-2" v-model="$v.lname.$model" />
                              <label class="capitalize mid_grey">
                                last name</label>
                            </div>
                            <p v-if="$v.lname.$error" class="main_color small_font mb-0">
                              {{ this.required }}
                            </p>
                            <p v-if="errorsHandler.lname" class="main_color small_font mb-0">
                            <ul>
                              <li v-for="error in this.errorsHandler.lname">{{ error }}</li>
                            </ul>
                            </p>
                          </div>
                          <div class="col-md-12">
                            <div class="user-box">
                              <input type="email" v-model="$v.email.$model" />
                              <label class="capitalize mid_grey">
                                email</label>
                            </div>
                            <p v-if="$v.email.$error" class="main_color small_font mb-0">
                              {{ this.required }}
                            </p>
                            <p v-if="errorsHandler.email" class="main_color small_font mb-0">
                            <ul>
                              <li v-for="error in this.errorsHandler.email">{{ error }}</li>
                            </ul>
                            </p>
                          </div>
                          <div class="col-md-12">
                            <div class="user-box">
                              <input type="text" v-model="$v.phone.$model" />
                              <label class="capitalize mid_grey">
                                number</label>
                            </div>
                            <p v-if="$v.phone.$error" class="main_color small_font mb-0">
                              {{ this.required }}
                            </p>
                            <p v-if="errorsHandler.phone" class="main_color small_font mb-0">
                            <ul>
                              <li v-for="error in this.errorsHandler.phone">{{ error }}</li>
                            </ul>
                            </p>
                          </div>
                          <!--                             <div class="col-md-12">
                              <div class="user-box">
                                <input type="text" />
                                <label class="capitalize mid_grey">
                                  country</label>
                              </div>
                            </div> -->
                          <div class="col-md-12">
                            <div class="user-box">
                              <input id="password-field" type="password" v-model="$v.password.$model" />
                              <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                              <label class="capitalize mid_grey">
                                password</label>
                            </div>
                            <p v-if="$v.password.$error" class="main_color small_font mb-0">
                              {{ this.required }}
                            </p>
                            <p v-if="errorsHandler.password" class="main_color small_font mb-0">
                            <ul>
                              <li v-for="error in this.errorsHandler.password">{{ error }}</li>
                            </ul>
                            </p>
                          </div>
                          <div class="col-md-12">
                            <div class="user-box">
                              <input type="password" v-model="$v.password_confirmation.$model" />
                              
                              <label class="capitalize mid_grey">
                                confirm password</label>
                            </div>
                            <p v-if="$v.password_confirmation.$error" class="main_color small_font mb-0">
                              {{ this.required }}
                            </p>
                            <p v-if="errorsHandler.password_confirmation" class="main_color small_font mb-0">
                            <ul>
                              <li v-for="error in this.errorsHandler.password_confirmation">{{ error }}</li>
                            </ul>
                            </p>
                          </div>
                          <div class="col-md-12 d-flex align-items-center">
                            <input class="form-check-input mt-0" type="checkbox" value=""
                              aria-label="Checkbox for following text input" id="terms" v-model="$v.accept.$model" />
                            <label for="terms" class="ps-2">I Agree to
                              <router-link to="/" class="main_color capitalize">terms and
                                condition</router-link></label>
                            <p v-if="$v.accept.$error" class="main_color small_font mb-0">
                              {{ this.required }}
                            </p>
                          </div>
                          <div class="col-12 text-center pt-4">
                            <div class="d-grid gap-2 col-8 mx-auto">
                              <button type="button" class="btn btn-lg main_btn px-5" @click.prevent="signUp()">
                                Sign up
                              </button>
                            </div>
                            <p class="mid_grey capitalize pt-3 small_font">
                              already have an account ?
                              <router-link to="/login" class="main_color">Login</router-link>
                            </p>
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
      errorsHandler: [],
      fname: "",
      lname: "",
      email: "",
      phone: "",
      password: "",
      password_confirmation: "",
      accept: "",
      required: "This input is required",
    };
  },
  validations: {
    fname: {
      required,
    },
    lname: {
      required,
    },
    email: {
      required,
    },
    phone: {
      required,
    },
    password: {
      required,
    },
    password_confirmation: {
      required,
    },
    accept: {
      required,
    },
  },
  methods: {
    // signUp fn
    signUp() {
      this.errorsHandler = [];
      const data = {
        fname: this.fname,
        lname: this.lname,
        name: this.fname + ' ' + this.lname,
        phone: this.phone,
        password: this.password,
        password_confirmation: this.password_confirmation,
        accept: this.accept,
      };
      // check validation
      this.$v.$touch();
      if (!this.$v.$error) {      
        axios
          .post("https://test.crimsonrose.a2hosted.com/api/signup", data, {})
          .then((response) => {
            //console.log(response);
            //localStorage.setItem("userToken", response.data.data.access_token);
            window.location.href = "/Login";
          })
          .catch((errors) => {
            this.errorsHandler = errors.response.data.errors;
          });
      }
    },

  },
  mounted(){
    function showpass(){
      $(".toggle-password").click(function() {

$(this).toggleClass("fa-eye fa-eye-slash");
var input = $($(this).attr("toggle"));
if (input.attr("type") == "password") {
  input.attr("type", "text");
} else {
  input.attr("type", "password");
}
})

    }
    
  
  showpass()
}
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

.field-icon {
  float: right;
  margin-left: -25px;
  margin-top: 15px;
  position: relative;
  z-index: 2;
}
/* start media */
@media (max-width: 767.98px) {
  .form_holder .scroll_row {
    height: unset;
    overflow: unset;
  }
}
</style>
