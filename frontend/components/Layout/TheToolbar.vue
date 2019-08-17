<template>
  <v-app-bar class="blue-grey darken-4 bottom-bd" clipped-left app flat>
    <v-app-bar-nav-icon
      class="orange--text text--accent-3 ml-1"
      outlined
      small
      @click="$store.commit('general/toggleDrawer')"
    />
    <v-toolbar-title>
      <nuxt-link
        exact
        to="/"
        tag="div"
        class="d-flex align-center"
        style="cursor:pointer"
      >
        <logo class="ml-2 mr-5" />
        <span class="mr-4 main-font toolbar-title">
          {{ appName }}
        </span>
        <v-btn
          v-if="envMode === 'development'"
          class="text-uppercase"
          :style="'visibility:' + (debug ? 'visible' : 'hidden')"
          @click.stop="debug = !debug"
        >
          [| {{ $vuetify.breakpoint.name }} |]
        </v-btn>
      </nuxt-link>
    </v-toolbar-title>
    <v-spacer />
  </v-app-bar>
</template>

<script>
import Logo from '~/components/Layout/Logo'
const envMode = process.env.NODE_ENV

export default {
  components: {
    Logo
  },
  props: {
    appName: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      envMode,
      debug: envMode === 'development'
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
.toolbar-title {
  font-size: 38px;
  letter-spacing: 5px;
  margin-top: 2px;
}
</style>
