<template>
   <v-container fluid fill-height>
      <v-layout align-center justify-center row fill-height>
         <v-card  max-width="344" class="mx-auto">
            <v-card-title primary-title>
                  <p class="display-1 mb-0">Quiz results</p>
            </v-card-title>
            <v-card-text>
               <v-divider></v-divider>
               <div>
                  <p class="title font-weight-light">Correct Answers: {{ totalCorrect }}</p>
               </div>
               <div>
                  <p class="title font-weight-light">Incorrect Answers: {{ totalIncorrect }}</p>
               </div>
            </v-card-text>
            <v-card-actions>
               <v-btn flat text color="secondary" @click="clickRestart()">Restart</v-btn>
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
