<template>
  <v-app>
    <v-app-bar id="app-bar" app color="white" elevation="0" height="64" clipped-left>
      <div class="d-flex align-center">
        <p class="text-h5 font-weight-light ma-0 pa-0">Sunserg</p>
        <v-chip dark label small class="ma-2" color="blue">BETA</v-chip>
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://www.sunserg.com/" target="_blank" icon>
        <v-icon>mdi-help-circle-outline</v-icon>
      </v-btn>
      <v-btn href="https://www.sunserg.com/" target="_blank" icon>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-menu
        v-if="this.$route.name!='Login'"
        offset-y
        transition="slide-y-transition"
        :close-on-content-click="true"
      >
        <template v-slot:activator="{ on: menu, attrs }">
          <v-tooltip bottom :disabled="$vuetify.breakpoint.xs">
            <template v-slot:activator="{ on: tooltip }">
              <v-btn
                fab
                small
                elevation="0"
                class="ml-2 ml-sm-8 mr-1"
                color="blue"
                v-bind="attrs"
                v-on="{ ...menu , ...tooltip}"
              >
                <span class="white--text text-subtitle-1">JD</span>
              </v-btn>
            </template>
            <span class="font-weight-bold py-0">{{ name }}</span>
            <div class="font-weight-light">{{ email }}</div>
          </v-tooltip>
        </template>
        <v-list>
          <v-list-item @click="onProfileClick">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>My Profile</v-list-item-title>
          </v-list-item>
          <v-list-item to="/login">
            <v-list-item-icon>
              <v-icon>mdi-power</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    name: "John Doe",
    email: "test@sunserg.com"
  }),
  methods: {
    onProfileClick: function() {},
    onLogoutClick: function() {}
  }
};
</script>

<style scoped>
#app-bar {
  border-width: 0 0 thin;
  border-style: solid;
  border-bottom-color: rgba(0, 0, 0, 0.12) !important;
}
</style>
