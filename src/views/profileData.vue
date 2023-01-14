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
                    src="@/assets/images/maron-icon/profile-circle.png"
                    class="img-fluid d-none maron_icon"
                    alt="..."
                  />
                  <img
                    src="@/assets/images/profile-circle.png"
                    class="img-fluid grey_icon"
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
                    src="@/assets/images/maron-icon/building.png"
                    class="img-fluid d-none maron_icon"
                    alt="..."
                  />
                  <img
                    src="@/assets/images/prop-icon.png"
                    class="img-fluid grey_icon"
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
                    src="@/assets/images/maron-icon/setting.png"
                    class="img-fluid d-none maron_icon"
                    alt="..."
                  />
                  <img
                    src="@/assets/images/prefrences.png"
                    class="img-fluid grey_icon"
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
                    src="@/assets/images/maron-icon/notification.png"
                    class="img-fluid d-none maron_icon"
                    alt="..."
                  />
                  <img
                    src="@/assets/images/notification.png"
                    class="img-fluid grey_icon"
                    alt="..."
                  />
                  <span class="capitalize">requests</span>
                </button>
                <button
                  class="nav-link d-flex flex-column justify-content-center align-items-center side_tab"
                  id="v-pills-fav-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-fav"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-fav"
                  aria-selected="false"
                >
                  <img
                    src="@/assets/images/maron-icon/heart-circle.png"
                    class="img-fluid d-none maron_icon"
                    alt="..."
                  />
                  <img
                    src="@/assets/images/heart-circle.png"
                    class="img-fluid grey_icon"
                    alt="..."
                  />
                  <span class="capitalize">Favourite</span>
                </button>
                <button
                  class="nav-link d-flex flex-column justify-content-center align-items-center side_tab"
                  id="v-pills-pass-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-pass"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-pass"
                  aria-selected="false"
                >
                  <img
                    src="@/assets/images/maron-icon/lock.png"
                    class="img-fluid d-none maron_icon"
                    alt="..."
                  />
                  <img
                    src="@/assets/images/lock.png"
                    class="img-fluid grey_icon"
                    alt="..."
                  />
                  <span class="capitalize">password</span>
                </button>
                <button
                  class="nav-link d-flex flex-column justify-content-center align-items-center side_tab"
                  id="v-pills-logout-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-logout"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-logout"
                  aria-selected="false"
                >
                  <img
                    src="@/assets/images/logout.png"
                    class="img-fluid"
                    alt="..."
                  />
                  <span class="capitalize">logout</span>
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
                  <div class="container py-3">
                    <div class="row">
                      <div class="col-12">
                        <form class="profile_form">
                          <div class="container">
                            <div class="row">
                              <div class="col-12">
                                <h5 class="mid_grey capitalize pb-1">
                                  Personal info
                                </h5>
                              </div>
                              <div class="col-md-6 mb-3">
                                <label
                                  for="fname"
                                  class="form-label capitalize small_font"
                                  >first name</label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  id="fname"
                                />
                              </div>
                              <div class="col-md-6 mb-3">
                                <label
                                  for="job"
                                  class="form-label capitalize small_font"
                                  >job</label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  id="job"
                                />
                              </div>
                              <div class="col-md-6 mb-3">
                                <label
                                  for="sname"
                                  class="form-label capitalize small_font"
                                  >second name</label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  id="sname"
                                />
                              </div>
                              <div class="col-md-6 mb-3">
                                <label
                                  for="company"
                                  class="form-label capitalize small_font"
                                  >company</label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  id="company"
                                />
                              </div>

                              <div class="col-12 mt-3">
                                <h5 class="mid_grey capitalize pb-1">
                                  contact info
                                </h5>
                              </div>
                              <div class="col-md-6 mb-3">
                                <label
                                  for="number"
                                  class="form-label capitalize small_font"
                                  >number</label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  id="number"
                                />
                              </div>
                              <div class="col-md-6 mb-3">
                                <label
                                  for="email"
                                  class="form-label capitalize small_font"
                                  >email</label
                                >
                                <input
                                  type="email"
                                  class="form-control"
                                  id="email"
                                />
                              </div>

                              <div class="col-12 mt-3">
                                <h5 class="mid_grey capitalize pb-1">
                                  address
                                </h5>
                              </div>
                              <div class="col-md-6 mb-3">
                                <label
                                  for="unit"
                                  class="form-label capitalize small_font"
                                  >unit</label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  id="unit"
                                />
                              </div>
                              <div class="col-md-6 mb-3">
                                <label
                                  for="city"
                                  class="form-label capitalize small_font"
                                  >city/town</label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  id="city"
                                />
                              </div>
                              <div class="col-md-6 mb-3">
                                <label
                                  for="code"
                                  class="form-label capitalize small_font"
                                  >postal/ZIP code</label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  id="code"
                                />
                              </div>
                              <div class="col-md-6 mb-3">
                                <label
                                  for="box"
                                  class="form-label capitalize small_font"
                                  >BO box</label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  id="box"
                                />
                              </div>
                              <div class="col-md-6 mb-3">
                                <label
                                  for="stname"
                                  class="form-label capitalize small_font"
                                  >street name</label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  id="stname"
                                />
                              </div>
                              <div class="col-md-6 mb-3">
                                <label
                                  for="stnum"
                                  class="form-label capitalize small_font"
                                  >street number</label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  id="stnum"
                                />
                              </div>
                              <div class="col-md-6 mb-3">
                                <label
                                  for="provider"
                                  class="form-label capitalize small_font"
                                  >provider</label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  id="provider"
                                />
                              </div>
                              <div class="col-md-6 mb-3">
                                <label
                                  for="province"
                                  class="form-label capitalize small_font"
                                  >province</label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  id="province"
                                />
                              </div>
                              <div class="col-md-6 mb-3">
                                <label
                                  for="provider"
                                  class="form-label capitalize small_font"
                                  >provider ID</label
                                >
                                <input
                                  type="text"
                                  class="form-control"
                                  id="provider"
                                />
                              </div>
                              <div class="col-12 mt-3">
                                <h5 class="mid_grey capitalize pb-1">
                                  documents
                                </h5>
                              </div>
                              <div class="col-md-6 mb-3">
                                <span class="small_font">ID</span>
                                <div class="file-input pt-2">
                                  <input
                                    type="file"
                                    name="file-input"
                                    id="file-input"
                                    class="file-input__input"
                                  />
                                  <label
                                    class="file-input__label"
                                    for="file-input"
                                  >
                                    <img
                                      src="@/assets/images/export.png"
                                      class="img-fluid export"
                                  /></label>
                                </div>
                              </div>
                              <div class="col-md-6 mb-3">
                                <span class="capitalize small_font"
                                  >pay check</span
                                >
                                <div class="file-input pt-2">
                                  <input
                                    type="file"
                                    name="file-input"
                                    id="file-input"
                                    class="file-input__input"
                                  />
                                  <label
                                    class="file-input__label"
                                    for="file-input"
                                  >
                                    <img
                                      src="@/assets/images/export.png"
                                      class="img-fluid export"
                                  /></label>
                                </div>
                              </div>
                              <div class="col-md-6 mb-3">
                                <span class="capitalize small_font"
                                  >credit score</span
                                >
                                <div class="file-input pt-2">
                                  <input
                                    type="file"
                                    name="file-input"
                                    id="file-input"
                                    class="file-input__input"
                                  />
                                  <label
                                    class="file-input__label"
                                    for="file-input"
                                  >
                                    <img
                                      src="@/assets/images/export.png"
                                      class="img-fluid export"
                                  /></label>
                                </div>
                              </div>
                              <div class="col-md-6 mb-3">
                                <span class="capitalize small_font">other</span>
                                <div class="file-input pt-2">
                                  <input
                                    type="file"
                                    name="file-input"
                                    id="file-input"
                                    class="file-input__input"
                                  />
                                  <label
                                    class="file-input__label"
                                    for="file-input"
                                  >
                                    <img
                                      src="@/assets/images/export.png"
                                      class="img-fluid export"
                                  /></label>
                                </div>
                              </div>

                              <div class="col-12 text-center pt-5">
                                <button
                                  type="button"
                                  class="btn btn-lg main_btn px-5"
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
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

                <!-- favourite -->
                <div
                  class="tab-pane fade"
                  id="v-pills-fav"
                  role="tabpanel"
                  aria-labelledby="v-pills-fav-tab"
                  tabindex="0"
                >
                  Favourite
                </div>

                <!-- password -->
                <div
                  class="tab-pane fade"
                  id="v-pills-pass"
                  role="tabpanel"
                  aria-labelledby="v-pills-pass-tab"
                  tabindex="0"
                >
                  password
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
.side_tab img {
  width: 25px;
}
.nav-pills .nav-link.active .grey_icon,
.nav-pills .show > .nav-link .grey_icon,
.side_tab:hover .grey_icon {
  display: none;
}
.nav-pills .nav-link.active .maron_icon,
.nav-pills .show > .nav-link .maron_icon,
.side_tab:hover .maron_icon {
  display: flex !important;
}
.profile_form {
  height: 100%;
}
.file {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 2.5rem;
}
.file span {
  color: #626262;
}
.file-input__input {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
.file-input__label {
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 0.375rem;
  font-size: 14px;
  font-weight: 600;
  color: #626262;
  font-size: 14px;
  padding: 10px 12px;
  box-shadow: 0px 0px 2px rgb(0 0 0 / 25%);
  justify-content: end;
}
.export {
  width: 20px;
}
#v-pills-profile {
  height: calc(100vh - 40px);
  overflow: hidden;
  overflow-y: scroll;
}

/* start media */
@media (max-width: 767.98px) {
  #v-pills-profile {
    height: 100vh;
  }
  button span.capitalize {
    font-size: 0.85em;
  }
}
@media (max-width: 991.98px) {
  #v-pills-profile {
    height: calc(100vh - 25px);
  }
  button span.capitalize {
    font-size: 0.85em;
  }
}
</style>
