<template>
   <v-container fill-height>
      <template v-if="isQuizOver == false" >
         <quiz />
      </template>
      <template v-else>
         <result />
      </template>
   </v-container>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
import Quiz from './components/quiz/Quiz'
import Result from './components/quiz/Result'
export default {
   data: () => ({

   }),
   components: {
      Quiz,
      Result
   },
   computed: {
      ...mapGetters([
         'isQuizOver'
      ])
   },
}
</script>
