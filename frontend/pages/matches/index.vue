<template>
  <v-layout
    justify-center
  >
    <v-flex
      xs12
      sm11
      md10
      class="mb-auto"
    >
      <v-card class="blue-grey darken-2">
        <v-card-title class="blue-grey darken-3 headline elevation-2">
          Matches
        </v-card-title>
        <v-card-text>
          <match-list v-if="false" :matches="$store.state.matches.list" />
          <match-form v-else />
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import MatchList from '~/components/Match/MatchList'
import MatchForm from '~/components/Match/MatchForm'
export default {
  components: {
    MatchList,
    MatchForm
  },
  middleware: 'auth',
  async fetch({ store, params }) {
    await store.dispatch('matches/fetchMatches')
    await store.dispatch('heroes/fetchHeroes')
    await store.dispatch('maps/fetchMaps')
  }
}
</script>
