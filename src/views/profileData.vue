<template>
  <div class="profile light_grey_bg">
    <div class="container py-5">
      <div class="row">
        <div class="col-12">
          <div class="white_box p-2">
            <div class="d-flex align-items-start">
              <div
                class="nav flex-column nav-pills me-3"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical">
                <button
                  class="nav-link active d-flex flex-column justify-content-center align-items-center side_tab"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="true">
                  <img
                    src="@/assets/images/maron-icon/profile-circle.png"
                    class="img-fluid d-none maron_icon"
                    alt="..." />
                  <img
                    src="@/assets/images/profile-circle.png"
                    class="img-fluid grey_icon"
                    alt="..." />
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
                  aria-selected="false">
                  <img
                    src="@/assets/images/maron-icon/building.png"
                    class="img-fluid d-none maron_icon"
                    alt="..." />
                  <img
                    src="@/assets/images/prop-icon.png"
                    class="img-fluid grey_icon"
                    alt="..." />
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
                  aria-selected="false">
                  <img
                    src="@/assets/images/maron-icon/setting.png"
                    class="img-fluid d-none maron_icon"
                    alt="..." />
                  <img
                    src="@/assets/images/prefrences.png"
                    class="img-fluid grey_icon"
                    alt="..." />
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
                  aria-selected="false">
                  <img
                    src="@/assets/images/maron-icon/notification.png"
                    class="img-fluid d-none maron_icon"
                    alt="..." />
                  <img
                    src="@/assets/images/notification.png"
                    class="img-fluid grey_icon"
                    alt="..." />
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
                  aria-selected="false">
                  <img
                    src="@/assets/images/maron-icon/heart-circle.png"
                    class="img-fluid d-none maron_icon"
                    alt="..." />
                  <img
                    src="@/assets/images/heart-circle.png"
                    class="img-fluid grey_icon"
                    alt="..." />
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
                  aria-selected="false">
                  <img
                    src="@/assets/images/maron-icon/lock.png"
                    class="img-fluid d-none maron_icon"
                    alt="..." />
                  <img
                    src="@/assets/images/lock.png"
                    class="img-fluid grey_icon"
                    alt="..." />
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
                  aria-selected="false">
                  <img
                    src="@/assets/images/logout.png"
                    class="img-fluid"
                    alt="..." />
                  <span class="capitalize" @click.prevent="logout()"
                    >logout</span
                  >
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
                  tabindex="0">
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
                                  v-model="profileInfo.fname" />
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
                                  v-model="profileInfo.job" />
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
                                  v-model="profileInfo.lname" />
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
                                  v-model="profileInfo.company" />
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
                                  v-model="profileInfo.phone" />
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
                                  v-model="profileInfo.email" />
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
                                  v-model="profileInfo.unit" />
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
                                  v-model="profileInfo.city_town" />
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
                                  v-model="profileInfo.zip_code" />
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
                                  v-model="profileInfo.po_box" />
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
                                  v-model="profileInfo.street_name" />
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
                                  v-model="profileInfo.street_number" />
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
                                  v-model="profileInfo.provider" />
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
                                  v-model="profileInfo.province" />
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
                                  v-model="profileInfo.provider_id" />
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
                                    id="file-input-one"
                                    class="file-input__input" />
                                  <label
                                    class="file-input__label"
                                    for="file-input-one">
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
                                    id="file-input-two"
                                    class="file-input__input" />
                                  <label
                                    class="file-input__label"
                                    for="file-input-two">
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
                                    id="file-input-three"
                                    class="file-input__input" />
                                  <label
                                    class="file-input__label"
                                    for="file-input-three">
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
                                    id="file-input-four"
                                    class="file-input__input" />
                                  <label
                                    class="file-input__label"
                                    for="file-input-four">
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
                                  @click.prevent="updateProfile()">
                                  Update
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
                  <div class="container py-3">
                    <div class="row">
                      <div class="col-12">
                        <h5 class="mid_grey capitalize pb-1">
                          Listed Properties
                        </h5>
                      </div>
                    </div>
                    <div class="row" v-if="properties.length != 0">
                      <div
                        class="col-lg-4 col-md-6 mt-4"
                        v-for="(property, index) in properties"
                        :key="`property${index}`"
                      >
                        <HomeDetailCard :home="property" />
                      </div>
                    </div>
                    <div class="row" v-else>
                      <h3>No content</h3>
                    </div>
                  </div>
                </div>

                <!-- Preferences -->
                <div
                  class="tab-pane fade"
                  id="v-pills-preferences"
                  role="tabpanel"
                  aria-labelledby="v-pills-preferences-tab"
                  tabindex="0">
                  <div class="container py-3">
                    <div class="row">
                      <div class="col-12">
                        <form class="pref_form">
                          <div class="container">
                            <div class="row">
                              <div class="col-12">
                                <h5 class="mid_grey capitalize pb-1">
                                  Preferences
                                </h5>
                              </div>
                              <div class="col-md-6 mb-3">
                                <label
                                  for="rooms"
                                  class="form-label capitalize small_font"
                                  >rooms</label
                                >
                                <input
                                  type="number"
                                  class="form-control"
                                  id="rooms"
                                  v-model="$v.prefrences.rooms.$model" />
                                <p
                                  v-if="$v.prefrences.rooms.$error"
                                  class="main_color small_font mb-0">
                                  {{ this.required }}
                                </p>
                              </div>
                              <div class="col-md-6 mb-3">
                                <label class="small_font capitalize"
                                  >Rent/sale</label
                                >
                                <select
                                  class="form-select mt-2"
                                  aria-label="Default select example"
                                  v-model="$v.prefrences.rent_sale.$model">
                                  <option selected disabled></option>
                                  <option value="rent">Rent</option>
                                  <option value="sale">Sale</option>
                                </select>
                                <p
                                  v-if="$v.prefrences.rent_sale.$error"
                                  class="main_color small_font mb-0">
                                  {{ this.required }}
                                </p>
                              </div>
                              <div class="col-md-6 mb-3">
                                <label
                                  for="toilets"
                                  class="form-label capitalize small_font"
                                  >toilets</label
                                >
                                <input
                                  type="number"
                                  class="form-control"
                                  id="toilets"
                                  v-model="$v.prefrences.toilets.$model" />
                                <p
                                  v-if="$v.prefrences.toilets.$error"
                                  class="main_color small_font mb-0">
                                  {{ this.required }}
                                </p>
                              </div>
                              <div class="col-md-6 mb-3">
                                <label
                                  for="location"
                                  class="form-label capitalize small_font"
                                  >location</label
                                >
                                <select
                                  class="form-select mt-2"
                                  aria-label="Default select example"
                                  v-model="$v.prefrences.location.$model">
                                  <option selected disabled></option>
                                  <option
                                    v-for="area in areaArr"
                                    :key="area.Area_num"
                                    :value="area.Area_num">
                                    {{ area.Area }}
                                  </option>
                                </select>
                                <p
                                  v-if="$v.prefrences.location.$error"
                                  class="main_color small_font mb-0">
                                  {{ this.required }}
                                </p>
                              </div>
                              <div class="col-12 text-center pt-5">
                                <button
                                  type="button"
                                  class="btn btn-lg main_btn px-5"
                                  @click.prevent="PrefrencesFn()">
                                  Save
                                </button>
                                <div v-if="success">
                                  <span class="success small_font">
                                    Your request is successed
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Requests -->

                <!-- <span class="badge cancel capitalize">canceled</span>
        <span class="badge wait capitalize">waiting</span> -->
                <div
                  class="tab-pane fade"
                  id="v-pills-requests"
                  role="tabpanel"
                  aria-labelledby="v-pills-requests-tab"
                  tabindex="0">
                  <div class="container py-3 rental_requests">
                    <div class="row">
                      <div class="col-12">
                        <h5 class="mid_grey capitalize pb-1">requests</h5>
                      </div>
                      <div class="col-12">
                        <ul class="nav nav-tabs mb-3" id="myTab" role="tablist">
                          <li class="nav-item" role="presentation">
                            <button
                              class="nav-link active"
                              id="rentalReq-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#rentalReq-tab-pane"
                              type="button"
                              role="tab"
                              aria-controls="rentalReq-tab-pane"
                              aria-selected="true">
                              Rentals Request
                            </button>
                          </li>
                          <li class="nav-item" role="presentation">
                            <button
                              class="nav-link"
                              id="mineRental-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#mineRental-tab-pane"
                              type="button"
                              role="tab"
                              aria-controls="mineRental-tab-pane"
                              aria-selected="false">
                              My Rentals Request
                            </button>
                          </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                          <div
                            class="tab-pane fade show active"
                            id="rentalReq-tab-pane"
                            role="tabpanel"
                            aria-labelledby="rentalReq-tab"
                            tabindex="0">
                            <div class="container">
                              <div class="row mt-4" v-for="y in 3" :key="y">
                                <div class="col-md-7">
                                  <div
                                    class="rental_req d-flex align-items-center">
                                    <div>
                                      <img
                                        src="@/assets/images/rental.png"
                                        class="img-fluid"
                                        alt=".." />
                                    </div>
                                    <div class="data ms-3">
                                      <div class="d-flex align-items-center">
                                        <img
                                          src="@/assets/images/mapMarker.png"
                                          class="img-fluid me-1"
                                          alt=".." />
                                        <span
                                          >128 Fawn ST Nation, Ontario, K0a
                                          2M0</span
                                        >
                                      </div>
                                      <h5 class="main_color py-1">99.000$</h5>
                                      <span class="badge approve capitalize"
                                        >Approved</span
                                      >
                                    </div>
                                  </div>
                                </div>

                                <div
                                  class="col-md-3 col-6 d-flex justify-content-end align-items-center mt-2">
                                  <span>23/12/2022</span>
                                </div>
                                <div
                                  class="col-md-2 col-6 d-flex justify-content-end align-items-center mt-2">
                                  <img
                                    src="@/assets/images/trash.png"
                                    class="img-fluid trash"
                                    alt=".." />
                                  <router-link
                                    to="/"
                                    class="main_color contract d-none"
                                    >View the contract</router-link
                                  >
                                </div>
                                <hr class="my-3" />
                              </div>
                            </div>
                          </div>
                          <div
                            class="tab-pane fade"
                            id="mineRental-tab-pane"
                            role="tabpanel"
                            aria-labelledby="mineRental-tab"
                            tabindex="0">
                            <!-- <div class="row">
                              <div class="col-lg-4 col-md-6 col-12">
                                <form class="d-flex" role="search">
                                  <input
                                    class="form-control me-2 search_input"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                  />
                                </form>
                              </div>
                            </div> -->
                            <div class="row mt-4" v-for="z in 4" :key="z">
                              <div class="col-md-7">
                                <div
                                  class="rental_req d-flex align-items-center">
                                  <div>
                                    <img
                                      src="@/assets/images/rental.png"
                                      class="img-fluid"
                                      alt=".." />
                                  </div>
                                  <div class="data ms-3">
                                    <div class="d-flex align-items-center">
                                      <img
                                        src="@/assets/images/mapMarker.png"
                                        class="img-fluid me-1"
                                        alt=".." />
                                      <span
                                        >128 Fawn ST Nation, Ontario, K0a
                                        2M0</span
                                      >
                                    </div>
                                    <h5 class="main_color py-1">99.000$</h5>
                                    <span>23/12/2022</span>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="col-md-3 col-6 d-flex justify-content-end align-items-center">
                                <router-link
                                  to="/AllRequests"
                                  class="black_font capitalize"
                                  >250 requests</router-link
                                >
                              </div>
                              <div
                                class="col-md-2 col-6 d-flex justify-content-end align-items-center">
                                <img
                                  src="@/assets/images/trash.png"
                                  class="img-fluid trash"
                                  alt=".."
                                />

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- favourite -->
                <div
                  class="tab-pane fade"
                  id="v-pills-fav"
                  role="tabpanel"
                  aria-labelledby="v-pills-fav-tab"
                  tabindex="0">
                  <div class="container py-3">
                    <div class="row">
                      <div class="col-12">
                        <h5 class="mid_grey capitalize pb-1">Favourite</h5>
                      </div>
                      <div
                        class="col-lg-4 col-md-6 mt-4"
                        v-for="(fav, index) in favourites"
                        :key="`fav${index}`">
                        <HomeDetailCard :home="fav" />
                      </div>
                    </div>
                  </div>
                </div>

                <!-- password -->
                <div
                  class="tab-pane fade"
                  id="v-pills-pass"
                  role="tabpanel"
                  aria-labelledby="v-pills-pass-tab"
                  tabindex="0">
                  <div class="container py-3">
                    <div class="row">
                      <div class="col-12">
                        <form class="pass_form">
                          <div class="container">
                            <div class="row">
                              <div class="col-md-6">
                                <h5 class="mid_grey capitalize pb-1">
                                  password
                                </h5>
                              </div>
                              <div class="col-md-6 d-flex justify-content-end">
                                <router-link
                                  to="/forgetPassword"
                                  class="main_color small_font">
                                  Forgot Your Password?
                                </router-link>
                              </div>
                              <div class="col-md-6 mb-3">
                                <label
                                  for="oldpass"
                                  class="form-label capitalize small_font"
                                  >old password</label
                                >
                                <input
                                  type="password"
                                  class="form-control"
                                  id="oldpass"
                                  v-model="$v.current_password.$model" />
                                <span
                                  toggle="#oldpass"
                                  class="fa fa-fw fa-eye field-icon toggle-password"></span>
                                <p
                                  v-if="$v.current_password.$error"
                                  class="main_color small_font mb-0">
                                  {{ this.required }}
                                </p>
                              </div>
                              <div class="col-md-6 d-none d-md-block"></div>
                              <div class="col-md-6 mb-3">
                                <label
                                  for="newpass"
                                  class="form-label capitalize small_font"
                                  >new password</label
                                >
                                <input
                                  type="password"
                                  class="form-control"
                                  id="newpass"
                                  v-model="$v.password.$model" />
                                <span
                                  toggle="#newpass"
                                  class="fa fa-fw fa-eye field-icon toggle-password"></span>
                                <p
                                  v-if="$v.password.$error"
                                  class="main_color small_font mb-0">
                                  {{ this.required }}
                                </p>
                              </div>
                              <div class="col-md-6 mb-3">
                                <label
                                  for="confirmpass"
                                  class="form-label capitalize small_font"
                                  >Confirm password</label
                                >
                                <input
                                  type="password"
                                  class="form-control"
                                  id="confirmpass"
                                  v-model="$v.password_confirmation.$model" />
                                <span
                                  toggle="#confirmpass"
                                  class="fa fa-fw fa-eye field-icon toggle-password"></span>
                                <p
                                  v-if="$v.password_confirmation.$error"
                                  class="main_color small_font mb-0">
                                  {{ this.required }}
                                </p>
                              </div>
                              <div class="col-12 text-center pt-5">
                                <button
                                  type="button"
                                  class="btn btn-lg main_btn px-5"
                                  @click.prevent="changePassword()">
                                  Save
                                </button>
                              </div>
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
import HomeDetailCard from "@/components/HomeDetailCard.vue";
import $ from "jquery";
export default {
  name: "ProfileView",
  components: {
    HomeDetailCard,
  },
  mixins: [validationMixin],
  data() {
    return {
      current_password: "",
      password: "",
      password_confirmation: "",
      required: "This input is required",
      areaArr: [],
      favourites: [],
      properties: [],
      rental: [],
      myRental: [],
      success: false,
      prefrences: {
        rooms: "",
        toilets: "",
        rent_sale: "",
        location: "",
      },
      profileInfo: {
        file1: "",
        file2: "",
        file3: "",
        file4: "",
      },
    };
  },
  validations: {
    current_password: {
      required,
    },

    password: {
      required,
    },
    password_confirmation: {
      required,
    },
    prefrences: {
      rooms: {
        required,
      },
      toilets: {
        required,
      },
      rent_sale: {
        required,
      },
      location: {
        required,
      },
    },
  },
  mounted() {
    this.getArea();
    this.getData();
    this.getProp();
    this.getFav();
    this.getRental();
    // get file1 id
    const inputOne = document.getElementById("file-input-one");
    inputOne.addEventListener("change", function () {
      const files = this.files || [];
      if (!files.length) return;
      const reader = new FileReader();
      reader.onload = function (e) {
        this.profileInfo.file1 = e.target.result;
      };
      reader.readAsDataURL(files[0]);
    });

    // get file2 id
    const inputTwo = document.getElementById("file-input-two");
    inputTwo.addEventListener("change", function () {
      const files = this.files || [];
      if (!files.length) return;
      const reader = new FileReader();
      reader.onload = function (e) {
        this.profileInfo.file2 = e.target.result;
      };
      reader.readAsDataURL(files[0]);
    });

    // get file3 id
    const inputThree = document.getElementById("file-input-three");
    inputThree.addEventListener("change", function () {
      const files = this.files || [];
      if (!files.length) return;
      const reader = new FileReader();
      reader.onload = function (e) {
        this.profileInfo.file3 = e.target.result;
      };
      reader.readAsDataURL(files[0]);
    });

    // get file4 id
    const inputFour = document.getElementById("file-input-four");
    inputFour.addEventListener("change", function () {
      const files = this.files || [];
      if (!files.length) return;
      const reader = new FileReader();
      reader.onload = function (e) {
        this.profileInfo.file4 = e.target.result;
      };
      reader.readAsDataURL(files[0]);
    });
    //show password
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
  methods: {
    // get area
    getArea() {
      axios
        .get("getAreas")
        .then((response) => {
          this.areaArr = response.data.area;
          console.log(this.areaArr);
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
    // get user data
    getData() {
      axios
        .post("getProfile")
        .then((response) => {
          this.profileInfo = response.data;
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
    // change pw fn
    changePassword() {
      const data = {
        current_password: this.current_password,
        password: this.password,
        password_confirmation: this.password_confirmation,
      };
      // check validation
      this.$v.$touch();
      if (!this.$v.$error) {
        axios
          .post("change-password", data, { headers: this.headers })
          .then((response) => {
            console.log(response);
          })
          .catch((errors) => {
            console.log(errors);
          });
      }
    },
    // logout
    logout() {
      axios
        .post("logout")
        .then((response) => {
          console.log(response);
          localStorage.removeItem("userToken");
          this.$router.push({ path: "/Login" }).then(() => {
            this.$router.go();
          });
        })
        .catch((errors) => {
          console.log(errors);
        });
    },

    // update profile
    updateProfile() {
      const data = {
        fname: this.profileInfo.fname,
        lname: this.profileInfo.lname,
        email: this.profileInfo.email,
        phone: this.profileInfo.phone,
        provider: this.profileInfo.provider,
        provider_id: this.profileInfo.provider_id,
        job: this.profileInfo.job,
        company: this.profileInfo.company,
        po_box: this.profileInfo.po_box,
        street_number: this.profileInfo.street_number,
        street_name: this.profileInfo.street_name,
        city_town: this.profileInfo.city_town,
        province: this.profileInfo.province,
        zip_code: this.profileInfo.zip_code,
        file1: this.profileInfo.file1,
        file2: this.profileInfo.file2,
        file3: this.profileInfo.file3,
        file4: this.profileInfo.file4,
      };
      axios
        .post("updateProfile", data)
        .then((response) => {
          console.log(response);
        })
        .catch((errors) => {
          console.log(errors);
        });
    },

    // my properties
    getProp() {
      axios
        .get("getProperties")
        .then((response) => {
          console.log("prop", response);
          this.properties = response.data.properties;
        })
        .catch((errors) => {
          console.log(errors);
        });
    },

    // get fav
    getFav() {
      axios
        .get("getFavourites")
        .then((response) => {
          this.favourites = response.data.fav;
          console.log("fav", this.favourites);
        })
        .catch((errors) => {
          console.log(errors);
        });
    },

    // prefrences
    PrefrencesFn() {
      const data = {
        Rooms: this.prefrences.rooms,
        Toilets: this.prefrences.toilets,
        Rent_Sale: this.prefrences.rent_sale,
        Location: this.prefrences.location,
      };
      this.$v.$touch();
      if (!this.$v.prefrences.$error) {
        axios
          .post("updatePrefrences", data)
          .then((response) => {
            console.log(response);
            this.success = true;
          })
          .catch((errors) => {
            console.log(errors);
          });
      }
    },

    // get rental
    getRental() {
      axios
        .get("rentals")
        .then((response) => {
          this.rental = response.data.rentals;
          this.myRental = response.data.myRequest;
          console.log("rental", this.rental, "my", this.myRental);
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
  },
};
</script>

<style scoped>
.success {
  color: green;
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
#v-pills-tabContent {
  width: 100%;
}
#v-pills-profile,
#v-pills-prop {
  height: calc(100vh - 40px);
  overflow: hidden;
  overflow-y: scroll;
}
form a {
  text-decoration: none;
  font-weight: 500;
}
.rental_requests ul,
.rental_requests ul li button:hover,
.rental_requests ul li button:active,
.rental_requests ul li button:focus {
  border: none;
}
.rental_requests ul li button {
  color: #a1a1a5;
}
.rental_requests .nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  border: none;
  color: #b5121b;
}
.trash {
  width: 20px;
  cursor: pointer;
}
.contract {
  text-decoration: none;
  font-size: 0.9em;
}
.badge {
  padding: 6px 14px;
  border-radius: 6px;
  font-weight: 500;
}
.badge.approve {
  background-color: #b9ffb8;
  color: #2b8004;
}
.badge.cancel {
  background-color: #ffb3b7;
  color: #b5121b;
}
.badge.wait {
  background-color: #fcf3d7;
  color: #cf912d;
}
.search_input {
  font-family: "FontAwesome";
}
.field-icon {
  float: right;
  margin-right: 12px;
  margin-top: -27px;
  position: relative;
  z-index: 2;
  cursor: pointer;
}
/* start media */
@media (max-width: 767.98px) {
  #v-pills-profile,
  #v-pills-prop {
    height: 100vh;
  }
  button span.capitalize {
    font-size: 0.85em;
  }
}
@media (max-width: 991.98px) {
  #v-pills-profile,
  #v-pills-prop {
    height: calc(100vh - 25px);
  }
  button span.capitalize {
    font-size: 0.85em;
  }
  @media (max-width: 767px) {
    .rental_req {
      flex-direction: column;
      gap: 8px;
      text-align: center;
    }
    #v-pills-fav .card {
      margin-bottom: 30px;
    }
  }
}
</style>
