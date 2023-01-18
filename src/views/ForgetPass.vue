<template>
  <div class="forget_pass light_grey_bg">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-8 col-md-10 col-12 mx-auto">
          <div class="white_box p-5">
            <h3 class="main_color">Forgot Your Password?</h3>
            <span class="light_grey">Don't worry, we'll solve it</span>
            <form>
              <div class="mt-4">
                <label for="email" class="form-label capitalize small_font"
                  >email</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="$v.email.$model"
                />
                <p class="main_color small_font" v-if="error">{{ error }}</p>
              </div>
              <div class="text-center mt-4">
                <button
                  type="button"
                  class="btn btn-lg main_btn px-5"
                  @click.prevent="forgetPassword()"
                >
                  Continue
                </button>
                <p class="success small_font mt-2" v-if="success">
                  {{ success }}
                </p>
              </div>
            </form>
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

export default {
  name: "ForgetPassword",
  mixins: [validationMixin],
  data() {
    return {
      email: "",
      required: "This input is required",
      error: "",
      success: "",
    };
  },
  validations: {
    email: {
      required,
    },
  },
  methods: {
    // change pw fn
    forgetPassword() {
      this.error = "";
      const data = {
        email: this.email,
      };
      // check validation
      this.$v.$touch();
      if (!this.$v.$error) {
        axios
          .post("forgetPassword", data, {})
          .then((response) => {
            console.log(response);
            this.success = response.data.password;
          })
          .catch((errors) => {
            console.log(errors.response.data.message);
            this.error = errors.response.data.message;
          });
      }
    },
  },
};
</script>
<style scoped>
.success {
  color: green;
}
</style>
