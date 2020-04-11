<template>
  <div class="container">
    <h2>Vue Component</h2>
    <TheFileUploadContainer/>
  </div>
</template>
<script>
import TheFileUploadContainer from './components/TheFileUploadContainer.vue';
export default {
  components: {
    TheFileUploadContainer
  }
}
</script>
<style>
.container {
  color: green;
}
</style>