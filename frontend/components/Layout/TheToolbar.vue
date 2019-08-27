<template>
  <v-app-bar
    class="blue-grey darken-4 bottom-bd the-toolbar"
    clipped-left
    app
    flat
  >
    <v-app-bar-nav-icon
      class="orange--text text--accent-3 ml-1"
      outlined
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
    <login-form v-if="!$auth.loggedIn" />
    <v-btn v-else outlined @click="logOut">
      Logout
    </v-btn>
  </v-app-bar>
</template>

<script>
import Logo from '~/components/Layout/Logo'
import LoginForm from '~/components/Auth/LoginForm'
const envMode = process.env.NODE_ENV

export default {
  components: {
    Logo,
    LoginForm
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
  },
  methods: {
    logOut() {
      this.$auth.logout()
      this.$toast('Logged out...', { icon: 'mdi-fingerprint' })
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
.the-toolbar {
  .v-app-bar__nav-icon {
    height: 38px !important;
    width: 38px !important;
    .v-btn__content {
      .v-icon {
        font-size: 22px;
      }
    }
  }
}
</style>
