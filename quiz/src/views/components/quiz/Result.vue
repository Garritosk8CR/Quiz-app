<template>
   <v-container fluid fill-height>
      <v-layout align-center justify-center row fill-height>
         <v-card max-width="344" class="mx-auto">
            <v-card-title>Quiz results</v-card-title>
            <v-card-text>
               <div>
                  <p>Correct Answers: {{ totalCorrect }}</p>
               </div>
               <div>
                  <p>Incorrect Answers: {{ totalIncorrect }}</p>
               </div>
            </v-card-text>
            <v-card-actions>
               <v-btn text @click="clickRestart()">Restart</v-btn>
            </v-card-actions>
         </v-card>
      </v-layout>
   </v-container>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
export default {
   data: () => ({

   }),
   computed: {
      ...mapGetters([
         'totalCorrect',
         'totalIncorrect'
      ])
   },
   methods: {
      ...mapActions([
         'restart'
      ]),
      clickRestart() {
         this.restart()
      }
   }
}
</script>

<style scoped>

</style>
