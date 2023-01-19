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
                  <div class="form-input">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      class="form-control"
                      v-model="$v.stepOne.address.$model"
                      placeholder="Enter Address"
                      required
                    />
                  </div>
                  <p
                    v-if="$v.stepOne.address.$error"
                    class="main_color small_font mb-0"
                  >
                    this {{ address }} is required
                  </p>
                </div>

                <div class="form-controll field">
                  <label class="label">Rent or sale</label>
                  <div class="form-input">
                    <select
                      v-model="$v.stepOne.RorS.$model"
                      type="text"
                      placeholder="Enter Address"
                      class="form-select"
                    >
                      <option selected disabled hidden value="">
                        Rent or sale
                      </option>
                      <option>A</option>
                      <option>B</option>
                    </select>
                  </div>
                  <p
                    v-if="$v.stepOne.RorS.$error"
                    class="main_color small_font mb-0"
                  >
                    this {{ RorS }} is required
                  </p>
                </div>

                <div class="form-controll field">
                  <label class="label">Add Agent Information</label>
                  <div class="form-input">
                    <textarea
                      placeholder="Enter Agent Information"
                      v-model="$v.stepOne.agentInfo.$model"
                      class="form-control"
                    ></textarea>
                  </div>
                  <p
                    v-if="$v.stepOne.agentInfo.$error"
                    class="main_color small_font mb-0"
                  >
                    this {{ address }} is required
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <!-- map location -->
                <div class="maplocation">
                  <h4 class="headingSec mb-4">Location on maps</h4>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41266661.93352347!2d-61.79051155799839!3d50.85492169779694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2z2YPZhtiv2Kc!5e0!3m2!1sar!2seg!4v1673650676527!5m2!1sar!2seg"
                    width="100%"
                    height="350"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
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
                  <label class="label">Upload a Video or 3D tour</label>
                  <div class="control">
                    <input
                      id="video-input"
                      type="file"
                      class="hidden-input"
                      accept="video/*"
                    />
                    <label for="video-input" class="file-label">
                      <div><u>click here</u> to Upload a Video or 3D tour.</div>
                      <font-awesome-icon
                        icon="fa-solid fa-arrow-up-from-bracket"
                      />
                    </label>
                    <video
                      id="videoInput"
                      width="100%"
                      height="300"
                      controls
                    ></video>
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
                class="btn main_btn px-5"
                tab-target="step-03"
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
                        v-model="$v.propdetails.$model"
                        class="form-control"
                        required
                      />
                    </div>
                    <p
                      v-if="$v.propdetails.$error"
                      class="main_color small_font mb-0"
                    >
                      This {{ propdetails }} is required
                    </p>
                  </div>
                </div>
                <!---<div class="col-md-6">
                  <div class="field">
                    <label class="label">Annual Property Taxes</label>
                    <div class="control">
                      <input
                        type="number"
                        placeholder="Enter Annual Property Taxes"
                        v-model="$v.proptaxes.$model"
                        class="form-control" />
                    </div>
                   <p v-if="$v.proptaxes.$error" class="main_color small_font mb-0">
              This Annual Property Taxes is invalid
            </p>
                  </div>
                </div>-->
                <div class="col-md-6">
                  <div class="field">
                    <label class="label">Parking Type</label>
                    <div class="control">
                      <select
                        v-model="$v.parkingType.$model"
                        type="text"
                        class="form-select"
                      >
                        <option selected disabled hidden value="">
                          Please select one
                        </option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                      </select>
                    </div>
                    <p
                      v-if="$v.parkingType.$error"
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
                        v-model="$v.propType.$model"
                        type="text"
                        class="form-select"
                      >
                        <option selected disabled hidden value="">
                          Please select one
                        </option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                      </select>
                    </div>
                    <p
                      v-if="$v.propType.$error"
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
                        v-model="$v.cooling.$model"
                        type="text"
                        class="form-select"
                      >
                        <option selected disabled hidden value="">
                          Please select one
                        </option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                      </select>
                    </div>
                    <p
                      v-if="$v.cooling.$error"
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
                        v-model="$v.bedrooms.$model"
                        type="text"
                        class="form-select"
                      >
                        <option selected disabled hidden value="">
                          Please select one
                        </option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                      </select>
                    </div>
                    <p
                      v-if="$v.bedrooms.$error"
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
                        v-model="$v.heating.$model"
                        type="text"
                        class="form-select"
                      >
                        <option selected disabled hidden value="">
                          Please select one
                        </option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                      </select>
                    </div>
                    <p
                      v-if="$v.heating.$error"
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
                        v-model="$v.bathrooms.$model"
                        type="text"
                        class="form-select"
                      >
                        <option selected disabled hidden value="">
                          Please select one
                        </option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                      </select>
                    </div>
                    <p
                      v-if="$v.bathrooms.$error"
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
                        v-model="$v.bedroomsplus.$model"
                        type="text"
                        class="form-select"
                      >
                        <option selected disabled hidden value="">
                          Please select one
                        </option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                      </select>
                    </div>
                    <p
                      v-if="$v.bedroomsplus.$error"
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
                        v-model="$v.exteriorFinish.$model"
                        type="text"
                        class="form-select"
                      >
                        <option selected disabled hidden value="">
                          Please select one
                        </option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                      </select>
                    </div>
                    <p
                      v-if="$v.exteriorFinish.$error"
                      class="main_color small_font mb-0"
                    >
                      You must select Element
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="field">
                    <label class="label">Basement</label>
                    <div class="control">
                      <select
                        v-model="$v.basement.$model"
                        type="text"
                        class="form-select"
                      >
                        <option selected disabled hidden value="">
                          Please select one
                        </option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                      </select>
                    </div>
                    <p
                      v-if="$v.basement.$error"
                      class="main_color small_font mb-0"
                    >
                      You must select Element
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="field">
                    <label class="label">Secondry Basement</label>
                    <div class="control">
                      <select
                        v-model="$v.secBasement.$model"
                        type="text"
                        class="form-select"
                      >
                        <option selected disabled hidden value="">
                          Please select one
                        </option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                      </select>
                    </div>
                    <p
                      v-if="$v.secBasement.$error"
                      class="main_color small_font mb-0"
                    >
                      You must select Element
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="field">
                    <label class="label">Sewer</label>
                    <div class="control">
                      <select
                        v-model="$v.sewer.$model"
                        type="text"
                        class="form-select"
                      >
                        <option selected disabled hidden value="">
                          Please select one
                        </option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                      </select>
                    </div>
                    <p
                      v-if="$v.sewer.$error"
                      class="main_color small_font mb-0"
                    >
                      You must select Element
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="form-submit grid-2 justify-content-between">
              <button
                type="button"
                class="form-btn btn-light-prev"
                tab-target="step-02"
              >
                Previous
              </button>
              <button type="button" class="form-btn" tab-target="step-04">
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
                        name="FamilyRoom"
                        id="FamilyRoom"
                        class="form-check-input me-3"
                        value="Family Room"
                        v-model="amenities"
                      />
                      <label class="label">Family Room</label>
                    </div>
                    <div class="form-input d-flex align-items-center">
                      <input
                        type="checkbox"
                        name="Fireplace"
                        id="Fireplace"
                        class="form-check-input me-3"
                        value="Fireplace/Stove"
                        v-model="amenities"
                      />
                      <label class="label">Fireplace/Stove</label>
                    </div>
                    <div class="form-input d-flex align-items-center">
                      <input
                        type="checkbox"
                        name="CAC"
                        id="CAC"
                        class="form-check-input me-3"
                        value="CAC"
                        v-model="amenities"
                      />
                      <label class="label">CAC</label>
                    </div>
                    <div class="form-input d-flex align-items-center">
                      <input
                        type="checkbox"
                        name="EnergyC"
                        id="EnergyC"
                        class="form-check-input me-3"
                        value="Energy Certification"
                        v-model="amenities"
                      />
                      <label class="label">Energy Certification</label>
                    </div>
                    <div class="form-input d-flex align-items-center">
                      <input
                        type="checkbox"
                        name="Parking"
                        id="Parking"
                        class="form-check-input me-3"
                        value="Parking"
                        v-model="amenities"
                      />
                      <label class="label">Parking</label>
                    </div>
                    <div class="form-input d-flex align-items-center">
                      <input
                        type="checkbox"
                        name="CableTV"
                        id="CableTV"
                        class="form-check-input me-3"
                        value="Cable TV"
                        v-model="amenities"
                      />
                      <label class="label">Cable TV</label>
                    </div>
                    <div class="form-input d-flex align-items-center">
                      <input
                        type="checkbox"
                        name="CommonEl"
                        id="CommonEl"
                        class="form-check-input me-3"
                        value="Common Elements"
                        v-model="amenities"
                      />
                      <label class="label">Common Elements</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-input d-flex align-items-center">
                      <input
                        type="checkbox"
                        name="Hydro"
                        id="Hydro"
                        class="form-check-input me-3"
                        value="Hydro"
                        v-model="amenities"
                      />
                      <label class="label">Hydro</label>
                    </div>
                    <div class="form-input d-flex align-items-center">
                      <input
                        type="checkbox"
                        name="StreetD"
                        id="StreetD"
                        class="form-check-input me-3"
                        value="Street Direction"
                        v-model="amenities"
                      />
                      <label class="label">Street Direction</label>
                    </div>
                    <div class="form-input d-flex align-items-center">
                      <input
                        type="checkbox"
                        name="Kitchens"
                        id="Kitchens"
                        class="form-check-input me-3"
                        value="Kitchens"
                        v-model="amenities"
                      />
                      <label class="label">Kitchens</label>
                    </div>
                    <div class="form-input d-flex align-items-center">
                      <input
                        type="checkbox"
                        name="PrivateE"
                        id="PrivateE"
                        class="form-check-input me-3"
                        value="Private Entrance"
                        v-model="amenities"
                      />
                      <label class="label">Private Entrance</label>
                    </div>
                    <div class="form-input d-flex align-items-center">
                      <input
                        type="checkbox"
                        name="CentralV"
                        id="CentralV"
                        class="form-check-input me-3"
                        value="Central Vac"
                        v-model="amenities"
                      />
                      <label class="label">Central Vac</label>
                    </div>
                    <div class="form-input d-flex align-items-center">
                      <input
                        type="checkbox"
                        name="Heat"
                        id="Heat"
                        class="form-check-input me-3"
                        value="Heat"
                        v-model="amenities"
                      />
                      <label class="label">Heat</label>
                    </div>
                    <div class="form-input d-flex align-items-center">
                      <input
                        type="checkbox"
                        name="Water"
                        id="Water"
                        class="form-check-input me-3"
                        value="Water"
                        v-model="amenities"
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
                            <select
                              v-model="roomData.Room"
                              type="text"
                              class="form-select"
                            >
                              <option selected disabled hidden value="">
                                Please select Room
                              </option>
                              <option>Room</option>
                              <option>Kitchen</option>
                              <option>Bathroom</option>
                            </select>
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
                class="form-btn btn-light-prev"
                tab-target="step-03"
              >
                Previous
              </button>
              <button
                type="submit"
                class="form-btn"
                data-bs-toggle="modal"
                data-bs-target="#addprop"
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
import { required } from "vuelidate/lib/validators";

