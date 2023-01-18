<template>
  <div class="stepthree">
    <div class="propertyDetails mb-5">
      <h4 class="headingSec">Property Details</h4>
      <div class="row">
        <div class="col-md-6 my-3">
          <div class="field">
            <label class="label">Property Price</label>
            <div class="control">
              <input
                :class="['input', $v.form.propdetails.$error ? 'is-danger' : '']"
                type="number"
                placeholder="Enter Property Price"
                v-model="form.propdetails"
                class="form-control" />
            </div>
            <p v-if="$v.form.propdetails.$error" class="help is-danger">
              This Property Price is invalid
            </p>
          </div>
        </div>
        <div class="col-md-6 my-3">
          <div class="field">
            <label class="label">Annual Property Taxes</label>
            <div class="control">
              <input
                :class="['input', $v.form.proptaxes.$error ? 'is-danger' : '']"
                type="number"
                placeholder="Enter Annual Property Taxes"
                v-model="form.proptaxes"
                class="form-control" />
            </div>
            <p v-if="$v.form.proptaxes.$error" class="help is-danger">
              This Annual Property Taxes is invalid
            </p>
          </div>
        </div>
        <div class="col-md-6 my-3">
            <div class="field">
          <label class="label">Parking Type</label>
          <div class="control">
            <select
              v-model="form.parkingType"
              :class="['select', $v.form.parkingType.$error ? 'is-danger' : '']"
              type="text"
              class="form-select">
              <option selected disabled hidden value="">Please select one</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
          <p v-if="$v.form.parkingType.$error" class="help is-danger">
            You must select Element
          </p>
        </div>
        </div>
        <div class="col-md-6 my-3">
          <div class="field">
            <label class="label">Property MLS</label>
            <div class="control">
              <input
                :class="['input', $v.form.propMls.$error ? 'is-danger' : '']"
                type="text"
                placeholder="Enter Property MLS"
                v-model="form.propMls"
                class="form-control" />
            </div>
            <p v-if="$v.form.propMls.$error" class="help is-danger">
              This Annual Property Taxes is invalid
            </p>
          </div>
        </div>
        <div class="col-md-6 my-3">
            <div class="field">
          <label class="label">Property Type</label>
          <div class="control">
            <select
              v-model="form.propType"
              :class="['select', $v.form.propType.$error ? 'is-danger' : '']"
              type="text"
              class="form-select">
              <option selected disabled hidden value="">Please select one</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
          <p v-if="$v.form.propType.$error" class="help is-danger">
            You must select Element
          </p>
        </div>
        </div>
      </div>
    </div>
    <div class="buildingDetails my-5">
      <h4 class="headingSec">Building Details</h4>
      <div class="row">
        
        <div class="col-md-6 my-3">
            <div class="field">
          <label class="label">Cooling</label>
          <div class="control">
            <select
              v-model="form.cooling"
              :class="['select', $v.form.cooling.$error ? 'is-danger' : '']"
              type="text"
              class="form-select">
              <option selected disabled hidden value="">Please select one</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
          <p v-if="$v.form.cooling.$error" class="help is-danger">
            You must select Element
          </p>
        </div>
        </div>
        
        <div class="col-md-6 my-3">
            <div class="field">
          <label class="label">Bedrooms</label>
          <div class="control">
            <select
              v-model="form.bedrooms"
              :class="['select', $v.form.bedrooms.$error ? 'is-danger' : '']"
              type="text"
              class="form-select">
              <option selected disabled hidden value="">Please select one</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
          <p v-if="$v.form.bedrooms.$error" class="help is-danger">
            You must select Element
          </p>
        </div>
        </div>
        <div class="col-md-6 my-3">
            <div class="field">
          <label class="label">Heating</label>
          <div class="control">
            <select
              v-model="form.heating"
              :class="['select', $v.form.heating.$error ? 'is-danger' : '']"
              type="text"
              class="form-select">
              <option selected disabled hidden value="">Please select one</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
          <p v-if="$v.form.heating.$error" class="help is-danger">
            You must select Element
          </p>
        </div>
        </div>
        <div class="col-md-6 my-3">
            <div class="field">
          <label class="label">bathrooms</label>
          <div class="control">
            <select
              v-model="form.bathrooms"
              :class="['select', $v.form.bathrooms.$error ? 'is-danger' : '']"
              type="text"
              class="form-select">
              <option selected disabled hidden value="">Please select one</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
          <p v-if="$v.form.bathrooms.$error" class="help is-danger">
            You must select Element
          </p>
        </div>
        </div>
        <div class="col-md-6 my-3">
            <div class="field">
          <label class="label">Bedrooms Plus</label>
          <div class="control">
            <select
              v-model="form.bedroomsplus"
              :class="['select', $v.form.bedroomsplus.$error ? 'is-danger' : '']"
              type="text"
              class="form-select">
              <option selected disabled hidden value="">Please select one</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
          <p v-if="$v.form.bedroomsplus.$error" class="help is-danger">
            You must select Element
          </p>
        </div>
        </div>
      </div>
    </div>
    <div class="exteriorfeatures my-5">
      <h4 class="headingSec">Exterior Features</h4>
      <div class="row">
        
        <div class="col-md-6 my-3">
            <div class="field">
          <label class="label">Exterior Finish</label>
          <div class="control">
            <select
              v-model="form.exteriorFinish"
              :class="['select', $v.form.exteriorFinish.$error ? 'is-danger' : '']"
              type="text"
              class="form-select">
              <option selected disabled hidden value="">Please select one</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
          <p v-if="$v.form.exteriorFinish.$error" class="help is-danger">
            You must select Element
          </p>
        </div>
        </div>
        <div class="col-md-6 my-3">
            <div class="field">
          <label class="label">Basement</label>
          <div class="control">
            <select
              v-model="form.basement"
              :class="['select', $v.form.basement.$error ? 'is-danger' : '']"
              type="text"
              class="form-select">
              <option selected disabled hidden value="">Please select one</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
          <p v-if="$v.form.basement.$error" class="help is-danger">
            You must select Element
          </p>
        </div>
        </div>
        <div class="col-md-6 my-3">
            <div class="field">
          <label class="label">Secondry Basement</label>
          <div class="control">
            <select
              v-model="form.secBasement"
              :class="['select', $v.form.secBasement.$error ? 'is-danger' : '']"
              type="text"
              class="form-select">
              <option selected disabled hidden value="">Please select one</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
          <p v-if="$v.form.secBasement.$error" class="help is-danger">
            You must select Element
          </p>
        </div>
        </div>
        <div class="col-md-6 my-3">
            <div class="field">
          <label class="label">Sewer</label>
          <div class="control">
            <select
              v-model="form.sewer"
              :class="['select', $v.form.sewer.$error ? 'is-danger' : '']"
              type="text"
              class="form-select">
              <option selected disabled hidden value="">Please select one</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
          <p v-if="$v.form.sewer.$error" class="help is-danger">
            You must select Element
          </p>
        </div>
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
        propdetails: "",
        parkingType: "",
        proptaxes: "",
        propMls:"",
        propType: "",
        cooling: "",
        bedrooms:"",
        heating:"",
        bathrooms:"",
        bedroomsplus:"",
        exteriorFinish:"",
        basement:"",
        secBasement:"",
        sewer:""
      },
    };
  },
  validations: {
    form: {
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
      
      propType:{
        required,
      },
      cooling:{
        required
      },
      bedrooms:{
        required
      },
      heating:{
        required
      },
      bathrooms:{
        required
      },
      bedroomsplus:{
        required
      },
      basement:{
        required
      },
      exteriorFinish:{
        required
      },
      secBasement:{
        required
      },
      sewer:{
        required
      }
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
