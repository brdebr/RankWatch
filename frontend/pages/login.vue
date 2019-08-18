<template>
  <v-layout justify-center class="mt-4">
    <v-flex xs12 sm9 md6 class="mb-auto">
      <login-form-card />
    </v-flex>
  </v-layout>
</template>

<script>
import LoginFormCard from '@/components/Auth/LoginFormCard'
export default {
  components: {
    LoginFormCard
  }
}
</script>

<style></style>
