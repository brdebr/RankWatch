<template>
  <v-layout
    column
    justify-center
  >
    <v-flex
      xs12
      sm8
      md6
      class="mb-auto"
    >
      <v-card>
        <v-card-title class="headline">
          Maps
        </v-card-title>
        <v-card-text>
          <maps-list :maps="$store.state.maps.list" />
          <map-form />
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import MapsList from '~/components/Map/MapList'
import MapForm from '~/components/Map/MapForm'
export default {
  components: {
    MapsList,
    MapForm
  },
  async fetch({ store, params }) {
    await store.dispatch('maps/fetchMaps')
  }
}
</script>
