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
            <v-btn text color="blue" class>+ Connect</v-btn>
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
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader"
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify"
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify"
      }
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com"
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com"
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify"
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs"
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify"
      }
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer"
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts"
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
      }
    ]
  })
};
</script>
