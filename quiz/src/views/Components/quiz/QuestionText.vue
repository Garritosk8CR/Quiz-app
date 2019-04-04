<template>
   <v-flex xs8 offset-xs2>
      <v-card color="grey lighten-4" class="text-center" flat>
         <v-card-text>{{ propQuestionText }}</v-card-text>
      </v-card>
   </v-flex>
</template>
<script>
export default {
   props: [
      'propQuestionText'
   ]
}
</script>
