<template>
  <form action="#" method="POST" class="form">
    <h3 class="form-title">Create Account</h3>
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
                <p v-if="address.$error" class="help is-danger">
                  This address is invalid
                </p>
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
          <p v-if="selected.$error" class="help is-danger">
            You must select Element
          </p>
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
          <p v-if="selected.$error" class="help is-danger">
            You must Enter  Agent Information
          </p>
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
          <h4 class="form-title-sc">Personal Info</h4>

          <div class="form-controll">
            <div class="form-input">
              <input type="text" name="user_name" id="user_name" required />
              <label for="user_name">User Name</label>
            </div>
          </div>
          <div class="grid-2">
            <div class="form-controll">
              <div class="form-input">
                <input type="text" name="first_name" id="first_name" required />
                <label for="first_name">First Name</label>
              </div>
            </div>
            <div class="form-controll">
              <div class="form-input">
                <input type="text" name="last_name" id="last_name" required />
                <label for="last_name">Last Name</label>
              </div>
            </div>
          </div>

          <div class="form-controll">
            <div class="form-input">
              <input type="tel" name="tel" id="tel" required />
              <label for="tel">Phone Number</label>
            </div>
          </div>

          <div class="form-submit grid-2">
            <button type="button" class="form-btn" tab-target="step-01">
              Previous
            </button>
            <button type="button" class="form-btn" tab-target="step-03">
              Next
            </button>
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
</template>

<script>
import "@/assets/js/style.js";
export default {
  name: "AddProperty",
  data(){
    return{
      address:'',
      selected: "",
        agentInfo: "",
    }
  },
  mounted() {
    function test() {
      let allShowHidePassword = document.querySelectorAll(".password-showHide");
      console.log(allShowHidePassword);
      allShowHidePassword.forEach((item) => {
        item.addEventListener("click", () => {
          item.classList.toggle("hide");
          if (
            item.closest(".form-input").querySelector("input").type ===
            "password"
          ) {
            item.closest(".form-input").querySelector("input").type = "text";
          } else {
            item.closest(".form-input").querySelector("input").type =
              "password";
          }
        });
      });

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

.form-submit {
  position: relative;
  width: 100%;
  margin: 14px 0px;
}

.form-submit .form-btn {
  width: 100%;
  padding: 8px;
  background: #00c5b191;
  font-weight: 500;
  font-size: 14px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  text-transform: uppercase;
  transition: all 0.2s ease;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  letter-spacing: 0.5px;
  color: #fff;
  cursor: pointer;
}

.form-submit .form-btn:hover {
  background: #00c5b2;
  transition: all 0.2s ease-out;
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
  width: 25px;
  height: 25px;
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
  background: #00c5b2;
}

.step-tab-items .step-item:not(:last-child) {
  margin-right: 45px;
}

.step-tab-items .step-item:not(:last-of-type)::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 2px;
  background: rgb(241, 239, 239);
  left: calc(100% + 10px);
}

.step-tab-items .step-item.active::before {
  background: #00c5b2;
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
