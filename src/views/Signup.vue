<template>
  <v-container fluid>
    <Intro />
    <div class="text-h6 font-weight-regular text-center mb-2 px-4">Register your account</div>
    <div class="d-flex justify-center">
      <v-card v-if="!!error" class="py-3 px-4 mt-2 mx-2" color="#ffebee" elevation="0">
        <div class="d-flex">
          <v-icon color="red" class="mr-2">mdi-alert-outline</v-icon>
          <div class>{{error}}</div>
        </div>
      </v-card>
    </div>

    <v-form ref="form" v-model="valid">
      <v-row class="justify-center my-2">
        <v-col cols="10" lg="3" sm="5">
          <div class="text-overline">NAME</div>
          <v-text-field
            autocomplete="new-password"
            v-model="name"
            required
            label="..."
            hide-details
            single-line
            outlined
            append-icon="mdi-account"
          ></v-text-field>
          <div class="text-overline mt-2">EMAIL</div>
          <v-text-field
            autocomplete="new-password"
            v-model="email"
            :rules="emailRules"
            required
            label="..."
            hide-details
            single-line
            outlined
            append-icon="mdi-at"
          ></v-text-field>
          <div class="text-overline mt-2">PASSWORD</div>
          <v-text-field
            autocomplete="new-password"
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
            <v-btn v-if="!isLoading" :disabled="!valid" color="primary" @click="onSignupClick">
              <v-icon left>mdi-key</v-icon>SUBMIT
            </v-btn>
            <v-progress-circular indeterminate color="blue" size="28" width="2" v-else />
          </div>
          <div class="text-center mt-8">
            <div>
              Already have an account?
              <a href="/login" class="text-decoration-underline">Login</a>
            </div>
          </div>
          <div class="font-weight-light text-body-2 text-center mt-8">
            <div>
              By signing up, I agree to the Sunserg
              <a
                href="/terms#privacy-policy"
                class="text-decoration-underline"
              >Privacy Policy</a>
              and
              <br />
              <a href="/terms" class="text-decoration-underline">Terms of Service</a>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import Intro from "./../components/Intro.vue";
import { getError } from "./../utils/apiUtils";
export default {
  name: "Signup",
  components: {
    Intro,
  },
  data: () => ({
    valid: false,
    show1: false,
    error: null,
    name: "",
    email: "",
    password: "",
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
    },
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),
  computed: {
    isLoading: function () {
      return this.$store.state.user.isLoading;
    },
  },
  methods: {
    onSignupClick: function () {
      this.error = null;
      this.$refs.form.validate();
      const cName = this.name;
      const cEmail = this.email;
      const cPassword = this.password;
      if (this.valid) {
        //this.$router.replace("/");
        this.$store
          .dispatch("user/requestSignup", {
            name: cName,
            email: cEmail,
            password: cPassword,
          })
          .then((resp) => {
            console.log(resp);
            this.$router.replace("/");
          })
          .catch((err) => {
            console.log(err);
            this.error = getError(err);
          });
      }
    },
  },
};
</script>

<style>
</style>