<template>
   <quiz />
</template>


<script>
import Quiz from './Components/quiz/Quiz'
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
   },
   components: {
      Quiz
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
