<template>
   <v-container text-xs-center fluid>
      <quiz-stats />
      <v-window :value="step">
         <questions :propQuestions="currentQuiz.questions"/>
      </v-window>
      <quiz-controls />
   </v-container>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
import QuizStats from './Stats'
import Questions from './Questions'
import QuizControls from './QuizControls'
export default {
   data: () => ({

   }),
   computed: {
      ...mapGetters([
         'currentQuiz',
         'step'
      ])
   },
   components: {
      QuizStats,
      Questions,
      QuizControls
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
</style>
