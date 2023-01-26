<template>
  <div class="addprop">
    <form action="#" method="POST" class="form_addprop">
      <h3 class="form-title">Add Property</h3>
      <div class="steps">
        <ul class="step-tab-items">
          <li class="step-item active">
            <font-awesome-icon icon="fa-solid fa-circle" />
          </li>
          <li class="step-item">
            <font-awesome-icon icon="fa-solid fa-circle" />
          </li>
          <li class="step-item">
            <font-awesome-icon icon="fa-solid fa-circle" />
          </li>
          <li class="step-item">
            <font-awesome-icon icon="fa-solid fa-circle" />
          </li>
        </ul>
        <div class="step-tabs">
          <!--#step 01-->
          <div class="step-tab active" id="step-01">
            <div class="row">
              <div class="col-md-6">
                <div class="form-controll field">
                  <label class="label">Add Address</label>
                  <vue-google-autocomplete
                    :country="['ca']"
                    id="map"
                    classname="form-control"
                    placeholder="Start typing"
                    v-model.trim="$v.stepOne.address.$model"
                    v-on:placechanged="getAddressData"
                  >
                  </vue-google-autocomplete>
                  <p
                    v-if="!$v.stepOne.address.required"
                    class="main_color small_font mb-0"
                  >
                    Address is required
                  </p>
                </div>
                <div class="form-controll field">
                  <label class="label">Rent or sale</label>
                  <div class="form-input">
                    <select
                      v-model.trim="$v.stepOne.RorS.$model"
                      type="text"
                      placeholder="Enter Address"
                      class="form-select"
                    >
                      <option selected disabled hidden value="">
                        Rent or Sale
                      </option>
                      <option value="Sale">Sale</option>
                      <option value="Lease">Rent</option>
                    </select>
                  </div>
                  <p
                    v-if="!$v.stepOne.RorS.required"
                    class="main_color small_font mb-0"
                  >
                    Must Select Element
                  </p>
                </div>

                <div class="form-controll field">
                  <label class="label">Add Agent Information</label>
                  <div class="form-input">
                    <textarea
                      placeholder="Enter Agent Information"
                      v-model.trim="$v.stepOne.agentInfo.$model"
                      class="form-control"
                    ></textarea>
                  </div>
                  <p
                    v-if="!$v.stepOne.agentInfo.required"
                    class="main_color small_font mb-0"
                  >
                    Agent Information is required
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <!-- map location -->
                <div class="maplocation">
                  <h4 class="headingSec mb-4">Location on maps</h4>
                  <div
                    id="address_map"
                    style="height: 350px; width: 100%"
                  ></div>
                  <!--                   <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41266661.93352347!2d-61.79051155799839!3d50.85492169779694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2z2YPZhtiv2Kc!5e0!3m2!1sar!2seg!4v1673650676527!5m2!1sar!2seg"
                    width="100%" height="350" style="border: 0" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe> -->
                </div>
              </div>
            </div>

            <div class="form-submit">
              <button
                class="btn disabled_state main_btn px-5"
                type="button"
                tab-target="step-02"
                :disabled="$v.stepOne.$invalid"
              >
                Next
              </button>
            </div>
          </div>

          <!--#step 02-->
          <div class="step-tab" id="step-02">
            <div class="row">
              <div class="col-md-6">
                <div class="field">
                  <label class="label">Video url</label>
                  <div class="control">
                    <input
                      type="text"
                      placeholder="Enter Video url"
                      v-model="video_ul"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="field mt-5">
                  <label class="label"
                    >Upload property photo ( less than 20 photos )</label
                  >
                  <div class="control">
                    <div
                      class="dropzone-container"
                      @dragover="dragover"
                      @dragleave="dragleave"
                      @drop="drop"
                    >
                      <input
                        type="file"
                        name="file"
                        id="fileInput"
                        class="hidden-input"
                        @change="onChange"
                        ref="file"
                        multiple
                      />
                      <label for="fileInput" class="file-label">
                        <div>
                          Drop files here or <u>click here</u> to Upload photo.
                        </div>
                        <font-awesome-icon
                          icon="fa-solid fa-arrow-up-from-bracket"
                        />
                      </label>
                    </div>
                    <!-- Note: Only add the code block below -->
                    <div
                      class="preview-container d-flex flex-column mt-4"
                      v-if="files.length"
                    >
                      <div
                        v-for="file in files"
                        :key="file.name"
                        class="preview-card images-upload"
                      >
                        <div class="photos">
                          <img
                            :src="generateURL(file)"
                            alt=""
                            class="preview-img"
                          />
                          <p>
                            {{ file.name }}
                          </p>
                        </div>
                        <div class="cancel">
                          <button
                            class="ml-2"
                            type="button"
                            @click="remove(files.indexOf(file))"
                            title="Remove file"
                          >
                            <font-awesome-icon icon="fa-solid fa-xmark" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <!--Error message -->
                    <p v-if="!files.length" class="main_color small_font mb-0">
                      Must upload At least One image
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="picDisplayed sticky-top">
                  <h4 class="headingSec mb-4">Add display photo</h4>
                  <div
                    class="imagePreviewWrapper"
                    :style="{ 'background-image': `url(${previewImage})` }"
                    @click="selectImage"
                  ></div>

                  <input ref="fileInput" type="file" @input="pickFile" hidden />
                </div>
              </div>
            </div>
            <div class="form-submit grid-2 justify-content-between">
              <button
                type="button"
                class="btn btn-light-prev px-5"
                tab-target="step-01"
              >
                Previous
              </button>
              <button
                type="button"
                class="btn disabled_state main_btn px-5"
                tab-target="step-03"
                :disabled="!files.length"
              >
                Next
              </button>
            </div>
          </div>
          <!--#step 03-->
          <div class="step-tab" id="step-03">
            <div class="propertyDetails mb-4">
              <h4 class="headingSec mb-4">Property Details</h4>
              <div class="row">
                <div class="col-md-6">
                  <div class="field">
                    <label class="label">Property Price</label>
                    <div class="control">
                      <input
                        type="number"
                        placeholder="Enter Property Price"
                        v-model.trim="$v.stepThree.propdetails.$model"
                        class="form-control"
                        required
                      />
                    </div>
                    <p
                      v-if="!$v.stepThree.propdetails.required"
                      class="main_color small_font mb-0"
                    >
                      Property Price is required
                    </p>
                  </div>
                </div>
                <div class="col-md-6" v-if="$v.stepOne.RorS.$model == 'Lease'">
                  <div class="field">
                    <label class="label">Annual Property Taxes</label>
                    <div class="control">
                      <input
                        type="number"
                        placeholder="Enter Annual Property Taxes"
                        v-model.trim="$v.stepThree.proptaxes.$model"
                        class="form-control"
                      />
                    </div>
                    <p
                      v-if="!$v.stepThree.proptaxes.required"
                      class="main_color small_font mb-0"
                    >
                      Annual Property Taxes is required
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="field">
                    <label class="label">Parking Type</label>
                    <div class="control">
                      <select
                        v-model.trim="$v.stepThree.parkingType.$model"
                        type="text"
                        class="form-select"
                      >
                        <option selected disabled hidden value="">
                          Please select one
                        </option>
                        <option value="parking">Parking</option>
                        <option value="No parking">No parking</option>
                      </select>
                    </div>
                    <p
                      v-if="!$v.stepThree.parkingType.required"
                      class="main_color small_font mb-0"
                    >
                      You must select Element
                    </p>
                  </div>
                </div>
                <!---<div class="col-md-6">
                  <div class="field">
                    <label class="label">Property MLS</label>
                    <div class="control">
                      <input
                        type="text"
                        placeholder="Enter Property MLS"
                        v-model="$v.propMls.$model"
                        class="form-control" />
                    </div>
                   <p v-if="$v.propMls.$error" class="main_color small_font mb-0">
              This Annual Property Taxes is invalid
            </p>
                  </div>
                </div>-->
                <div class="col-md-6">
                  <div class="field">
                    <label class="label">Property Type</label>
                    <div class="control">
                      <select
                        v-model.trim="$v.stepThree.propType.$model"
                        type="text"
                        class="form-select"
                      >
                        <option selected disabled hidden value="">
                          Please select one
                        </option>
                        <option value="residential">Residential</option>
                        <option value="condo">Condo</option>
                      </select>
                    </div>
                    <p
                      v-if="!$v.stepThree.propType.required"
                      class="main_color small_font mb-0"
                    >
                      You must select Element
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="buildingDetails mb-4">
              <h4 class="headingSec mb-4">Building Details</h4>
              <div class="row">
                <div class="col-md-6">
                  <div class="field">
                    <label class="label">Cooling</label>
                    <div class="control">
                      <select
                        v-model.trim="$v.stepThree.cooling.$model"
                        type="text"
                        class="form-select"
                      >
                        <option selected disabled hidden value="">
                          Please select onprogress
                        </option>
                        <option value="">None</option>
                        <option value="Central Air">Central Air</option>
                        <option value="Wall Unit">Wall Unit</option>
                        <option value="Window Unit">Window Unit</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <p
                      v-if="!$v.stepThree.cooling.required"
                      class="main_color small_font mb-0"
                    >
                      You must select Element
                    </p>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="field">
                    <label class="label">Bedrooms</label>
                    <div class="control">
                      <select
                        v-model.trim="$v.stepThree.bedrooms.$model"
                        type="text"
                        class="form-select"
                      >
                        <option selected disabled hidden value="">
                          Please select one
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </div>
                    <p
                      v-if="!$v.stepThree.bedrooms.required"
                      class="main_color small_font mb-0"
                    >
                      You must select Element
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="field">
                    <label class="label">Heating</label>
                    <div class="control">
                      <select
                        v-model.trim="$v.stepThree.heating.$model"
                        type="text"
                        class="form-select"
                      >
                        <option selected disabled hidden value="">
                          Please select one
                        </option>
                        <option value="">None</option>
                        <option value="Forced Air">Forced Air</option>
                        <option value="Radiant">Radiant</option>
                        <option value="Water">Water</option>
                        <option value="Heat Pump">Heat Pump</option>
                        <option value="Baseboard">Baseboard</option>
                        <option value="Fan Coil">Fan Coil</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <p
                      v-if="!$v.stepThree.heating.required"
                      class="main_color small_font mb-0"
                    >
                      You must select Element
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="field">
                    <label class="label">Bathrooms</label>
                    <div class="control">
                      <select
                        v-model.trim="$v.stepThree.bathrooms.$model"
                        type="text"
                        class="form-select"
                      >
                        <option selected disabled hidden value="">
                          Please select one
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </div>
                    <p
                      v-if="!$v.stepThree.bathrooms.required"
                      class="main_color small_font mb-0"
                    >
                      You must select Element
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="field">
                    <label class="label">Bedrooms Plus</label>
                    <div class="control">
                      <select
                        v-model.trim="$v.stepThree.bedroomsplus.$model"
                        type="text"
                        class="form-select"
                      >
                        <option selected disabled hidden value="">
                          Please select one
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </div>
                    <p
                      v-if="!$v.stepThree.bedroomsplus.required"
                      class="main_color small_font mb-0"
                    >
                      You must select Element
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="exteriorfeatures mb-5">
              <h4 class="headingSec mb-4">Exterior Features</h4>
              <div class="row">
                <div class="col-md-6">
                  <div class="field">
                    <label class="label">Exterior Finish</label>
                    <div class="control">
                      <select
                        v-model="exteriorFinish"
                        type="text"
                        class="form-select"
                      >
                        <option selected disabled hidden value="">
                          Please select one
                        </option>
                        <option value="Parking Type" selected disabled>
                          Exterior Finish
                        </option>
                        <option value="Alum Siding">Alum Siding</option>
                        <option value="Brick">Brick</option>
                        <option value="Stone">Stone</option>
                        <option value="Brick Front">Brick Front</option>
                        <option value="Board/Batten">Board/Batten</option>
                        <option value="Wood">Wood</option>
                        <option value="Shingle">Shingle</option>
                        <option value="Insulbrick">Insulbrick</option>
                        <option value="Vinyl Siding">Vinyl Siding</option>
                        <option value="Stucco/Plaster">Stucco/Plaster</option>
                        <option value="Metal/Side">Metal/Side</option>
                        <option value="Concrete">Concrete</option>
                        <option value="Log">Log</option>
                      </select>
                    </div>
                    <!--                     <p v-if="$v.exteriorFinish.$error" class="main_color small_font mb-0">
                      You must select Element
                    </p> -->
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="field">
                    <label class="label">Basement</label>
                    <div class="control">
                      <select
                        v-model="basement"
                        type="text"
                        class="form-select"
                      >
                        <option selected disabled hidden value="">
                          Please select one
                        </option>
                        <option value="None">None</option>
                        <option value="Finished">Finished</option>
                        <option value="Part Fin">Part Fin</option>
                        <option value="Full">Full</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Fin W/O">Fin W/O</option>
                        <option value="Crawl Space">Crawl Space</option>
                        <option value="Unfinished">Unfinished</option>
                        <option value="Sep Entrance">Sep Entrance</option>
                        <option value="Part Bsmt">Part Bsmt</option>
                        <option value="W/O">W/O</option>
                        <option value="Half">Half</option>
                        <option value="Walk-Up">Walk-Up</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <!--                     <p v-if="$v.basement.$error" class="main_color small_font mb-0">
                      You must select Element
                    </p> -->
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="field">
                    <label class="label">Secondry Basement</label>
                    <div class="control">
                      <select
                        v-model="secBasement"
                        type="text"
                        class="form-select"
                      >
                        <option selected disabled hidden value="">
                          Please select one
                        </option>
                        <option value="None">None</option>
                        <option value="Finished">Finished</option>
                        <option value="Part Fin">Part Fin</option>
                        <option value="Full">Full</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Fin W/O">Fin W/O</option>
                        <option value="Crawl Space">Crawl Space</option>
                        <option value="Unfinished">Unfinished</option>
                        <option value="Sep Entrance">Sep Entrance</option>
                        <option value="Part Bsmt">Part Bsmt</option>
                        <option value="W/O">W/O</option>
                        <option value="Half">Half</option>
                        <option value="Walk-Up">Walk-Up</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <!--                     <p v-if="$v.secBasement.$error" class="main_color small_font mb-0">
                      You must select Element
                    </p> -->
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="field">
                    <label class="label">Sewer</label>
                    <div class="control">
                      <select v-model="sewer" type="text" class="form-select">
                        <option selected disabled hidden value="">
                          Please select one
                        </option>
                        <option value="None">None</option>
                        <option value="Sewers">Sewers</option>
                        <option value="Septic">Septic</option>
                        <option value="Tank">Tank</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <!--                     <p v-if="$v.sewer.$error" class="main_color small_font mb-0">
                      You must select Element
                    </p> -->
                  </div>
                </div>
              </div>
            </div>

            <div class="form-submit grid-2 justify-content-between">
              <button
                type="button"
                class="btn btn-light-prev px-5"
                tab-target="step-02"
              >
                Previous
              </button>
              <button
                type="button"
                class="btn disabled_state main_btn px-5"
                tab-target="step-04"
                :disabled="$v.stepThree.$invalid"
              >
                Next
              </button>
            </div>
          </div>
          <!--#step 04-->
          <div class="step-tab" id="step-04">
            <div class="row">
              <div class="col-md-6">
                <h4 class="headingSec mb-4">Amenities</h4>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-input d-flex align-items-center">
                      <input
                        type="checkbox"
                        value="Y"
                        name="FamilyRoom"
                        id="FamilyRoom"
                        class="form-check-input me-3"
                        v-model="Den_fr"
                      />
                      <label class="label">Family Room</label>
                    </div>
                    <div class="form-input d-flex align-items-center">
                      <input
                        type="checkbox"
                        value="Y"
                        name="Fireplace"
                        id="Fireplace"
                        class="form-check-input me-3"
                        v-model="Fpl_num"
                      />
                      <label class="label">Fireplace/Stove</label>
                    </div>
                    <div class="form-input d-flex align-items-center">
                      <input
                        type="checkbox"
                        value="Y"
                        name="CAC"
                        id="CAC"
                        class="form-check-input me-3"
                        v-model="Cac_inc"
                      />
                      <label class="label">CAC</label>
                    </div>
                    <div class="form-input d-flex align-items-center">
                      <input
                        type="checkbox"
                        value="Y"
                        name="EnergyC"
                        id="EnergyC"
                        class="form-check-input me-3"
                        v-model="Energy_cert"
                      />
                      <label class="label">Energy Certification</label>
                    </div>
                    <div class="form-input d-flex align-items-center">
                      <input
                        type="checkbox"
                        value="Y"
                        name="Parking"
                        id="Parking"
                        class="form-check-input me-3"
                        v-model="Prkg_inc"
                      />
                      <label class="label">Parking</label>
                    </div>
                    <div class="form-input d-flex align-items-center">
                      <input
                        type="checkbox"
                        value="Y"
                        name="CableTV"
                        id="CableTV"
                        class="form-check-input me-3"
                        v-model="Cable"
                      />
                      <label class="label">Cable TV</label>
                    </div>
                    <div class="form-input d-flex align-items-center">
                      <input
                        type="checkbox"
                        value="Y"
                        name="CommonEl"
                        id="CommonEl"
                        class="form-check-input me-3"
                        v-model="Comel_inc"
                      />
                      <label class="label">Common Elements</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-input d-flex align-items-center">
                      <input
                        type="checkbox"
                        value="Y"
                        name="Hydro"
                        id="Hydro"
                        class="form-check-input me-3"
                        v-model="Hydro_inc"
                      />
                      <label class="label">Hydro</label>
                    </div>
                    <div class="form-input d-flex align-items-center">
                      <input
                        type="checkbox"
                        value="Y"
                        name="StreetD"
                        id="StreetD"
                        class="form-check-input me-3"
                        v-model="St_dir"
                      />
                      <label class="label">Street Direction</label>
                    </div>
                    <div class="form-input d-flex align-items-center">
                      <input
                        type="checkbox"
                        value="Y"
                        name="Kitchens"
                        id="Kitchens"
                        class="form-check-input me-3"
                        v-model="Num_kit"
                      />
                      <label class="label">Kitchens</label>
                    </div>
                    <div class="form-input d-flex align-items-center">
                      <input
                        type="checkbox"
                        value="Y"
                        name="PrivateE"
                        id="PrivateE"
                        class="form-check-input me-3"
                        v-model="Pvt_ent"
                      />
                      <label class="label">Private Entrance</label>
                    </div>
                    <div class="form-input d-flex align-items-center">
                      <input
                        type="checkbox"
                        value="Y"
                        name="CentralV"
                        id="CentralV"
                        class="form-check-input me-3"
                        v-model="Central_vac"
                      />
                      <label class="label">Central Vac</label>
                    </div>
                    <div class="form-input d-flex align-items-center">
                      <input
                        type="checkbox"
                        value="Y"
                        name="Heat"
                        id="Heat"
                        class="form-check-input me-3"
                        v-model="Heat_inc"
                      />
                      <label class="label">Heat</label>
                    </div>
                    <div class="form-input d-flex align-items-center">
                      <input
                        type="checkbox"
                        value="Y"
                        name="Water"
                        id="Water"
                        class="form-check-input me-3"
                        v-model="Water_inc"
                      />
                      <label class="label">Water</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <h4 class="headingSec mb-4">Neighbourhood Features</h4>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-input d-flex align-items-center">
                      <input
                        type="checkbox"
                        name="Fenced"
                        id="Fenced"
                        class="form-check-input me-3"
                        value="Fenced Yard"
                        v-model="neighbFeatures"
                      />
                      <label class="label">Fenced Yard</label>
                    </div>
                    <div class="form-input d-flex align-items-center">
                      <input
                        type="checkbox"
                        name="Cul"
                        id="Cul"
                        class="form-check-input me-3"
                        value="Cul De Sac"
                        v-model="neighbFeatures"
                      />
                      <label class="label">Cul De Sac</label>
                    </div>
                    <div class="form-input d-flex align-items-center">
                      <input
                        type="checkbox"
                        name="School"
                        id="School"
                        class="form-check-input me-3"
                        value="School"
                        v-model="neighbFeatures"
                      />
                      <label class="label">School</label>
                    </div>
                    <div class="form-input d-flex align-items-center">
                      <input
                        type="checkbox"
                        name="Wooded"
                        id="Wooded"
                        class="form-check-input me-3"
                        value="Wooded/Treed"
                        v-model="neighbFeatures"
                      />
                      <label class="label">Wooded/Treed</label>
                    </div>
                  </div>
                </div>
              </div>
              <!--Rooms Details-->
              <div class="col-md-8">
                <div class="Roomsdeta mt-4">
                  <h4 class="headingSec">Rooms Details</h4>
                  <div class="propertytables table-responsive">
                    <table class="table">
                      <thead>
                        <th>Room</th>
                        <th>Dimensions</th>
                        <th>Description</th>
                      </thead>
                      <tbody>
                        <tr v-for="roomData in roomDatails" :key="roomData">
                          <td>
                            <div class="form-input">
                              <input
                                type="text"
                                class="form-control"
                                v-model="roomData.Room"
                                placeholder="kitchen"
                                required
                              />
                            </div>
                          </td>
                          <td>
                            <div class="form-input">
                              <input
                                type="text"
                                name="Dimensions"
                                id="Dimensions"
                                class="form-control"
                                v-model="roomData.Dimensions"
                                placeholder="6.1 m X 3.05 m"
                                required
                              />
                            </div>
                          </td>
                          <td>
                            <div class="form-input">
                              <input
                                type="text"
                                name="Description"
                                id="Description"
                                class="form-control"
                                v-model="roomData.Description"
                                placeholder="Description"
                                required
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colspan="3">
                            <button
                              @click="addRow(roomData)"
                              class="form-btn"
                              type="button"
                            >
                              Add New Room
                            </button>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div class="form-submit grid-2 justify-content-between">
              <button
                type="button"
                class="btn btn-light-prev px-5"
                tab-target="step-03"
              >
                Previous
              </button>
              <button
                type="submit"
                class="btn main_btn px-5"
                @click.prevent="addProp()"
              >
                Add Property
              </button>
            </div>

            <!-- Add proprerty Pop Up-->
            <!--Rent Modal -->
            <div
              class="modal fade"
              id="addprop"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div
                    class="modal-body d-flex flex-column justify-content-center align-items-center"
                  >
                    <img
                      src="@/assets/images/tick.gif"
                      alt=""
                      class="img-fluid success"
                    />
                    <p class="lg_font text-center">
                      It will be reviewed by the administration and the
                      advertisement will be published
                    </p>
                    <router-link
                      to="/"
                      class="btn main_btn px-5 mb-4 lg_font capitalize"
                      data-bs-dismiss="modal"
                    >
                      Back to home
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, requiredIf } from "vuelidate/lib/validators";
import axios from "axios";
import Vue from "vue";
import { addressMapAutocomplete } from "@/assets/js/search_address.js";
import VueGoogleAutocomplete from "vue-google-autocomplete";
import { add } from "dom7";

