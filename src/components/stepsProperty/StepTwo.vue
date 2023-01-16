<template>
  <div class="steptwo">
    <div class="row">
      <div class="col-md-6">
        <div class="field">
          <label class="label">Upload a Video or 3D tour</label>
          <div class="control">
           <!--- <div
              class="dropzone-container"
              @dragover="dragover"
              @dragleave="dragleave"
              @drop="drop">
              <input
                type="file"
                name="file"
                id="fileInput"
                class="hidden-input"
                @change="onChange"
                ref="file" />
              <label for="fileInput" class="file-label">
                <div>
                  Drop files here or <u>click here</u> to upload.
                  
                </div>
                <font-awesome-icon icon="fa-solid fa-arrow-up-from-bracket" />
              </label>
              
            </div>-->
            <!-- Note: Only add the code block below -->
            <!----<div class="preview-container mt-4" v-if="files.length">
                <div
                  v-for="file in files"
                  :key="file.name"
                  class="preview-card">
                  <div class="vedioTour">
                    
                    
                    <iframe
                    :src="generateURL(file)"
                  title="my video"
                  allowfullscreen
                ></iframe>
                    <p>
                      {{ file.name }}
                    </p>
                  </div>
                  <div class="cancel">
                    <button
                      class="ml-2"
                      type="button"
                      @click="remove(files.indexOf(file))"
                      title="Remove file">
                      <font-awesome-icon icon="fa-solid fa-xmark" />
                    </button>
                  </div>
                </div>
              </div>-->
            <!---<p v-if="$v.form.video.$error" class="help is-danger">
            This vedio is required
          </p>-->
          </div>
        </div>
        <div class="field mt-5">
          <label class="label">Upload  property photo ( less than 20 photos )</label>
          <div class="control">
            <div
              class="dropzone-container"
              @dragover="dragover"
              @dragleave="dragleave"
              @drop="drop">
              <input
                type="file"
                name="file"
                id="fileInput"
                class="hidden-input"
                @change="onChange"
                ref="file" 
                multiple/>
              <label for="fileInput" class="file-label">
                <div>
                  Drop files here or <u>click here</u> to Upload photo.
                  
                </div>
                <font-awesome-icon icon="fa-solid fa-arrow-up-from-bracket" />
              </label>
              
            </div>
            <!-- Note: Only add the code block below -->
            <div class="preview-container d-flex flex-column mt-4" v-if="files.length">
                <div
                  v-for="file in files"
                  :key="file.name"
                  class="preview-card images-upload">
                  <div class="photos">
                    
                    
                    <img :src="generateURL(file)" alt="" class="preview-img"/>
                    <p>
                      {{ file.name }}
                    </p>
                  </div>
                  <div class="cancel">
                    <button
                      class="ml-2"
                      type="button"
                      @click="remove(files.indexOf(file))"
                      title="Remove file">
                      <font-awesome-icon icon="fa-solid fa-xmark" />
                    </button>
                  </div>
                </div>
              </div>
            <!---<p v-if="$v.form.video.$error" class="help is-danger">
            This vedio is required
          </p>-->
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="picDisplayed sticky-top">
          <div
            class="imagePreviewWrapper"
            :style="{ 'background-image': `url(${previewImage})` }"
            @click="selectImage"></div>

          <input ref="fileInput" type="file" @input="pickFile" hidden />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
export default {
  props: ["currentStep", "clickedNext"],
  mixins: [validationMixin],
  components:{

  },
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
    color: rgb(98 98 98 / 50%);;
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
    padding:16px;
    margin-top:16px;
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
  .vedioTour{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
    iframe{
      border-radius: 8px;
      margin-bottom: 16px;
    }
  }
  .cancel button{
    background: transparent;
    border: 0;
    font-size: 24px;
    color: #b5121b;
  }
}
.preview-card.images-upload {
  .cancel button{
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
</style>
