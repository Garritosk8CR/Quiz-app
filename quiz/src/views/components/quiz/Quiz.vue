<template>
   <v-container text-xs-center fluid>
      <quiz-stats :propProgress="progress" :propTotalCorrect="totalCorrect" :propTotalIncorrect="totalIncorrect"/>
      <v-window v-model="step">
         <v-layout id="question" align-center justify-center fill-height row>

            <v-window-item v-for="(question, index) in questions" :value="index" :key="index">
               <v-flex xs8 offset-xs2>
                  <v-card color="grey lighten-4" class="text-center" flat>
                     <v-card-text>{{ question.text }}</v-card-text>
                  </v-card>
               </v-flex>
               <v-flex xs8 offset-xs2>
                  <v-container grid-list-md text-xs-center class="answers">
                     <v-layout justify-start  fill-height wrap>
                        <v-flex md6 align-self-center
                        v-for="(answer, index) in question.answers" :key="index">
                           <v-btn flat block color="primary lighten-1">{{answer}}</v-btn>
                        </v-flex>
                     </v-layout>
                  </v-container>
               </v-flex>
            </v-window-item>
         </v-layout>
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
import QuizStats from './Stats'
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
      progress() {
         let current = this.step + 1
         let _progress = current + '/' + this.questions.length
         return _progress
      },
      totalCorrect() {
         return 0
      },
      totalIncorrect() {
         return 0
      }
   },
   components: {
      QuizStats
   }
}
</script>
<style scoped>
.answers {
   margin-top: 16%;

}
#infoBar {
   margin-top: 3%;
}
#question {
   margin-top: 7%;
}
#quizControls {
   margin-top: 6%;
}
</style>
