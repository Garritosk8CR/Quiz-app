<template>
   <v-layout id="infoBar" align-center justify-center fill-height row wrap>
      <v-flex xs12 text-xs-center>
         <v-toolbar floating dense light color="grey lighten-3">
            <v-toolbar-title class="title grey--text font-weight-bold">Quiz</v-toolbar-title>
            <stat v-for="(stat, index) in stats" :propTitle="stat.title" :propValue="stat.value" :propColor="stat.color" :key="index"/>
         </v-toolbar>
      </v-flex>
   </v-layout>
</template>

<script>
import Stat from './Stat'
import { mapGetters } from 'vuex'
export default {
   data: () => ({
      statsData: [
         {
            title: 'Question',
            value: 'progress',
            color: 'accent lighten-2'
         },
         {
            title: 'Correct',
            value: 'totalCorrect',
            color: 'success lighten-2'
         },
         {
            title: 'Incorrect',
            value: 'totalIncorrect',
            color: 'error lighten-2'
         }
      ]
   }),
   props: [

   ],
   computed: {
      ...mapGetters([
         'totalCorrect',
         'totalIncorrect',
         'progress'
      ]),
      stats() {
         return this.statsData.map( statData => ({
            title: statData.title,
            value: this[statData.value],
            color: statData.color
         }))
      }
   },
   components: {
      Stat
   }
}
</script>

<style scoped>

</style>
