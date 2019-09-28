<template>
  <div>
    <div>
      
    </div>
    <vue-editor id="eventCreator" v-model="content"></vue-editor>
  </div>
</template>

<script>
  import { VueEditor } from "vue2-editor";

  export default {
    data: () => ({
      content: ''
    }),
    components: {
      VueEditor
    }
  }
</script>

<style scoped lang="scss">

<style>
