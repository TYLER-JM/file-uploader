<template>
  <div class="container">
    <h2 class="container__title">Upload Your File(s)</h2>
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
  display: flex;
  flex-direction: column;
}
.container__title {
  font-family: 'Ostrich', Arial, Helvetica, sans-serif;
  text-align: center;
}
h2 {
    color: #008000;
    font-size: 5rem;
}
</style>