<template>
   <v-footer color="primary" app>
      <span class="white--text">&copy; 2019 Emilio M. Rangel</span>
   </v-footer>
</template>
<script>
export default {
   props: {
      backgroundColor: String,
      type: String
   },
   data() {
      return {
         year: new Date().getFullYear()
      }
   }
}
</script>
<style>
</style>
