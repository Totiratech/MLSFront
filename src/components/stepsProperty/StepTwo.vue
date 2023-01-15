<template>
  <div class="steptwo">
    <div class="row">
      <div class="col-md-6">
        <div class="field">
          <label class="label">Upload a Video or 3D tour</label>
          <div class="control">
            <!--- <input
              :class="['input', $v.form.houseVideo.$error ? 'is-danger' : '']"
              type="filed"
              placeholder="Upload a Video or 3D tour"
              v-model="form.houseVideo"
              class="form-control"
              name="videohome" />--->
            test
          </div>
          <!---<p v-if="$v.form.video.$error" class="help is-danger">
            This vedio is required
          </p>-->
        </div>
      </div>
      <div class="col-md-6">
        <div class="picDisplayed">
           <!---<input type="file" @change="onFile"   />
                
                <img :src="imgSrc" v-if="imgSrc" />-->

                <div>
    <div
      class="imagePreviewWrapper"
      :style="{ 'background-image': `url(${previewImage})` }"
      @click="selectImage">
    </div>
 
    <input
      ref="fileInput"
      type="file"
      @input="pickFile" hidden>
  </div>
            
            <!---<div class="main">
    <div
      class="dropzone-container"
      @dragover="dragover"
      @dragleave="dragleave"
      @drop="drop"
    >
      <input
        type="file"
        multiple
        name="file"
        id="fileInput"
        class="hidden-input"
        @change="onChange"
        ref="file"
        accept=".pdf,.jpg,.jpeg,.png"
      />

      <label for="fileInput" class="file-label">
        
        <div><img :src="imgSrc" /></div>
    </label>
      
      <div class="preview-container mt-4" v-if="files.length">
        <div v-for="file in files" :key="file.name" class="preview-card">
          <div>
            <p>
              {{ file.name }}
            </p>
          </div>
          <div>
            <button
              class="ml-2"
              type="button"
              @click="remove(files.indexOf(file))"
              title="Remove file"
            >
              <b>×</b>
            </button>
          </div>
        </div>
      </div>
    </div>
            </div>-->
          </div>
        </div>


      </div>
        </div>



</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
export default {
  props: ["currentStep", "clickedNext", "currentStep"],
  mixins: [validationMixin],
  data() {
    return {
        previewImage: require("@/assets/images/propertypic.png"),
      imgSrc: require("@/assets/images/propertypic.png"),
      isDragging: false,
      files: [],
      form: {
        houseVideo: "",
      },
    };
  },
  validations: {
    form: {
      houseVideo: {
        required,
      },
    },
  },
  methods: {
    canContinue() {
      this.$emit("can-continue", { value: true });
    },
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
    selectImage () {
          this.$refs.fileInput.click()
      },
      pickFile () {
        let input = this.$refs.fileInput
        let file = input.files
        if (file && file[0]) {
          let reader = new FileReader
          reader.onload = e => {
            this.previewImage = e.target.result
          }
          reader.readAsDataURL(file[0])
          this.$emit('input', file[0])
        }
      },
  
    remove(i) {
    this.files.splice(i, 1);
},
  
    onFile(e) {
                const files = e.target.files
                if (!files.length) return

                const reader = new FileReader()
                reader.readAsDataURL(files[0])
                reader.onload = () => (this.imgSrc = reader.result)
                }
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

<style lang="scss">
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
.imagePreviewWrapper{
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

.dropzone-container {
    padding: 4rem;
    background: #f7fafc;
    border: 1px solid #e2e8f0;
}

.hidden-input {
    opacity: 0;
    overflow: hidden;
    position: absolute;
    width: 1px;
    height: 1px;
}

.file-label {
    font-size: 20px;
    display: block;
    cursor: pointer;
}

.preview-container {
    display: flex;
    margin-top: 2rem;
}

.preview-card {
    display: flex;
    border: 1px solid #a2a2a2;
    padding: 5px;
    margin-left: 5px;
}

.preview-img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #a2a2a2;
    background-color: #a2a2a2;
}
</style>
