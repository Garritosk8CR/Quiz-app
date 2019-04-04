<template>
   <v-window-item :value="propWindowIndex">
      <question-text :propQuestionText="propQuestion.text"/>
      <answers :propQuestionAnswers="propQuestion.answers" />
   </v-window-item>
</template>

<script>
import QuestionText from './QuestionText'
import Answers from './Answers'

export default {
   props: [
      'propQuestion',
      'propWindowIndex'
   ],
   components: {
      QuestionText,
      Answers
   }
}
</script>

<style scoped>
#question {
   margin-top: 7%;
}
</style>
