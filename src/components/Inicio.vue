<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('../assets/logo.svg')" contain height="200px" />
      </v-col>
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">App SPA</h1>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-5 font-weight-bold mb-3">Vue,js + Vuetify</h1>
        <h1 class="display-5 font-weight-bold mb-3">CLI y Router</h1>
        <h1 class="display-5 font-weight-bold mb-3">API Rest con PHP</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'inicio'
};
</script>