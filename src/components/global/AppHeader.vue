<template>
  <div class="header">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="navbar navbar-expand-lg">
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
                aria-label="Toggle navigation">
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
                    <router-link to="/about" class="nav-link"
                      >about crimson rose</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link
                      to="/find"
                      class="nav-link"
                      v-if="isRegularPath">
                      contact us
                    </router-link>
                  </li>
                  <!-- <li class="nav-item">
                    <router-link to="/mortgage" class="nav-link"
                      >Mortgage</router-link
                    >
                  </li> -->
                </ul>
                <div class="d-flex justify-content-center align-items-center">
                  <router-link to="/profile" v-if="loggedIn">
                    <div class="d-flex align-items-center pe-2">
                      <img
                        src="@/assets/images/user.jpg"
                        alt=".."
                        class="img-fluid user_img me-1" />
                      <img
                        src="@/assets/images/Notification-nav.png"
                        class="img-fluid"
                        alt=".." />
                      <!-- <font-awesome-icon icon="fa-solid fa-bell" /> -->
                    </div>
                  </router-link>
                  <router-link to="/Login" class="main_color pe-2" v-else>
                    <font-awesome-icon
                      icon="fa-solid fa-user-group"
                      class="pe-1" />Login /Signup
                  </router-link>

                  <router-link
                    to="/addprop"
                    type="button"
                    class="btn btn-outline-primary outline_btn">
                    Add Property
                  </router-link>
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
  data() {
    return {
      loggedIn: false,
      path: "/",
    };
  },
  mounted() {
    this.auth();
  },
  methods: {
    auth() {
      if (localStorage.getItem("userToken")) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    },
  },
  computed: {
    isRegularPath() {
      return this.$route.name === this.$route.path;
    },
  },
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
.user_img {
  width: 35px;
  border-radius: 50%;
}
</style>
