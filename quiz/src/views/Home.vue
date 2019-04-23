<template>
   <quiz v-if="isQuizOver == false"/>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
import Quiz from './components/quiz/Quiz'
export default {
   data: () => ({

   }),
   components: {
      Quiz
   },
   computed: {
      ...mapGetters([
         'isQuizOver'
      ])
   },
}
</script>
