<template>
  <v-card outlined>
    <div class="d-flex flex-no-wrap justify-space-between align-center pa-4">
      <div>
        <v-card-title class="text-h6 font-weight-regular pa-0">Google Drive</v-card-title>
        <v-card-text class="pa-0 pr-4">Easy and secure access to all of your content</v-card-text>
      </div>
      <v-spacer></v-spacer>
      <v-img
        src="https://cdn1.iconfinder.com/data/icons/logotypes/32/google-drive-512.png"
        max-width="40"
        contain
      ></v-img>
    </div>
    <div class="d-flex justify-center my-2">
      <!-- <v-progress-circular
        indeterminate
        color="blue"
        size="28"
        class="ma-1"
        width="2"
        v-if="gDriveAuthenticated==null"
      ></v-progress-circular>-->

      <v-btn text color="blue" class v-on:click="onDriveLoginClick">+ Connect</v-btn>
      <!-- <v-btn text color="red" class v-on:click="onDriveLogoutClick" v-else>DISCONNECT</v-btn> -->
    </div>
  </v-card>
</template>

<script>
export default {
  name: "GDrive",
  data: () => ({
    gDriveAuthenticated: null,
  }),
  // methods: {
  //   onDriveLoginClick: function() {
  //     if (!this.gDriveAuthenticated) {
  //       console.log("on login click called");
  //       this.$gapi.getGapiClient().then(gapi => {
  //         gapi.auth2.getAuthInstance().signIn();
  //       });
  //     }
  //   },
  //   onDriveLogoutClick: function() {
  //     this.$gapi
  //       .logout()
  //       .then(() => {
  //         this.gDriveAuthenticated = false;
  //         console.log("Drive logout successful");
  //       })
  //       .catch(err => {
  //         // eslint-disable-next-line no-console
  //         console.error("Login call failed: %s", err.message);
  //       });
  //   },
  //   // eslint-disable-next-line no-unused-vars
  //   updateSigninStatus: function(isSignedIn, gapi) {
  //     console.log("Auth changed: " + isSignedIn);
  //     this.gDriveAuthenticated = isSignedIn;
  //     //if (this.gDriveAuthenticated) listFiles(gapi);
  //   }
  // },
  // computed: {},
  // mounted() {
  //   this.$gapi.getGapiClient().then(gapi => {
  //     this.updateSigninStatus(
  //       gapi.auth2.getAuthInstance().isSignedIn.get(),
  //       gapi
  //     );
  //     gapi.auth2.getAuthInstance().isSignedIn.listen(value => {
  //       this.updateSigninStatus(value, gapi);
  //     });
  //   });
  // }
};
</script>

<style>
</style>