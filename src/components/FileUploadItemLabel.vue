<template>
  <div>
    <b-form-group
      id="fieldset-1"
      label="Name of File:"
      label-for="input-1"
      :invalid-feedback="invalidFeedback"
      :valid-feedback="validFeedback"
      :state="state"
    >
      <b-form-input
        id="input-1"
        v-model="name"
        trim
      ></b-form-input>
    </b-form-group>
  </div>
</template>
<script>
  export default {
    computed: {
      state() {
        return this.name.length >= 4 ? true : false
      },
      invalidFeedback() {
        if (this.name.length > 4) {
          return ''
        } else if (this.name.length > 0) {
          return 'Enter at least 4 characters'
        } else {
          return 'Please enter a name for you file'
        }
      },
      validFeedback() {
        return this.state === true ? 'Thank you' : ''
      }
    },
    data() {
      return {
        name: ''
      }
    }
  }
</script>