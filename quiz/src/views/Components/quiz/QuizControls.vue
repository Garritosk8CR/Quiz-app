<template>
   <v-layout id="quizControls" align-center justify-center fill-height row>
      <v-layout align-content-space-around justify-space-between row>
         <!-- <v-btn :disabled="step === 0" text @click="step--">
            Back
         </v-btn> -->
         <v-btn :disabled="CanContinueNextQuestion" color="primary" depressed @click="clickNext()">
            Next
         </v-btn>
      </v-layout>
   </v-layout>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'

export default {
   data: () => ({
   }),
   props: [

   ],
   computed: {
      ...mapGetters([
         'isAnswerSelected',
         'step',
         'currentQuiz'
      ]),
      CanContinueNextQuestion() {
         var canNOTContinue = false
         if(this.isAnswerSelected == false) {
            canNOTContinue = true
         }
         return canNOTContinue
      },
      isLastQuestion() {
         let lastQuestionArrayIndex = this.currentQuiz.questions.length - 1
         let currentQuestionIndex = this.step
         let isLast = false
         if(lastQuestionArrayIndex === currentQuestionIndex) {
            isLast = true
         }
         return isLast
      }
   },
   methods: {
      ...mapMutations([
         'setStep',
         'setIsQuizOver'
      ]),
      ...mapActions([
         'setIsAnswerSelected',
         'setDefinitiveAnswer',
         'calculateResult'
      ]),
      clickNext() {
         this.setDefinitiveAnswer()
         if(!this.isLastQuestion) {
            this.setStep(this.step + 1)
            this.setIsAnswerSelected(false)
         } else {
            this.setIsQuizOver(true)
            this.calculateResult()
         }
      }
   },
}
</script>

<style scoped>
#quizControls {
   margin-top: 6%;
}
</style>

