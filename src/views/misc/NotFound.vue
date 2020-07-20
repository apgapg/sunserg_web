<template>
  <v-container class="text-center">
    <div class="text-center font-weight-bold" style="font-size: 100px; opacity: 0.24;">404</div>
    <div class="text-h6 text-center red--text font-weight-regular">Oops! Page Not Found</div>
    <div
      class="text-center body-1 text-center mt-2 py-0 grey--text text--darken-1"
    >You can try going to home page instead</div>
    <v-btn class="my-8" color="primary" to="/">
      <v-icon left>mdi-home</v-icon>HOME
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style>
</style>