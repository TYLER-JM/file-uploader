<template>
  <div class="upload-container__item">
    <!-- <input type="file" name="1" id="file1"> -->
    <div class="input-group mb-3">
      <div class="custom-file mr-4">
        <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
        <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
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