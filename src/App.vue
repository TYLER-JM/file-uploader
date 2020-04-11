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
@font-face {
  font-family: 'Ostrich';
  src: url('./ostrich-sans-rounded.woff') format('woff');
}
.container {
  color: green;
  font-family: 'Ostrich', monospace;
}
h2 {
    font-size: 5rem;
}
</style>