<template>
   <v-layout id="infoBar" align-center justify-center fill-height row wrap>
      <v-flex xs12 text-xs-center>
         <v-toolbar floating dense light color="grey lighten-3">
            <v-toolbar-title class="title grey--text font-weight-bold">Quiz</v-toolbar-title>
            <v-toolbar-title class="body-1 font-weight-light">
               Question
               <v-avatar color="accent lighten-2" class="subheading white--text" size="30"
                  v-text="''+ step + '/' + total"></v-avatar>
            </v-toolbar-title>
            <v-toolbar-title class="body-1 font-weight-light">
               Correct
               <v-avatar color="success lighten-1" class="subheading white--text" size="24" v-text="''+ correct">
               </v-avatar>
            </v-toolbar-title>
            <v-toolbar-title class="body-1 font-weight-light">
               Incorrect
               <v-avatar color="error lighten-1" class="subheading white--text" size="24" v-text="''+ wrong">
               </v-avatar>
            </v-toolbar-title>
         </v-toolbar>
      </v-flex>
   </v-layout>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
