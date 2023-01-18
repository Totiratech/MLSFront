<template>
  <div class="addprop">
    <form action="#" method="POST" class="form_addprop">
    <h3 class="form-title">Add Property</h3>
    <div class="steps">
      <ul class="step-tab-items">
        <li class="step-item active">1</li>
        <li class="step-item">2</li>
        <li class="step-item">3</li>
      </ul>
      <div class="step-tabs">
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
                    v-model="address"
                    placeholder="Enter Address"
                    required />
                  
                </div>
                <!-- <p v-if="$v.address.$error"  class="main_color small_font mb-0">
                  {{ this.required }}
                </p> -->
              </div>

              <div class="form-controll field">
                <label class="label">Email</label>
                <div class="form-input">
                  
                  <select
              v-model="selected"
              type="text"
              placeholder="Enter Address"
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
         <!--  <p v-if="$v.selected.$error" class="main_color small_font mb-0">
            {{ this.required }}
          </p> -->
              </div>

              <div class="form-controll field">
                <label class="label">Add Agent Information</label>
                <div class="form-input">
                  <textarea
              placeholder="Textarea"
              v-model="agentInfo"
              class="form-control"
            ></textarea>
          </div>
          <!-- <p v-if="$v.selected.$error" class="main_color small_font mb-0">
            {{ this.required }}
          </p> -->
              </div>
            </div>
            <div class="col-md-6">
              <!-- map location -->
        <div class="maplocation">
          <h4 class="headingSec">Location on maps</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41266661.93352347!2d-61.79051155799839!3d50.85492169779694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2z2YPZhtiv2Kc!5e0!3m2!1sar!2seg!4v1673650676527!5m2!1sar!2seg"
            width="100%"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
            </div>
          </div>

          <div class="form-submit">
            <button class="form-btn" type="button" tab-target="step-02">
              Next
            </button>
          </div>
        </div>
        <div class="step-tab" id="step-02">
          
          <div class="row">
      <div class="col-md-6">
        <div class="field">
          <label class="label">Upload a Video or 3D tour</label>
          <div class="control">
            <input id="file-input" type="file" accept="video/*" />
            <video id="video" width="300" height="300" controls></video>
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
                <div>Drop files here or <u>click here</u> to Upload photo.</div>
                <font-awesome-icon icon="fa-solid fa-arrow-up-from-bracket" />
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
                  <img :src="generateURL(file)" alt="" class="preview-img" />
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
          <div
            class="imagePreviewWrapper"
            :style="{ 'background-image': `url(${previewImage})` }"
            @click="selectImage"
          ></div>

          <input ref="fileInput" type="file" @input="pickFile" hidden />
        </div>
      </div>
    </div>
        </div>
        <div class="step-tab" id="step-03">
          <h4 class="form-title-sc">Professional Info</h4>

          <div class="form-controll">
            <div class="form-input">
              <input type="text" name="company" id="company" required />
              <label for="company">Current Company</label>
            </div>
          </div>

          <div class="form-controll">
            <div class="form-input">
              <input type="text" name="experience" id="experience" required />
              <label for="experience">Total Experience</label>
            </div>
          </div>

          <div class="form-controll">
            <div class="form-input">
              <input type="text" name="designation" id="designation" required />
              <label for="designation">Designation</label>
            </div>
          </div>

          <div class="form-submit grid-2">
            <button type="button" class="form-btn" tab-target="step-02">
              Previous
            </button>
            <button type="submit" class="form-btn">Submit</button>
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
  data(){
    return{
      address:'',
      selected: "",
        agentInfo: "",
        files: [],
        isDragging: false,
        previewImage: require("@/assets/images/propertypic.png"),
    }

  },
  validations: {
    address: {
      required,
    },

    selected: {
      required,
    },
    agentInfo: {
      required,
    },
  },
  methods: {

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
     const input = document.getElementById("file-input");
    const video = document.getElementById("video");
    const videoSource = document.createElement("source");

    input.addEventListener("change", function () {
      const files = this.files || [];

      if (!files.length) return;

      const reader = new FileReader();

      reader.onload = function (e) {
        videoSource.setAttribute("src", e.target.result);
        video.appendChild(videoSource);
        video.load();
        video.play();
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

.addprop{
  background: #f5f5f5;
  padding: 100px 60px;
}
.form_addprop{
  background: #FFFFFF;
  border-radius: 8px;
  padding: 60px;
 
.form-title{
  text-align: center;
  font-family: 'Literata';
font-style: normal;
font-weight: 400;
font-size: 60px;
line-height: 95px;
text-transform: capitalize;
color: #000000;
margin-bottom: 30px;;
}
.field {
  margin-bottom: 50px;
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
  .form-btn{
    background: #B5121B;
border-radius: 6px;
height: 64px;
padding:15px;
width:296px;
color:#fff;
border:0;

  }

}

.form-submit .form-btn:hover {
  background: #000;
  transition: all 0.2s ease-out;
}
.picDisplayed img {
  width: 400px;
  height: 250px;
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
  width: 400px;
  height: 250px;
  display: block;
  cursor: pointer;
  margin: 0 auto 30px;
  background-size: cover;
  background-position: center center;
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
  .vedioTour {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
    iframe {
      border-radius: 8px;
      margin-bottom: 16px;
    }
  }
  .cancel button {
    background: transparent;
    border: 0;
    font-size: 24px;
    color: #b5121b;
  }
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
  margin-bottom: 25px;
  justify-content: center;
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
  background: #B5121B;
}

.step-tab-items .step-item:not(:last-child) {
  margin-right: 296px;
}

.step-tab-items .step-item:not(:last-of-type)::before {
  position: absolute;
    content: "";
    width: 276px;
    height: 2px;
    background: rgb(241, 239, 239);
    left: calc(100% + 10px);
}

.step-tab-items .step-item.active::before {
  background: #B5121B;
}

.step-tabs .step-tab {
  display: none;
}

.step-tabs .step-tab.active {
  display: block;
}
</style>

<!-- <template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h2>Add Property</h2>
          <horizontal-stepper
            :steps="demoSteps"
            @completed-step="completeStep"
            @active-step="isStepActive"
            @stepper-finished="alert">
          </horizontal-stepper>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
/* import layout */
import AppHeader from "@/components/global/AppHeader.vue";
/* imprt vue-stepper npm install vue-stepper --save*/
import HorizontalStepper from "vue-stepper";

// This components will have the content for each stepper step.
import StepOne from "@/components/stepsProperty/StepOne.vue";
import StepTwo from "@/components/stepsProperty/StepTwo.vue";
import StepThird from "@/components/stepsProperty/StepThird.vue";
import StepFour from "@/components/stepsProperty/StepFour.vue";

import AppFooter from "@/components/global/AppFooter.vue";

export default {
  name: "AddProperty",
  data() {
    return {
      demoSteps: [
        {
          icon: "fiber_manual_record",
          name: "first",
          component: StepOne,
          completed: false,
        },
        {
          icon: "fiber_manual_record",
          name: "second",
          component: StepTwo,
          completed: false,
        },
        {
          icon: "fiber_manual_record",
          name: "third",
          component: StepThird,
          completed: false,
        },
        {
          icon: "fiber_manual_record",
          name: "four",
          component: StepFour,
          completed: false,
        },
      ],
    };
  },
  methods: {
    // Executed when @completed-step event is triggered
    completeStep(payload) {
      this.demoSteps.forEach((step) => {
        if (step.name === payload.name) {
          step.completed = true;
          step.icon = "Done";
          this.$el.querySelector(".material-icons").classList.add("active");
        }
      });
    },
    // Executed when @active-step event is triggered
    isStepActive(payload) {
      this.demoSteps.forEach((step) => {
        if (step.name === payload.name) {
          if (step.completed === true) {
            step.completed = false;
          }
        }
      });
    },
    // Executed when @stepper-finished event is triggered
    alert(payload) {
      alert("end");
    },
  },
  components: {
    AppHeader,
    HorizontalStepper,
    AppFooter,
  },
};
</script>

<style lang="scss">
.section {
  background: #f5f5f5;
  padding: 100px 0;
}
.columns {
  padding: 40px;
  background: #ffffff;
  border-radius: 8px;
  h2 {
    font-family: "Literata";
    font-style: normal;
    font-weight: 400;
    font-size: 60.4192px;
    line-height: 95px;
    text-transform: capitalize;
    color: #000000;
    text-align: center;
    margin-bottom: 30px;
  }
  .stepper-box {
    box-shadow: none;
    .top {
      margin-bottom: 80px;
    }
    .bottom.only-next .stepper-button {
      background: #b5121b;
      border-radius: 6px;
      width: 296px;
      height: 64px;
      margin: 50px auto;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      text-transform: capitalize;
      color: #FFFFFF;
      justify-content: center;
    }
  }

  .stepper-box .top .steps-wrapper .step.deactivated .circle i.material-icons,
  .stepper-box .top .steps-wrapper .step .circle i.material-icons {
    background-color: transparent !important;
    border: 1px solid #b5121b !important;
    color: #b5121b;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .stepper-box .top .steps-wrapper .step.deactivated .circle i.material-icons {
    background-color: transparent !important;
    border: 1px solid #a1a1a5 !important;
    color: #fff;
  }
  .stepper-box .top .steps-wrapper .step .circle i.material-icons.active {
    color: #fff;
    background-color: #b5121b !important;
    border: 1px solid #b5121b !important;
  }
  .stepper-box .top .steps-wrapper .step .circle {
    margin-bottom: 0;
    padding: 0;
  }
}
</style>
 -->
