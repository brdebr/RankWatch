<template>
  <v-app dark>
    <TheDrawer />
    <TheToolbar app-name="RankWatch" />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <TheFooter />
  </v-app>
</template>

<script>
import TheDrawer from '~/components/Layout/TheDrawer'
import TheToolbar from '~/components/Layout/TheToolbar'
import TheFooter from '~/components/Layout/TheFooter'

export default {
  components: {
    TheToolbar,
    TheDrawer,
    TheFooter
  }
}
</script>
