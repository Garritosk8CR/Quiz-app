<template>
   <v-toolbar-title class="body-1 font-weight-light">
      {{ propTitle }}
      <v-avatar :color="propColor" class="subheading white--text" size="30" v-text="propValue"></v-avatar>
   </v-toolbar-title>
</template>

<script>
export default {
   props: [
      'propTitle',
      'propValue',
      'propColor'
   ]
}
</script>
