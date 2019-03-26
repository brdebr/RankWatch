<template>
  <v-dialog
    v-model="dialog"
    persistent
    lazy
    max-width="600px"
    class="login-dialog teeest"
  >
    <v-btn
      slot="activator"
      depressed
      dark
      color="primary darken-1"
    >
      <span class="mr-2">
        Sign up
      </span>
      <v-icon>person_add</v-icon>
    </v-btn>

    <v-card class="login-dialog pa-3">
      <v-card-title class="justify-center pt-1">
        <span class="headline">
          Sign up
        </span>
      </v-card-title>
      <v-card-text v-if="!loading">
        <v-form ref="form">
          <v-text-field
            v-model="form.username"
            prepend-icon="person"
            name="username"
            counter="200"
            required
            validate-on-blur
            label="Username"
            type="text"
          />
          <v-text-field
            v-model="form.email"
            prepend-icon="email"
            hint="You will receive a confirmation email in this address"
            validate-on-blur
            name="email"
            label="Email"
            type="text"
          />
          <v-text-field
            id="password"
            v-model="form.password"
            prepend-icon="lock"
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
            :rules="[v => !!v || 'Password can\'t be empty']"
            prepend-icon="vpn_key"
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
      <v-card-actions
        v-if="!loading"
        class="pb-4"
      >
        <v-spacer />
        <v-btn
          color="warning"
          flat
          outline
          @click="dialog = false"
        >
          Cancel
          <v-icon class="ml-2 pl-0">
            cancel
          </v-icon>
        </v-btn>
        <v-btn
          color="success darken-2"
          flat
          outline
          class="ml-3 mr-2"
          @click="submit"
        >
          <span>
            Sign up
          </span>
          <v-icon class="check-icon">
            check
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
        this.$axios.post('/api/auth/signup', this.form).then(result => {
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
              .then(result => {
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
<style lang="scss" scoped>
.check-icon {
  margin-bottom: 2px;
  margin-left: 8px;
}
</style>