export default {
  name: "AddProperty",
  mixins: [validationMixin],
  components: { VueGoogleAutocomplete },
  data() {
    return {
      address: "",
      video_ul: "",
      //step 1
      stepOne: {
        address: "",
        RorS: "",
        agentInfo: "",
      },
      lat: "",
      lng: "",
      //step 2
      files: [],
      isDragging: false,
      previewImage: require("@/assets/images/propertypic.png"),
      //step 3
      stepThree: {
        propdetails: "",
        parkingType: "",
        proptaxes: "",
        propType: "",
        cooling: "",
        bedrooms: "",
        heating: "",
        bathrooms: "",
        bedroomsplus: "",
      },
      /* propdetails: "",
      parkingType: "",
      proptaxes: "",
      propType: "",
      cooling: "",
      bedrooms: "",
      heating: "",
      bathrooms: "",
      bedroomsplus: "", */
      exteriorFinish: "",
      basement: "",
      secBasement: "",
      sewer: "",
      Cable: false,
      Cac_inc: "",
      Comel_inc: "",
      Den_fr: "",
      Energy_cert: "",
      Fpl_num: "",
      Heat_inc: "",
      Hydro_inc: "",
      Num_kit: "",
      Prkg_inc: "",
      Pvt_ent: "",
      St_dir: "",
      Water_inc: "",
      Central_vac: "",
      neighbFeatures: [],
      roomDatails: [
        {
          Room: "",
          Dimensions: "",
          Description: "",
        },
      ],
    };
  },
  validations: {
    //step 1
    stepOne: {
      address: {
        required,
      },
      RorS: {
        required,
      },
      agentInfo: {
        required,
      },
    },
    //step 2
    files: {
      required: requiredIf(function (nestedModel) {
        return this.files.length == 0; // New changes
      }),
    },
    //step 3
    stepThree: {
      propdetails: {
        required,
      },
      propType: {
        required,
      },

      parkingType: {
        required,
      },
      proptaxes: {
        required,
      },
      cooling: {
        required,
      },
      bedrooms: {
        required,
      },
      heating: {
        required,
      },
      bathrooms: {
        required,
      },
      bedroomsplus: {
        required,
      },
    },
    /*     propdetails: {
      required,
    },
    propType: {
      required,
    },

    parkingType: {
      required,
    },
    proptaxes: {
      required,
    },
    cooling: {
      required,
    },
    bedrooms: {
      required,
    },
    heating: {
      required,
    },
    bathrooms: {
      required,
    },
    bedroomsplus: {
      required,
    }, */
  },

  methods: {
    // ---------------------------
    onChange() {
      console.log(this.address);
      this.files = [...this.$refs.file.files];
    },
    dragover(e) {
      e.preventDefault();
      this.isDragging = true;
    },
    dragleave() {
      this.isDragging = false;
    },
    drop(e) {
      e.preventDefault();
      this.$refs.file.files = e.dataTransfer.files;
      this.onChange();
      this.isDragging = false;
    },
    selectImage() {
      this.$refs.fileInput.click();
    },
    pickFile() {
      let input = this.$refs.fileInput;
      let file = input.files;
      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage = e.target.result;
        };
        reader.readAsDataURL(file[0]);
        this.$emit("input", file[0]);
      }
    },
    generateURL(file) {
      let fileSrc = URL.createObjectURL(file);
      setTimeout(() => {
        URL.revokeObjectURL(fileSrc);
      }, 1000);
      return fileSrc;
    },
    remove(i) {
      this.files.splice(i, 1);
    },
    /*uploadFiles() {
const files = this.files;
const formData = new FormData();
files.forEach((file) => {
    formData.append("selectedFiles", file);
});

axios({
    method: "POST",
    url: "http://path/to/api/upload-files",
    data: formData,
    headers: {
        "Content-Type": "multipart/form-data",
    },
});
},*/
    onFile(e) {
      const files = e.target.files;
      if (!files.length) return;

      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = () => (this.imgSrc = reader.result);
    },
    addRow: function () {
      this.roomDatails.push({ Room: "", Dimensions: "", Description: "" });
    },
    getAddressData: function (addressData, placeResultData, id) {
      this.lat = addressData.latitude;
      this.lng = addressData.longitude;
      addressMapAutocomplete(addressData.latitude, addressData.longitude);
      this.stepOne.address = placeResultData.formatted_address;
    },

    addProp() {
      console.log("test");
      const data = {
        S_r: this.stepOne.RorS,
        Addr: this.stepOne.address,
        Orig_dol: this.propdetails,
        video_ul: this.video_ul,
        lat: this.lat,
        lng: this.lng,
        //step 2
        files: this.$refs.file.files,
        //step 3
        propdetails: this.stepThree.propdetails,
        parking_type: this.stepThree.parkingType,
        taxes: this.stepThree.proptaxes,
        property_type: this.stepThree.propType,
        cooling: this.stepThree.cooling,
        Br: this.stepThree.bedrooms,
        heating: this.stepThree.heating,
        Bath_tot: this.stepThree.bathrooms,
        bedroomsplus: this.stepThree.bedroomsplus,
        exterior_features: {
          Basement: this.basement,
          "Exterior Finish": this.exteriorFinish,
          "Secondry Basement": this.secBasement,
          Sewer: this.sewer,
        },

        Cable: this.Cable,
        Cac_inc: this.Cac_inc,
        Comel_inc: this.Comel_inc,
        Den_fr: this.Den_fr,
        Energy_cert: this.Energy_cert,
        Fpl_num: this.Fpl_num,
        Heat_inc: this.Heat_inc,
        Hydro_inc: this.Hydro_inc,
        Num_kit: this.Num_kit,
        Prkg_inc: this.Prkg_inc,
        Pvt_ent: this.Pvt_ent,
        St_dir: this.St_dir,
        Water_inc: this.Water_inc,
        Central_vac: this.Central_vac,
        neighbFeatures: this.neighbFeatures,
        rooms: this.roomDatails,
        Orig_dol: this.stepThree.propdetails,
      };
      console.log(data);
      this.$v.$touch();
      console.log(this.$v.$error);
      if (!this.$v.$error) {
        axios
          .post(
            "https://test.crimsonrose.a2hosted.com/api/propertyCreate",
            data,
            {}
          )
          .then((response) => {
            console.log(response);
            this.$toast.success("Property is added!");
          })
          .catch((errors) => {
            console.log(response);
            this.$toast.error("Failed request!");
          });
      }
    },
  },
  mounted() {
    addressMapAutocomplete();
    //this.$refs.address.focus();
    function test() {
      // for form steps
      const allStepBtn = document.querySelectorAll("[tab-target]");
      const allStepItem = document.querySelectorAll(".step-item");
      const allTabs = document.querySelectorAll(".step-tab");
      allStepBtn.forEach((item) => {
        item.addEventListener("click", () => {
          let currentTabId = item.getAttribute("tab-target");
          let currentTab = document.getElementById(`${currentTabId}`);
          allStepItem.forEach((item) => {
            item.classList.remove("active");
          });
          allTabs.forEach((tab, i) => {
            if (tab.id === currentTab.id) {
              for (let l = 0; i >= 0; i--) {
                allStepItem[i].classList.add("active");
              }
            }
          });
          allTabs.forEach((item) => {
            item.classList.remove("active");
          });
          currentTab.classList.add("active");
          item.classList.add("active");
        });
      });
    }
    test();
  },
};
</script>

