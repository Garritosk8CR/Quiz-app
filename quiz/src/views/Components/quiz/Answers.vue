<template>
   <!-- <v-flex xs8 offset-xs2>
      <v-container grid-list-md text-xs-center class="answers">
         <v-layout justify-start fill-height wrap>
            <v-flex md6 align-self-center v-for="(answer, index) in propQuestionAnswers" :key="index">
               <v-btn flat block color="primary lighten-1">{{answer}}</v-btn>
            </v-flex>
         </v-layout>
      </v-container>
   </v-flex> -->
   <v-flex xs8 offset-xs2>
      <v-item-group>
         <v-container grid-list-md text-xs-center class="answers">
            <v-layout justify-start fill-height wrap>
               <v-flex md6 align-self-center v-for="(answer, index) in propQuestionAnswers" :key="index">
                  <answer :propAnswer="answer"/>
               </v-flex>
            </v-layout>
         </v-container>
      </v-item-group>
   </v-flex>
</template>

<script>
import {mapGetters} from 'vuex'
import Answer from './Answer'

export default {
   data: () => ({

   }),
   props: [
      'propQuestionAnswers'
   ],
   computed: {
      ...mapGetters([
         'currentQuiz'
      ]),
   },
   components: {
      Answer
   }
}
</script>

<style scoped>
.answers {
   margin-top: 28%;
}
</style>

