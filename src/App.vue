<template>
  <v-app>
    <v-app-bar id="app-bar" app color="white" elevation="0" height="64" clipped-left="true">
      <div class="d-flex align-center">
        <p class="text-h5 font-weight-light ma-0 pa-0">Sunserg</p>
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://www.sunserg.com/" target="_blank" icon>
        <v-icon>mdi-help-circle-outline</v-icon>
      </v-btn>
      <v-btn href="https://www.sunserg.com/" target="_blank" icon>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-avatar size="32" class="ml-8 mr-1">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
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

<style scoped>
#app-bar {
  border-width: 0 0 thin;
  border-style: solid;
  border-bottom-color: rgba(0, 0, 0, 0.12) !important;
}
</style>
