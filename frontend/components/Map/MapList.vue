<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <map-card-list-item
        v-for="map in maps"
        :key="map.id"
        :map="map"
        @editMap="editMap"
      />
      <map-new-item v-if="$auth.loggedIn" />
    </v-layout>
    <v-dialog v-model="dialogEdit" class="w-100" max-width="800px" eager>
      <v-card>
        <map-form
          ref="mapForm"
          edit
          @mapDeleted="closeModal"
          @mapUpdated="closeModal"
        />
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import MapNewItem from '~/components/Map/List/MapNewItem'
import MapCardListItem from '~/components/Map/List/MapCardListItem'
import MapForm from '~/components/Map/Form/MapForm'

export default {
  components: {
    MapNewItem,
    MapCardListItem,
    MapForm
  },
  props: {
    maps: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      editingMap: {},
      dialogEdit: false
    }
  },
  methods: {
    editMap(map) {
      this.$refs.mapForm.setMap(map)
      this.$refs.mapForm.$refs.typeSelect.selectedItems = this.$store.state.maps.types.filter(
        (el) => el.name === map.type
      )
      this.$refs.mapForm.$refs.mapPond.setImage(map.imageFilename)

      this.dialogEdit = true
    },
    closeModal() {
      this.dialogEdit = false
      this.$store.dispatch('maps/fetchMaps')
    }
  }
}
</script>
