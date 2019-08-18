<template>
  <v-card class="login-dialog blue-grey darken-2">
    <v-card-title class="blue-grey darken-3 elevation-2 justify-center ">
      <span class="headline">
        Login
      </span>
    </v-card-title>
    <v-card-text class="pt-4 pb-3">
      <v-form>
        <v-text-field
          v-model="form.email"
          validate-on-blur
          prepend-icon="mdi-email mr-1"
          :rules="emailRules"
          name="email"
          label="Email"
          type="text"
        />
        <v-text-field
          id="password"
          v-model="form.password"
          :append-icon="hidePassword ? 'mdi-eye mr-1' : 'mdi-eye-off mr-1'"
          :type="hidePassword ? 'password' : 'text'"
          validate-on-blur
          prepend-icon="mdi-lock mr-1"
          name="password"
          label="Password"
          @click:append="hidePassword = !hidePassword"
        />
      </v-form>
    </v-card-text>
    <v-divider />
    <v-card-actions class="pb-4 pt-3 blue-grey darken-4">
      <v-spacer />
      <v-btn color="warning" outlined @click="$emit('cancel')">
        <span class="mr-2">
          Cancel
        </span>
        <v-icon class="ml-1 pl-0">
          mdi-cancel
        </v-icon>
      </v-btn>
      <v-btn color="success darken-2" outlined class="ml-3 mr-2" @click="login">
        <span class="mr-2">
          Login
        </span>
        <v-icon class="ml-1 pl-0">
          mdi-exit-to-app
        </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      hidePassword: true,
      form: {
        email: '',
        password: ''
      },
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    async google() {
      await this.$auth.loginWith('google').catch((e) => {
        this.$toast('Error', { icon: 'mdi-fingerprint' })
      })
    },
    async login() {
      try {
        await this.$auth
          .loginWith('local', {
            data: {
              email: this.form.email,
              password: this.form.password
            }
          })
          .catch((e) => {
            this.$toast.error('Failed Logging In', {
              icon: 'mdi-error-outlined'
            })
          })
        if (this.$auth.loggedIn) {
          this.$emit('cancel')
          this.$toast.success('Successfully Logged In', {
            icon: 'mdi-check',
            className: 'green accent-4'
          })
          this.$router.push('/profile')
        }
      } catch (e) {
        this.$toast.error('Username or Password wrong', { icon: 'error' })
      }
    }
  }
}
</script>

<style></style>
