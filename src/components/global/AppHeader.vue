<template>
  <div class="header">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img src="@/assets/images/navLogo.png" class="img-fluid" />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <router-link to="/" class="nav-link"> Home </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/findHome" class="nav-link"
                      >Find a home</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">about crimson rose</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">contact us</a>
                  </li>
                  <li class="nav-item">
                    <router-link to="/mortgage" class="nav-link"
                      >Mortgage</router-link
                    >
                  </li>
                </ul>
                <div class="d-flex justify-content-center align-items-center">
                  <router-link to="/Login" class="main_color pe-2">
                    <font-awesome-icon
                      icon="fa-solid fa-user-group"
                      class="pe-1"
                    />Login /Signup
                  </router-link>

                  <button
                    type="button"
                    class="btn btn-outline-primary outline_btn"
                  >
                    Add Property
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
.navbar-nav .nav-link.active,
.navbar-nav .show > .nav-link {
  color: #b5121b;
}
.nav-link {
  text-transform: capitalize;
  color: #626262;
}
.nav-link:hover {
  color: #b5121b;
}
a.main_color {
  text-decoration: none;
  font-weight: 500;
}

li.nav-item {
  padding-right: 0.5em;
}
</style>
