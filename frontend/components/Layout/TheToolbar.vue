<template>
  <v-app-bar class="blue-grey darken-4 bottom-bd" clipped-left app flat>
    <v-app-bar-nav-icon @click="$store.commit('general/toggleDrawer')" />
    <v-toolbar-title>
      <nuxt-link
        exact
        to="/"
        tag="div"
        class="d-flex align-center"
        style="cursor:pointer"
      >
        <span class="mr-4">
          {{ appName }}
        </span>
        <v-btn v-if="envMode === 'development'" class="text-uppercase">
          [| {{ $vuetify.breakpoint.name }} |]
        </v-btn>
      </nuxt-link>
    </v-toolbar-title>
    <v-spacer />
  </v-app-bar>
</template>

<script>
const envMode = process.env.NODE_ENV
export default {
  props: {
    appName: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      envMode
    }
  }
}
</script>

<style lang="scss">
.bottom-bd {
  .v-toolbar__content {
    border-bottom: 3px solid #225aad;
  }
}
</style>
