<template>
   <v-layout id="quizControls" align-center justify-center fill-height row>
      <v-layout align-content-space-around justify-space-between row>
         <v-btn :disabled="step === 0" text @click="step--">
            Back
         </v-btn>
         <v-btn :disabled="step === this.questions.length - 1" color="primary" depressed @click="step++">
            Next
         </v-btn>
      </v-layout>
   </v-layout>
</template>

<script>
export default {

}
</script>

<style scoped>
#quizControls {
   margin-top: 6%;
}
</style>

