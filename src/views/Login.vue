<template>
  <v-container>
    <Intro />
    <div class="text-h6 font-weight-regular text-center mb-2 px-4">Sign in to your account</div>
    <v-form ref="form" v-model="valid">
      <v-row class="justify-center my-2">
        <v-col cols="8" lg="3" sm="5">
          <div class="text-overline">EMAIL</div>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            required
            label="..."
            hide-details
            single-line
            outlined
            append-icon="mdi-account"
          ></v-text-field>
          <div class="text-overline mt-2">PASSWORD</div>
          <v-text-field
            v-model="password"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
            required
            label="..."
            single-line
            outlined
            append-icon="mdi-lock"
          ></v-text-field>
          <div class="text-center mt-2">
            <v-btn :disabled="!valid" color="primary" @click="onLoginClick">
              <v-icon left>mdi-key</v-icon>SUBMIT
            </v-btn>
          </div>
          <div class="text-center mt-8">
            <div>
              Don't have an account?
              <a href="/signup" class="text-decoration-underline">Sign Up</a>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import Intro from "./../components/Intro.vue";
export default {
  name: "Login",
  components: {
    Intro
  },
  data: () => ({
    valid: false,
    show1: false,
    password: "",
    email: "",
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match"
    },
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  }),
  methods: {
    onLoginClick: function() {
      this.$refs.form.validate();
      if (this.valid) {
        this.$router.replace("/");
      }
    }
  }
};
</script>

<style>
</style>