<style lang="scss" scoped>
#videoInput {
  display: none;
}

.Roomsdeta {
  table {
    margin-bottom: 0;
  }

  .propertytables {
    border-radius: 8px;
  }

  .propertytables th,
  .propertytables td {
    padding: 16px;
    border: 0;
  }

  .Roomsdeta .propertytables td {
    color: #a1a1a5;
  }

  .Roomsdeta .propertytables select {
    color: #b5121b;
  }

  .propertytables thead {
    background: #f5f5f5;
  }

  .propertytables tfoot button {
    background: transparent;
    color: #fff;
  }

  .propertytables tfoot {
    background: #000;
    color: #fff;
  }

  .propertytables tfoot button {
    width: 100%;
    text-align: center;
    border: 0;
  }
}

.addprop {
  background: #f5f5f5;
  padding: 80px 60px;
}

.form_addprop {
  background: #ffffff;
  border-radius: 8px;
  padding: 60px;

  .form-title {
    text-align: center;
    font-family: "Literata";
    font-style: normal;
    font-weight: 400;
    font-size: 45px;
    line-height: 95px;
    text-transform: capitalize;
    color: #000000;
    margin-bottom: 30px;
  }

  .field {
    margin-bottom: 25px;

    label {
      margin-bottom: 16px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: -0.03em;
      color: #626262;
    }

    .form-control,
    .form-select {
      border: 1px solid #c8c8c8;
      color: #626262;
      height: 50px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: -0.03em;
    }

    .form-select:focus,
    .form-control:focus {
      box-shadow: none;
    }

    .textarea {
      resize: none;
    }
  }
}

