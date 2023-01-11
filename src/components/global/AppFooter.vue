<template>
  <div class="footer">
    <footer class="pt-4">
      <div class="conatiner">
        <div class="row w-100">
          <div class="col-md-3 col-6">
            <img
              src="@/assets/images/footerLogo.png"
              class="img-fluid footer_logo"
              alt=".."
            />
            <div class="d-flex justify-content-center align-items-center pt-3">
              <a href="#">
                <font-awesome-icon
                  icon="fa-brands fa-square-instagram main_color"
                  class="main_color"
                />
              </a>
              <a href="#">
                <font-awesome-icon
                  icon="fa-brands fa-twitter main_color"
                  class="main_color px-4"
              /></a>
              <a href="#">
                <font-awesome-icon
                  icon="fa-brands fa-facebook-f"
                  class="main_color"
                />
              </a>
            </div>
          </div>
          <div class="col-md-3 col-6 text-start">
            <h5 class="main_color">Your account</h5>
            <ul class="ps-0">
              <li><a href="#">Notifications</a></li>
              <li><a href="#">Your profile</a></li>
              <li><a href="#">Favourites</a></li>
            </ul>
          </div>
          <div class="col-md-3 col-6 text-start ps-5 ps-md-0">
            <h5 class="main_color">Important links</h5>
            <ul class="ps-0">
              <li><a href="#">About us</a></li>
              <li><a href="#">Find home</a></li>
              <li><a href="#">Terms and conditions</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>
          <div class="col-md-3 col-6 text-start">
            <h5 class="main_color">Contact us</h5>
            <ul class="ps-0">
              <li>
                <font-awesome-icon
                  icon="fa-solid fa-location-dot main_color"
                  class="main_color pe-2"
                /><span>217 Speers Road, Unit 4 Oakville, Ontario L6K 0J3</span>
              </li>
              <li>
                <font-awesome-icon
                  icon="fa-solid fa-envelope main_color"
                  class="main_color pe-2"
                />
                info@crlpm.com
              </li>
              <li>
                <font-awesome-icon
                  icon="fa-solid fa-phone main_color"
                  class="main_color pe-2"
                />+19 052 081 000
              </li>
              <li>
                <font-awesome-icon
                  icon="fa-solid fa-clock main_color"
                  class="main_color pe-2"
                />opening hours 8:00 a.m - 9:00 p.m
              </li>
            </ul>
          </div>
        </div>
        <div class="row mt-2 pb-3">
          <div class="col-12 text-center">
            <p class="mb-0 copyRight">
              © 2022 Crimson Rose Living. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "AppFooter",
};
</script>
<style scoped>
footer {
  border-top: 2px solid #b5121b;
}
.footer_logo {
  width: 140px;
}
ul {
  list-style: none;
}
.text-start ul li a {
  color: #626262;
  text-decoration: none;
}
footer h5 {
  font-size: 1.3em;
}
footer ul li {
  font-size: 0.95em;
}
.copyRight {
  font-size: 0.85em;
  color: #a1a1a5;
}
</style>
