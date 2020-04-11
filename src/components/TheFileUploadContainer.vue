<template>
  <div class="upload-container">
    <FileUploadItem 
      v-for="(item, index) in count"
      :key="item.key"
      :uniqueId="item.key"
      :isRemovable="index === count.length - 1 && count.length > 1"
      @removeFile="removeFile"
    />
    <button @click="addFile">Add</button>
  </div>
</template>

<script>
import FileUploadItem from './FileUploadItem.vue';
import bbkey from '@tyler-jm/bbkey/lib';
export default {
  components: {
    FileUploadItem,
  },
  data() {
    return {
      count: [{key: bbkey(4)}],
    }
  },
  methods: {
    addFile() {
      this.count.push({key: bbkey(4)});
    },
    removeFile(val) {
      console.log('tried to remove: ', val);
      this.count = this.count.filter(item => item.key !== val);
    }
  }
}
</script>
<style scoped>
.upload-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>