.form-submit {
  margin: 80px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .form-btn {
    background: #b5121b;
    border-radius: 6px;
    height: 64px;
    padding: 15px;
    width: 296px;
    color: #fff;
    border: 0;
  }
}

.form-submit .form-btn:hover {
  background: #000;
  transition: all 0.2s ease-out;
}

.picDisplayed img {
  width: 400px;
  width: 518px;
  height: 350px;
  border-radius: 8px;
}

.hidden-input {
  opacity: 0;
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
}

.imagePreviewWrapper {
  width: 518px;
  height: 350px;
  display: block;
  cursor: pointer;
  margin: 30px 0;
  background-size: cover;
  background-position: center center;
  border-radius: 8px;
}

.main {
  display: flex;
  flex-grow: 1;
  align-items: center;
  height: 100vh;
  justify-content: center;
  text-align: center;
}

.file-label {
  border: 1px solid #c8c8c8;
  color: rgb(98 98 98 / 50%);
  height: 50px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.03em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  cursor: pointer;
  padding: 16px;
  margin-top: 16px;
}

.hidden-input {
  opacity: 0;
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
}

.preview-container {
  display: block;
  margin-top: 2rem;
}

.preview-card {
  display: flex;
  padding: 5px;
  margin-left: 5px;
  justify-content: space-between;

  .cancel button {
    background: transparent;
    border: 0;
    font-size: 24px;
    color: #b5121b;
  }
}

