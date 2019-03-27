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
          <match-list :matches="$store.state.matches.list" />
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import MatchList from '~/components/Match/MatchList'
export default {
  components: {
    MatchList
  },
  middleware: 'auth',
  async fetch({ store, params }) {
    await store.dispatch('matches/fetchMatches')
  },
  transition: {
    css: false,
    enter(el, done) {
      const tl = this.$anime.timeline()

      tl
        // Move page down
        .add({
          targets: el,
          translateY: ['-100%', '0%'],
          opacity: [0, 1],
          easing: 'easeOutElastic(2, 1.8)'
        })
        // Move rows left to right with delay
        .add({
          targets: el.querySelectorAll('.match-list tbody tr'),
          translateX: ['-100%', '0%'],
          easing: 'easeOutElastic(2, 1.5)',
          duration: 750,
          delay: this.$anime.stagger(250, { start: 300 })
        })

      tl.finished.then(done)
    }
  }
}
</script>
