<template>
  <v-container>
    <Intro />
    <div class="text-h6 font-weight-regular text-center mb-2 px-4">Start by connecting your accounts</div>
    <v-row class="justify-center">
      <v-col cols="12" sm="6" md="4" lg="4" xl="3">
        <g-drive />
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="4" xl="3">
        <slack />
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
import Intro from "./../components/Intro.vue";
import GDrive from "./../components/cards/GDrive.vue";
import Slack from "./../components/cards/Slack.vue";

export default {
  name: "Home",
  components: {
    Intro,
    GDrive,
    Slack
  }
};
</script>
