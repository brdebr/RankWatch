<template>
  <v-flex xs12 sm6 md4 xl3 grow>
    <v-hover>
      <v-card class="rb-3 light-green darken-3">
        <v-img
          height="200px"
        >
          <v-container fluid class="pt-4 pb-3">
            <v-layout>
              <v-flex xs12 align-end class="pa-0 text-xs-center">
                <span class="title map-new-item-name">
                  &nbsp;New Map&nbsp;
                </span>
              </v-flex>
            </v-layout>
          </v-container>
          <div class="d-flex not-selectable">
            <v-icon size="140px">
              map
            </v-icon>
          </div>
        </v-img>
        <v-container fill-height fluid class="pa-0">
          <v-layout fill-height>
            <v-flex xs12 align-end class="pa-0 text-xs-center">
              <div class="mx-auto d-flex mb-2" />
            </v-flex>
          </v-layout>
        </v-container>

        <v-card-title class="overflow-hidden px-4">
          <v-layout class="map-actions">
            <v-dialog v-model="formVisible" class="w-100" max-width="800px" lazy>
              <v-btn
                slot="activator"
                block
                outline
                class="ma-0"
                color="orange accent-1"
              >
                <v-icon>
                  add
                </v-icon>
              </v-btn>
              <map-form @mapCreated="closeForm" />
            </v-dialog>
          </v-layout>
        </v-card-title>
      </v-card>
    </v-hover>
  </v-flex>
</template>

<script>
import MapForm from '~/components/Map/Form/MapForm'
export default {
  components: {
    MapForm
  },
  data() {
    return {
      formVisible: false
    }
  },
  methods: {
    closeForm() {
      this.formVisible = false
    }
  }
}
</script>

<style>
.map-new-item-name {
  color: #fff;
  font-size: 30px !important;
  font-family: 'Overwatch' !important;
  text-decoration: underline;
  letter-spacing: 0.11em !important;
}
.not-selectable {
  user-select: none;
}
.w-100 {
  width: 100%;
}
</style>
