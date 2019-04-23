<template>
      <v-item>
         <v-btn flat block :color="buttonState"
            @click="answerClicked()">{{propAnswer.text}}</v-btn>
      </v-item>
</template>

<script>
import {
      mapGetters,
      mapActions,
      mapMutations
   } from 'vuex'

export default {
   data: () => ({
      active: false
   }),
   props: [
      'propAnswer'
   ],
   computed: {
      buttonState() {
         return this.active ? 'primary lighten-1' : 'grey'
      },
      ...mapGetters([
         'isAnswerSelected'
      ])
   },
   methods: {
      ...mapActions([
         'setIsAnswerSelected',
         'removeCurrentAnswerSelected',
         'updateCurrentAnswerSelected'
      ]),
      answerClicked() {
         if(this.isAnswerSelected && this.active) {
            this.removeCurrentAnswerSelected()
         } else if(this.isAnswerSelected == false) {
            this.updateCurrentAnswerSelected(this.propAnswer)
         }
         if(this.isAnswerSelected == false || (this.isAnswerSelected && this.active)) {
            this.active = !this.active
            this.setIsAnswerSelected(this.active)
         }

      }
   },
}
</script>
