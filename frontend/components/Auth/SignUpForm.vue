<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template #activator="{ on }">
      <v-btn depressed dark color="primary darken-1 action px-4" v-on="on">
        <span class="mr-2">
          Sign up
        </span>
        <v-icon>mdi-account-plus pl-1</v-icon>
      </v-btn>
    </template>

    <v-card class="main-card">
      <v-card-title class="justify-center pa-3 elevation-2 grey darken-2">
        <span class="headline">
          Sign up
        </span>
      </v-card-title>
      <v-card-text v-if="!loading" class="px-4 py-3">
        <v-form ref="form">
          <v-text-field
            v-model="form.username"
            prepend-icon="mdi-account mr-1"
            name="username"
            counter="150"
            required
            validate-on-blur
            label="Username"
            type="text"
          />
          <v-text-field
            v-model="form.email"
            prepend-icon="mdi-email mr-1"
            hint="You will receive a confirmation email in this address"
            validate-on-blur
            name="email"
            label="Email"
            type="text"
          />
          <v-text-field
            id="password"
            v-model="form.password"
            prepend-icon="mdi-lock mr-1"
            validate-on-blur
            hint="6 characters minimum"
            persistent-hint
            name="password"
            label="Password"
            type="password"
          />
          <v-text-field
            id="password2"
            v-model="form.password2"
            :rules="[(v) => !!v || 'Password can\'t be empty']"
            prepend-icon="mdi-key mr-1"
            validate-on-blur
            hint="Make sure that both matches"
            name="password"
            label="Confirm password"
            type="password"
          />
        </v-form>
      </v-card-text>
      <v-scale-transition mode="out-in">
        <v-card-text v-if="loading">
          <p>Handling your request, please stand by...</p>
          <p>
            <v-progress-linear :indeterminate="true" />
          </p>
        </v-card-text>
      </v-scale-transition>
      <v-divider />
      <v-card-actions v-if="!loading" class="pb-4 pt-3 grey darken-4">
        <v-spacer />
        <v-btn outlined color="warning" @click="dialog = false">
          Cancel
          <v-icon class="ml-2 pl-0">
            mdi-cancel
          </v-icon>
        </v-btn>
        <v-btn
          outlined
          color="success darken-2"
          class="ml-3 mr-2"
          @click="submit"
        >
          <span>
            Sign up
          </span>
          <v-icon class="ml-1 pl-0">
            mdi-check
          </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      loading: false,
      form: {
        username: '',
        email: '',
        password: '',
        password2: ''
      }
    }
  },
  methods: {
    signUp() {
      try {
        this.$axios.post('/api/auth/signup', this.form).then((result) => {
          if (result.status === 201) {
            this.$toast.success('Successfully Signed Up', {
              icon: 'done',
              className: 'green lighten-1'
            })
            this.$auth
              .loginWith('local', {
                data: {
                  email: this.form.email,
                  password: this.form.password
                }
              })
              .then((result) => {
                this.$toast.success('Logged in!', {
                  icon: 'fingerprint',
                  className: 'green lighten-1'
                })
                this.dialog = false
              })
          }
        })
      } catch (e) {
        this.$toast.error('Something went wrong :/', { icon: 'error' })
      }
    },
    submit() {
      if (this.$refs.form.validate()) {
        this.signUp()
      }
    },
    clear() {
      this.$refs.form.reset()
    }
  }
}
</script>
