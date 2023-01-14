<template>
  <div class="stepone">
   
    <div class="row">
      <div class="col-md-7">
        <div class="field">
          <label class="label">Add Address</label>
          <div class="control">
            <input
              :class="['input', $v.form.address.$error ? 'is-danger' : '']"
              type="text"
              placeholder="Text input"
              v-model="form.address"
              class="form-control" />
          </div>
          <p v-if="$v.form.address.$error" class="help is-danger">
            This address is invalid
          </p>
        </div>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <select
              v-model="form.selected"
              :class="['input', $v.form.selected.$error ? 'is-danger' : '']"
              type="text"
              placeholder="Email input"
              class="form-control">
              <option disabled value="">Please select one</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
          <p v-if="$v.form.selected.$error" class="help is-danger">
            You must select Element
          </p>
        </div>
        <div class="field">
          <label class="label">Agent Information</label>
          <div class="control">
            <textarea
              :class="['textarea', $v.form.agentInfo.$error ? 'is-danger' : '']"
              placeholder="Textarea"
              v-model="form.agentInfo"
              class="form-control"></textarea>
          </div>
        </div>
      </div>
      <div class="col-md-5">
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
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
export default {
  props: ["clickedNext", "currentStep"],
  mixins: [validationMixin],
  data() {
    return {
      form: {
        address: "",
        selected: "",
        agentInfo: "",
      },
    };
  },
  validations: {
    form: {
      address: {
        required,
      },

      agentInfo: {
        required,
      },
      selected: {
        required,
      },
    },
  },
  watch: {
    $v: {
      handler: function (val) {
        if (!val.$invalid) {
          this.$emit("can-continue", { value: true });
        } else {
          this.$emit("can-continue", { value: false });
          setTimeout(() => {
            this.$emit("change-next", { nextBtnValue: false });
          }, 3000);
        }
      },
      deep: true,
    },
    clickedNext(val) {
      console.log(val);
      if (val === true) {
        this.$v.form.$touch();
      }
    },
  },
  mounted() {
    if (!this.$v.$invalid) {
      this.$emit("can-continue", { value: true });
    } else {
      this.$emit("can-continue", { value: false });
    }
  },
};
</script>
<style lang="scss" scoped>
.field {
  margin-bottom: 50px;
  label{
    margin-bottom: 16px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.03em;
    color: #626262;
  }
}
</style>
