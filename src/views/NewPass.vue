<template>
  <div class="forget_pass light_grey_bg">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-8 col-md-10 col-12 mx-auto">
          <div class="white_box p-5">
            <h3 class="main_color">New password</h3>
            <span class="light_grey">Choose a strong password</span>
            <form>
              <div class="mt-4">
                <label for="password" class="form-label capitalize small_font"
                  >new password</label
                >
                <input type="password" class="form-control" id="password" />
                <span
                  toggle="#password"
                  class="fa fa-fw fa-eye field-icon toggle-password"></span>
              </div>
              <div class="mt-4">
                <label
                  for="confPassword"
                  class="form-label capitalize small_font"
                  >confirm password</label
                >
                <input type="password" class="form-control" id="confPassword" />
                <span
                  toggle="#confPassword"
                  class="fa fa-fw fa-eye field-icon toggle-password"></span>
              </div>
              <div class="text-center mt-4">
                <button type="button" class="btn btn-lg main_btn px-5">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
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
.field-icon {
  float: right;
  margin-right: 12px;
  margin-top: -27px;
  position: relative;
  z-index: 2;
  cursor: pointer;
}
</style>
