<template>
  <v-app dark>
    <v-content>
      <v-container fluid>
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
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
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
      otherError: 'An error occurred'
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
