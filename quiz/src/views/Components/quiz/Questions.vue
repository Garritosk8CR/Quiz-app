<template>
   <v-layout id="question" align-center justify-center fill-height row>
      <question-form v-for="(question, index) in propQuestions" :key="index" :propQuestion="question" :propWindowIndex="index"/>
   </v-layout>
</template>

<script>
import QuestionForm from './Question'
export default {
   props: [
      'propQuestions'
   ],
   components: {
      QuestionForm
   }
}
</script>

<style scoped>
#question {
   margin-top: 7%;
}
</style>
