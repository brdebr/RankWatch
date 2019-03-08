<template>

    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <map-card-list-item
          v-for="map in maps"
          :key="map.id"
          :map="map"
        />
        <new-map-item />
      </v-layout>
    </v-container>

</template>

<script>
import NewMapItem from '~/components/Map/List/NewMapItem'
import MapCardListItem from '~/components/Map/List/MapCardListItem'

export default {
  components: {
    NewMapItem,
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
