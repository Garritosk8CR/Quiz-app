<template>
   <div>
      <div v-if="isQuizOver == false">
         <quiz />
      </div>
      <div v-else>
         <result />
      </div>
   </div>

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
