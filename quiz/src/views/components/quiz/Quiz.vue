<template>
   <v-container text-xs-center fluid>
      <quiz-stats :propProgress="progress"/>
      <v-window v-model="step">
         <questions :propQuestions="currentQuiz.questions"/>
      </v-window>
      <v-layout id="quizControls" align-center justify-center fill-height row>
         <v-layout align-content-space-around justify-space-between row>
            <v-btn :disabled="step === 0" text @click="step--">
               Back
            </v-btn>
            <v-btn :disabled="step === this.questions.length - 1" color="primary" depressed @click="step++">
               Next
            </v-btn>
         </v-layout>
      </v-layout>
   </v-container>
</template>
<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
import QuizStats from './Stats'
import Questions from './Questions'
export default {
   data: () => ({
      step: 0,
      questions: [
         {
            text: 'Question 1?',
            answers: [
               'Answer 1',
               'Answer 2',
               'Answer 3',
               'Answer 4'
            ],
            correctAnswer: 0
         },
         {
            text: 'Question 2?',
            answers: [
               'Answer 1',
               'Answer 2',
               'Answer 3',
               'Answer 4'
            ],
            correctAnswer: 1
         },
         {
            text: 'Question 3?',
            answers: [
               'Answer 1',
               'Answer 2',
               'Answer 3',
               'Answer 4'
            ],
            correctAnswer: 2
         },
         {
            text: 'Question 4?',
            answers: [
               'Answer 1',
               'Answer 2',
               'Answer 3',
               'Answer 4'
            ],
            correctAnswer: 3
         }
      ]
   }),
   computed: {
      ...mapGetters([
         'currentQuiz'
      ]),
      progress() {
         let current = this.step + 1
         let _progress = current + '/' + this.currentQuiz.questions.length
         return _progress
      }
   },
   components: {
      QuizStats,
      Questions
   },
   methods: {
      ...mapActions([
         'setCurrentQuiz'
      ])
   }
}
</script>
<style scoped>
#infoBar {
   margin-top: 3%;
}

#quizControls {
   margin-top: 6%;
}
</style>
