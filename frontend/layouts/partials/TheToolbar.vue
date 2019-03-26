<template>
  <v-toolbar
    clipped-left
    clipped-right
    fixed
    height="64"
    class="blue-grey darken-4 bottom-bd"
    app
  >
    <v-toolbar-side-icon
      class="orange--text text--accent-3"
      outline
      @click="$store.commit('layout/toggleDrawer')"
    />

    <v-toolbar-title>
      <nuxt-link
        exact
        to="/"
        tag="div"
        class="d-flex align-center"
        style="cursor:pointer"
      >
        <logo class="ml-2 mr-3" />
        <span class="mr-4">
          {{ title }}
        </span>
        <span 
          v-if="envMode === 'development'" 
          class="text-uppercase"
        >
          [| {{ $vuetify.breakpoint.name }} |]
        </span>
      </nuxt-link>
    </v-toolbar-title>
    <v-spacer />
    <login-form v-if="!$auth.user" />
    <v-btn v-else outline @click="logOut">
      Logout
    </v-btn>
  </v-toolbar>
</template>
<script>
import Logo from '~/components/Logo'
import LoginForm from '~/components/Auth/LoginForm'

const envMode = process.env.NODE_ENV

export default {
  components: {
    Logo,
    LoginForm
  },
  data() {
    return {
      envMode,
      title: 'RankWatch'
    }
  },
  methods: {
    logOut() {
      this.$auth.logout()
      this.$toast('Logged out...', { icon: 'fingerprint' })
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
