<template>
  <div class="upload-container__item">
    <!-- <input type="file" name="1" id="file1"> -->
    <div class="input-group mb-3">
      <div class="custom-file mr-4">
        <input type="file" class="custom-file-input" @change="updateMessage($event)" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
        <label class="custom-file-label" for="inputGroupFile01">{{ message }}</label>
      </div>
      <div v-if="isRemovable">
        <button class="bttn-unite bttn-danger" @click="$emit('removeFile', uniqueId)">X</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>