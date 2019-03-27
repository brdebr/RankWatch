<template>
  <v-card class="login-dialog blue-grey darken-2">
    <v-card-title class="blue-grey darken-3 justify-center ">
      <span class="headline">
        Login
      </span>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="form.email"
          validate-on-blur
          prepend-icon="email"
          :rules="emailRules"
          name="email"
          label="Email"
          type="text"
        />
        <v-text-field
          id="password"
          v-model="form.password"
          :append-icon="hidePassword ? 'visibility' : 'visibility_off'"
          :type="hidePassword ? 'password' : 'text'"
          validate-on-blur
          prepend-icon="lock"
          name="password"
          label="Password"
          @click:append="hidePassword = !hidePassword"
        />
      </v-form>
    </v-card-text>
    <v-card-actions
      class="pb-4"
    >
      <v-spacer />
      <v-btn
        color="warning"
        flat
          
        outline
        @click="dialog = false"
      >
        <span class="mr-2">
          Cancel
        </span>
        <v-icon class="ml-1 pl-0">
          cancel
        </v-icon>
      </v-btn>
      <v-btn
        color="success darken-2"
        flat
          
        outline
        class="ml-3 mr-2"
        @click="login"
      >
        <span class="mr-2">
          Login
        </span>
        <v-icon class="ml-1 pl-0">
          exit_to_app
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
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    async google() {
      await this.$auth.loginWith('google').catch(e => {
        this.$toast('Error', { icon: 'fingerprint' })
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
          .catch(e => {
            this.$toast.error('Failed Logging In', { icon: 'error_outline' })
          })
        if (this.$auth.loggedIn) {
          this.dialog = false
          this.$toast.success('Successfully Logged In', {
            icon: 'done',
            className: 'green accent-4'
          })
        }
      } catch (e) {
        this.$toast.error('Username or Password wrong', { icon: 'error' })
      }
    }
  }
}
</script>

<style>
</style>