export default {
  name: "AddProperty",
  mixins: [validationMixin],
  data() {
    return {
      //step 1
      stepOne: {
        address: "",
        RorS: "",
        agentInfo: "",
      },

      //step 2
      files: [],
      isDragging: false,
      previewImage: require("@/assets/images/propertypic.png"),
      //step 3
      propdetails: "",
      parkingType: "",
      proptaxes: "",
      propMls: "",
      propType: "",
      cooling: "",
      bedrooms: "",
      heating: "",
      bathrooms: "",
      bedroomsplus: "",
      exteriorFinish: "",
      basement: "",
      secBasement: "",
      sewer: "",
      amenities: [],
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

    //step 3
    propdetails: {
      required,
    },

    proptaxes: {
      required,
    },
    parkingType: {
      required,
    },
    propMls: {
      required,
    },

    propType: {
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
    basement: {
      required,
    },
    exteriorFinish: {
      required,
    },
    secBasement: {
      required,
    },
    sewer: {
      required,
    },
  },

  methods: {
    // stepOne fn
    stepOne() {
      // check validation
      this.$v.$touch();
      if (!this.$v.$error) {
        console.log("stepone");
      }
    },
    // ---------------------------
    onChange() {
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
  },
  mounted() {
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
    // video fn
    const input = document.getElementById("video-input");
    const video = document.getElementById("videoInput");
    const videoSource = document.createElement("source");

    input.addEventListener("change", function () {
      const files = this.files || [];

      if (!files.length) return;
      video.style.display = "block";

      const reader = new FileReader();

      reader.onload = function (e) {
        videoSource.setAttribute("src", e.target.result);
        video.appendChild(videoSource);
        video.load();
        video.pause();
      };

      reader.onprogress = function (e) {
        console.log("progress: ", Math.round((e.loaded * 100) / e.total));
      };

      reader.readAsDataURL(files[0]);
    });
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
    font-size: 60px;
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
</style>
