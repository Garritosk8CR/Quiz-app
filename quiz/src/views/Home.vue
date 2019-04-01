<template>
   <v-container text-xs-center fluid>
      <!-- info bar, Quiz title and quiz stats -->
      <v-layout id="infoBar" align-center justify-center fill-height row wrap>
         <v-flex xs12 text-xs-center >
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
      <!-- Quiz Question -->
      <v-window v-model="step">
         <v-layout id="question" align-center justify-center fill-height row>

            <v-window-item :value="1">
               <v-flex xs8 offset-xs2>
                  <v-card color="grey lighten-4" class="text-center" flat>
                     <v-card-text>{{ question }}</v-card-text>
                  </v-card>
               </v-flex>
               <v-flex xs8 offset-xs2>
                  <v-container grid-list-md text-xs-center class="answers">
                     <v-layout justify-start  fill-height wrap>
                        <v-flex md6 align-self-center v-for="(answer, index) in answers" :key="index" >
                           <v-btn flat block color="primary lighten-1">{{answer}}</v-btn>
                        </v-flex>
                     </v-layout>
                  </v-container>
               </v-flex>
            </v-window-item>

            <v-window-item :value="2">
               <v-flex xs8 offset-xs2>
                  <v-card color="grey lighten-4" class="text-center" flat>
                     <v-card-text>{{ question }}</v-card-text>
                  </v-card>
               </v-flex>
               <v-flex xs8 offset-xs2>
                  <v-container grid-list-md text-xs-center class="answers">
                     <v-layout justify-start  fill-height wrap>
                        <v-flex md6 align-self-center v-for="(answer, index) in answers" :key="index" >
                           <v-btn flat block color="primary lighten-1">{{answer}}</v-btn>
                        </v-flex>
                     </v-layout>
                  </v-container>
               </v-flex>
            </v-window-item>

            <v-window-item :value="3">
               <v-flex xs8 offset-xs2>
                  <v-card color="grey lighten-4" class="text-center" flat>
                     <v-card-text>{{ question }}</v-card-text>
                  </v-card>
               </v-flex>
               <v-flex xs8 offset-xs2>
                  <v-container grid-list-md text-xs-center class="answers">
                     <v-layout justify-start  fill-height wrap>
                        <v-flex md6 align-self-center v-for="(answer, index) in answers" :key="index" >
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
            <v-btn :disabled="step === 1" text @click="step--">
               Back
            </v-btn>
            <v-btn :disabled="step === 3" color="primary" depressed @click="step++">
               Next
            </v-btn>
         </v-layout>

      </v-layout>
   </v-container>
</template>


<script>
export default {
   data: () => ({
      total: 3,
      step: 1,
      correct: 2,
      wrong: 1,
      allAnswers: [
         [
            'anssdsdsdsdsdsdsdwer 11',
            'anssdsdsdsdsdsdsdwer 12',
            'anssdsdsdsdsdsdsdwer 13',
            'anssdsdsdsdsdsdsdwer 14'
         ],
         [
            'anssdsdsdsdsdsdsdwer 21',
            'anssdsdsdsdsdsdsdwer 22',
            'anssdsdsdsdsdsdsdwer 23',
            'anssdsdsdsdsdsdsdwer 24'
         ],
         [
            'anssdsdsdsdsdsdsdwer 31',
            'anssdsdsdsdsdsdsdwer 32',
            'answsdsdsdsdsdsdsdsder 33',
            'answsdsdsdsdsdsdsder 34'
         ]
      ],
      questions: [
         'Question number 1?',
         'Question number 2?',
         'Question number 3?'
      ]
   }),
   computed: {
      question() {
         return this.questions[this.step - 1]
      },
      answers() {
         return this.allAnswers[this.step - 1]
      }
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