#video {
  border-radius: 8px;
  margin-bottom: 16px;
}

.preview-card.images-upload {
  .cancel button {
    background: transparent;
    border: 0;
    font-size: 24px;
    color: #b5121b;
  }
}

.preview-img {
  width: 50px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #a2a2a2;
  background-color: #a2a2a2;
}

/*Steps*/

.step-tab-items {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  justify-content: center;
  padding: 0;
}

.step-tab-items .step-item {
  position: relative;
  list-style: none;
  width: 48px;
  height: 48px;
  background: #e2e2e2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
}

.step-tab-items .step-item.active {
  background: #b5121b;
}

.step-tab-items .step-item:not(:last-child) {
  margin-right: 280px;
}

.step-tab-items .step-item:not(:last-of-type)::before {
  position: absolute;
  content: "";
  width: 260px;
  height: 2px;
  background: rgb(241, 239, 239);
  left: calc(100% + 10px);
}

.step-tab-items .step-item.active::before {
  background: #b5121b;
}

.step-tabs .step-tab {
  display: none;
}

.step-tabs .step-tab.active {
  display: block;
}

#step-04 {
  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 40px;
    text-transform: capitalize;
    color: #a1a1a5;
  }

  .form-check-input {
    border: 1px solid #a1a1a5;
    border-radius: 2px;
  }

  .form-check-input:checked {
    background-color: #626262;
  }
}

.form-submit .btn-light-prev {
  background: #c8c8c8;
}
textarea {
  resize: none;
}
@media (max-width: 992px) {
  .step-tab-items .step-item:not(:last-child) {
    margin-right: 15% !important;
  }
  .step-tab-items .step-item:not(:last-of-type)::before {
    width: 100% !important;
  }
  .picDisplayed {
    margin-top: 16px;
  }
  .imagePreviewWrapper {
    width: 100%;
    height: 250px;
  }
}
@media (max-width: 520px) {
  .addprop {
    padding: 30px;
  }
  .form_addprop {
    padding: 30px;
  }
  .step-tab-items .step-item:not(:last-child) {
    margin-right: 20% !important;
  }
  .step-tab-items .step-item {
    width: 25.5px;
    height: 25.5px;
  }
  #step-02,
  #step-03,
  #step-04 {
    .form-submit {
      .btn-light-prev,
      .main_btn {
        padding: 5px 10px !important;
      }
    }
  }
}
</style>
