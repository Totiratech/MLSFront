<template>
  <div class="profile">
    <div class="container py-5">
      <div class="row">
        <div class="col-12">
          <div class="whit_box p-2">
            <div class="d-flex align-items-start">
              <div
                class="nav flex-column nav-pills me-3"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  class="nav-link active d-flex flex-column justify-content-center align-items-center side_tab"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="true"
                >
                  <img
                    src="@/assets/images/profile-circle.png"
                    class="img-fluid"
                    alt="..."
                  />
                  <span class="capitalize">profile info</span>
                </button>
                <button
                  class="nav-link d-flex flex-column justify-content-center align-items-center side_tab"
                  id="v-pills-prop-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-prop"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-prop"
                  aria-selected="false"
                >
                  <img
                    src="@/assets/images/profile-circle.png"
                    class="img-fluid"
                    alt="..."
                  />
                  <span class="capitalize">My Properties</span>
                </button>
                <button
                  class="nav-link d-flex flex-column justify-content-center align-items-center side_tab"
                  id="v-pills-preferences-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-preferences"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-preferences"
                  aria-selected="false"
                >
                  <img
                    src="@/assets/images/profile-circle.png"
                    class="img-fluid"
                    alt="..."
                  />
                  <span class="capitalize">Preferences</span>
                </button>
                <button
                  class="nav-link d-flex flex-column justify-content-center align-items-center side_tab"
                  id="v-pills-requests-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-requests"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-requests"
                  aria-selected="false"
                >
                  <img
                    src="@/assets/images/profile-circle.png"
                    class="img-fluid"
                    alt="..."
                  />
                  <span class="capitalize">requests</span>
                </button>
              </div>

              <!-- start content -->
              <div class="tab-content" id="v-pills-tabContent">
                <!-- profile info -->
                <div
                  class="tab-pane fade show active"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                  tabindex="0"
                >
                  Profile info
                </div>

                <!-- prop content -->
                <div
                  class="tab-pane fade"
                  id="v-pills-prop"
                  role="tabpanel"
                  aria-labelledby="v-pills-prop-tab"
                  tabindex="0"
                >
                  my properties
                </div>

                <!-- Preferences -->
                <div
                  class="tab-pane fade"
                  id="v-pills-preferences"
                  role="tabpanel"
                  aria-labelledby="v-pills-preferences-tab"
                  tabindex="0"
                >
                  preferences
                </div>
                <!-- Requests -->
                <div
                  class="tab-pane fade"
                  id="v-pills-requests"
                  role="tabpanel"
                  aria-labelledby="v-pills-requests-tab"
                  tabindex="0"
                >
                  Requests
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
.profile {
  background-color: #f6f8f9;
}
.side_tab {
  color: #c8c8c8;
  padding: 1em 0 1em 0.5em;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link,
.side_tab:hover {
  color: #b5121b;
  background-color: unset;
}
</style>
