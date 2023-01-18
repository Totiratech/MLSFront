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
              class="form-control"
            />
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
              :class="['select', $v.form.selected.$error ? 'is-danger' : '']"
              type="text"
              placeholder="Email input"
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
              class="form-control"
            ></textarea>
          </div>
          <p v-if="$v.form.selected.$error" class="help is-danger">
            You must Enter  Agent Information
          </p>
        </div>
      </div>
      <div class="col-md-5">
        
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
</style>
