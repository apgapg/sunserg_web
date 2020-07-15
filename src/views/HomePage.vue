<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4 mt-4">
        <h1 class="display-2 font-weight-light mb-3">Welcome to Sunserg</h1>
        <p
          class="subheading font-weight-regular"
        >The Best Search and Organizing Tool for Your Company</p>
      </v-col>
    </v-row>
    <div class="text-h6 font-weight-regular text-center mb-2 px-4">Start by connecting your accounts</div>
    <v-row class="justify-center">
      <v-col cols="12" sm="6" md="4" lg="4" xl="3">
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
            <v-progress-circular
              indeterminate
              color="blue"
              size="28"
              class="ma-1"
              width="2"
              v-if="gDriveAuthenticated==null"
            ></v-progress-circular>

            <v-btn
              text
              color="blue"
              class
              v-else-if="!gDriveAuthenticated"
              v-on:click="onDriveLoginClick"
            >+ Connect</v-btn>
            <v-btn text color="red" class v-on:click="onDriveLogoutClick" v-else>DISCONNECT</v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="4" xl="3">
        <v-card outlined>
          <div class="d-flex flex-no-wrap justify-space-between align-center pa-4">
            <div>
              <v-card-title class="text-h6 pa-0 font-weight-regular">Slack</v-card-title>
              <v-card-text class="pa-0 pr-4">Easy and secure access to all of your content</v-card-text>
            </div>
            <v-spacer></v-spacer>
            <v-img
              src="https://image.flaticon.com/icons/svg/2111/2111615.svg"
              max-width="40"
              contain
            ></v-img>
          </div>
          <div class="d-flex justify-center my-2">
            <v-btn text color="blue" class>+ Connect</v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="4" xl="3">
        <v-card outlined>
          <div class="d-flex flex-no-wrap justify-space-between align-center pa-4">
            <div>
              <v-card-title class="text-h6 pa-0 font-weight-regular">Gmail</v-card-title>
              <v-card-text class="pa-0 pr-4">Gmail is email that's intuitive, efficient, and useful</v-card-text>
            </div>
            <v-spacer></v-spacer>
            <v-img
              src="https://image.flaticon.com/icons/png/512/281/281769.png"
              max-width="40"
              contain
            ></v-img>
          </div>
          <div class="d-flex justify-center my-2">
            <v-btn text color="blue" class>+ Connect</v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <div class="mt-16"></div>
    <div class="text-center text-h4 font-weight-light">Stay connected on your device</div>
    <p
      class="text-center text-subheading font-weight-regular mt-2"
    >The ease search of Sunserg, wherever you are.</p>
    <v-img
      src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
      contain
      height="64"
    ></v-img>
    <div class="mt-16"></div>
  </v-container>
</template>

<script>
export default {
  name: "HomePage",
  data: () => ({
    gDriveAuthenticated: null
  }),
  methods: {
    onDriveLoginClick: function() {
      if (!this.gDriveAuthenticated) {
        console.log("on login click called");
        this.$gapi.getGapiClient().then(gapi => {
          gapi.auth2.getAuthInstance().signIn();
        });
      }
    },
    onDriveLogoutClick: function() {
      this.$gapi
        .logout()
        .then(() => {
          this.gDriveAuthenticated = false;
          console.log("Drive logout successful");
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.error("Login call failed: %s", err.message);
        });
    },
    // eslint-disable-next-line no-unused-vars
    updateSigninStatus: function(isSignedIn, gapi) {
      console.log("Auth changed: " + isSignedIn);
      this.gDriveAuthenticated = isSignedIn;
      //if (this.gDriveAuthenticated) listFiles(gapi);
    }
  },
  computed: {},
  mounted() {
    this.$gapi.getGapiClient().then(gapi => {
      this.updateSigninStatus(
        gapi.auth2.getAuthInstance().isSignedIn.get(),
        gapi
      );
      gapi.auth2.getAuthInstance().isSignedIn.listen(value => {
        this.updateSigninStatus(value, gapi);
      });
    });
  }
};

// // eslint-disable-next-line no-unused-vars
// function updateSigninStatus(isSignedIn) {
//   console.log("updateSigninStatus ", isSignedIn);
//   if (isSignedIn) {
//     listFiles();
//   }
// }

// eslint-disable-next-line no-unused-vars
function listFiles(gapi) {
  gapi.client.drive.files
    .list({
      pageSize: 10,
      fields: "nextPageToken, files(id, name)"
    })
    .then(function(response) {
      //appendPre('Files:');
      var files = response.result.files;
      if (files && files.length > 0) {
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          console.log(file.name);
          //appendPre(file.name + ' (' + file.id + ')');
        }
      } else {
        //appendPre('No files found.');
      }
    });
}
</script>
