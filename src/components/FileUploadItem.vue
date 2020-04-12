<template>
  <div class="upload-container__item border-primary p-2">
    <div  class="upload-container__button">
      <button class="bttn-unite bttn-xs bttn-danger" v-if="isRemovable" @click="$emit('removeFile', uniqueId)">X</button>
    </div>
    <!-- <div class="form-group">
      <label for="documeny-name">Name of File:</label>
      <input type="text" name="document-name" id="document-name">
    </div> -->
    <FileUploadItemLabel/>
    <div class="input-group mb-3">
      <div class="custom-file">
        <input
          type="file"
          class="custom-file-input"
          @change="updateMessage($event)"
          id="inputGroupFile01"
          aria-describedby="inputGroupFileAddon01"
        >
        <label class="custom-file-label upload-container__label" for="inputGroupFile01">{{ message }}</label>
      </div>
    </div>
  </div>
</template>
<script>
import FileUploadItemLabel from './FileUploadItemLabel.vue';
export default {
  components: {
    FileUploadItemLabel
  },
  props: {
    isRemovable: Boolean,
    removeFile: Function,
    uniqueId: String
  },
  data() {
    return {
      message: 'Choose File'
    }
  },
  methods: {
    updateMessage(e) {
      this.message = e.originalTarget.files[0].name
    }
  }
}
</script>
<style scoped>
.upload-container__item {
  margin: 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #d5deec;
  /* border-radius: 5px; */
  box-shadow: 3px 0px 10px #e5e4e5;
  max-width: calc(33em + 0.75rem + 2px);
}
.upload-container__button {
  align-self: flex-end;
  height: 0px;
  margin: 5px;
}
.upload-container__label {
  overflow: hidden;
}
</style>