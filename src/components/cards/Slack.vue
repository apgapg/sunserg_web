<template>
  <v-card outlined>
    <div class="d-flex flex-no-wrap justify-space-between align-center pa-4">
      <div>
        <v-card-title class="text-h6 pa-0 font-weight-regular">Slack</v-card-title>
        <v-card-text class="pa-0 pr-4">Where work happens</v-card-text>
      </div>
      <v-spacer></v-spacer>
      <v-img src="https://image.flaticon.com/icons/svg/2111/2111615.svg" max-width="40" contain></v-img>
    </div>
    <div class="d-flex justify-center my-2">
      <v-btn text color="blue" class :href="parsedUrl">+ Connect</v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Slack",
  data: () => ({
    userScope: "search:read",
    state: "tbd",
    redirectUriDebug: "http://localhost:8080/",
    redirectUriProd: "http://app.sunserg.com/",
    clientid: "1273155809360.1273156841728",
    url: "https://slack.com/oauth/v2/authorize"
  }),
  computed: {
    parsedUrl: function() {
      return `${this.url}?user_scope=${this.userScope}&client_id=${this.clientid}&state=${this.state}&redirect_uri=${(process.env.NODE_ENV == 'production')?this.redirectUriProd:this.redirectUriDebug}`;
    }
  }
};
</script>

<style>
</style>