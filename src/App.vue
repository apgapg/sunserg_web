<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <p class="text-h5 font-weight-medium ma-0 pa-0">Sunserg</p>
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://www.sunserg.com/" target="_blank" text>
        <span class="mr-2">WEBSITE</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld
  },

  data: () => ({
    //
  })
};
</script>
