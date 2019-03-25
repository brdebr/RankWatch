<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <map-card-list-item
        v-for="map in maps"
        :key="map.id"
        :map="map"
      />
      <map-new-item v-if="$auth.loggedIn" />
    </v-layout>
  </v-container>
</template>

<script>
import MapNewItem from '~/components/Map/List/MapNewItem'
import MapCardListItem from '~/components/Map/List/MapCardListItem'

export default {
  components: {
    MapNewItem,
    MapCardListItem
  },
  props: {
    maps: {
      type: Array,
      default: () => []
    }
  }
}
</script>
