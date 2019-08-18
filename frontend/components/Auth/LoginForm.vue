<template>
  <v-dialog
    v-model="dialog"
    :persistent="loading"
    max-width="600px"
    class="login-dialog"
  >
    <template #activator="{on}">
      <v-btn depressed dark color="light-green darken-3" v-on="on">
        <span class="mr-3">
          Login
        </span>
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </template>
    <login-form-card @cancel="dialog = false" />
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
