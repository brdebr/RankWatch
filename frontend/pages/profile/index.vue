<template>
  <v-layout justify-center>
    <v-flex xs12 sm11 md10 class="mb-auto">
      <v-card v-if="this.$auth.user" class="blue-grey darken-2">
        <v-card-title class="blue-grey darken-3 headline elevation-2">
          <span>
            Profile
          </span>
          <v-spacer />
          <span>_id: {{ this.$auth.user.user.id }}</span>
        </v-card-title>
        <v-card-text class="pt-4">
          <p class="headline ">
            <span>
              Username:
            </span>
            <span>
              {{ this.$auth.user.user.username }}
            </span>
          </p>
          <p class="headline ">
            <span>
              Email:
            </span>
            <span>
              {{ this.$auth.user.user.email }}
            </span>
          </p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {},
  middleware: 'auth'
}
</script>
