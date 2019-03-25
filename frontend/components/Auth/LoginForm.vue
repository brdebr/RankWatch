<template>
  <v-dialog
    v-model="dialog"
    :persistent="loading"
    lazy
    max-width="600px"
    class="login-dialog"
  >
    <v-btn
      slot="activator"
      depressed
      dark
      color="light-green darken-3"
    >
      <span class="mr-3">
        Login
      </span>
      <v-icon>exit_to_app</v-icon>
    </v-btn>
    <login-form-card />
  </v-dialog>
</template>
<script>
import LoginFormCard from '@/components/Auth/LoginFormCard'
export default {
  components: {
    LoginFormCard
  },
  data() {
    return {
      dialog: false,
      loading: false
    }
  }
}
</script>
