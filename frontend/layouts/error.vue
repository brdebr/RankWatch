<template>
  <v-layout justify-center>
    <v-flex xs6>
      <v-card>
        <v-card-title class="pb-3 mb-3 elevation-2">
          Error
        </v-card-title>
        <v-card-text>
          <h1 v-if="error.statusCode === 404">
            {{ pageNotFound }}
          </h1>
          <h1 v-else>
            {{ otherError }}
          </h1>
          <v-alert
            v-if="envMode === 'development'"
            border="left"
            colored-border
            color="error"
            elevation="0"
            text
            class="mt-4"
          >
            <template #prepend>
              <v-flex shrink class="ml-2 mr-5">
                <v-icon color="error">
                  mdi mdi-alert
                </v-icon>
              </v-flex>
            </template>
            <div class="title">Code: {{ error.statusCode }}</div>
            <div class="mt-2 body-1">
              {{ error.message }}
            </div>
          </v-alert>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn outlined to="/">
            Back to Home page
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
const envMode = process.env.NODE_ENV
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
      envMode
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
