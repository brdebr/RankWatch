<template>
  <v-layout justify-center>
    <v-flex xs12 sm11 md10 class="mb-auto">
      <v-card class="blue-grey darken-2">
        <v-card-title class="blue-grey darken-3 headline pl-4 elevation-2">
          Maps
        </v-card-title>
        <v-card-text class="pa-0">
          <maps-list :maps="$store.getters['maps/orderByType']" />
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import MapsList from '~/components/Map/MapList'
export default {
  components: {
    MapsList
  },
  async fetch({ store, params }) {
    await store.dispatch('maps/fetchMaps')
  }
}
</script>
