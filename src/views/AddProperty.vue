<template>
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

    .section{
        background: #f5f5f5;
        padding: 100px 0;
    }
.columns {
    padding: 40px;
    background: #FFFFFF;
    border-radius: 8px;
    h2{
font-family: 'Literata';
font-style: normal;
font-weight: 400;
font-size: 60.4192px;
line-height: 95px;
text-transform: capitalize;
color: #000000;
text-align: center;
margin-bottom: 30px;
    }
    .stepper-box{  
        box-shadow: none;
        .top{
            margin-bottom: 80px;
        }
        .bottom.only-next{
            
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
  }    .stepper-box .top .steps-wrapper .step.deactivated .circle i.material-icons{
    background-color: transparent !important;
    border: 1px solid #A1A1A5 !important;
    color: #fff;
  }
  .stepper-box .top .steps-wrapper .step .circle i.material-icons.active {
    color: #fff;
    background-color: #b5121b !important;
    border: 1px solid #b5121b !important;
  }
  .stepper-box .top .steps-wrapper .step .circle {
    margin-bottom: 0;
    padding:0;
  }
}
</style>
