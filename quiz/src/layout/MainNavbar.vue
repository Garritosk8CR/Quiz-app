<template>
   <div>
      <v-navigation-drawer v-model="drawer" fixed app>
         <v-list dense>
            <v-list-tile @click="">
               <v-list-tile-action>
                  <v-icon>home</v-icon>
               </v-list-tile-action>
               <v-list-tile-content>
                  <v-list-tile-title>Home</v-list-tile-title>
               </v-list-tile-content>
            </v-list-tile>
         </v-list>
      </v-navigation-drawer>
      <v-toolbar color="primary" dark fixed app>
         <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
         <v-toolbar-title>Quiz App</v-toolbar-title>
      </v-toolbar>
   </div>
</template>
<script>
  export default {
    data: () => ({
      drawer: null
    })
  }
</script>
