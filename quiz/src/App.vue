<template>
   <v-app id="inspire">
      <router-view name="header" />
      <v-content class="grey lighten-4">
         <router-view></router-view>
      </v-content>
      <router-view name="footer" />
   </v-app>
</template>

<script>
export default {
   data: () => ({
      drawer: null
   }),
   props: {
      source: String
   }
}
</script>
