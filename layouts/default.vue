<template>
  <v-app dark>
    <TheToolbar />
    <TheDrawer
      :items="drawer.items"
    />
    <v-content class="grey lighten-3">
      <v-container fill-height>
        <nuxt />
      </v-container>
    </v-content>
    <TheFooter />
  </v-app>
</template>
<script>
import TheToolbar from '~/layouts/partials/TheToolbar'
import TheDrawer from '~/layouts/partials/TheDrawer'
import TheFooter from '~/layouts/partials/TheFooter'

export default {
  components: {
    TheToolbar,
    TheDrawer,
    TheFooter
  },
  data() {
    return {
      drawer: {
        items: this.$store.state.layout.drawer.items
      }
    }
  }
}
</script>
