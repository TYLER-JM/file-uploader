<template>
  <div class="upload-container__item">
    <input type="file" name="1" id="file1">
    <div v-if="isRemovable">
      <button @click="$emit('removeFile', uniqueId)">Remove</button>
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
  border: 1px solid black;
  padding: 1rem;
  margin: 1rem;
}
</style>