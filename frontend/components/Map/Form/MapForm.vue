<template>
  <v-card class="teal darken-4 bdrs-3">
    <v-card-title class="green darken-4 elevation-1 pl-4">
      <span class="title font-weight-light">
        Create map
      </span>
      <v-spacer />
      <v-btn
        icon
        color="success darken-3"
        :loading="form.loading"
        @click="createMap"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text class="pt-0 card-form">
      <v-form
        ref="form"
        v-model="form.valid"
      >
        <v-container class="pb-0">
          <v-layout>
            <v-flex xs9>
              <v-text-field
                v-model="map.name"
                :rules="form.nameRules"
                color="#ecde1a"
                :counter="128"
                label="Name"
                required
              />
            </v-flex>
            <v-flex xs3>
              <v-select
                v-model="selectedType"
                color="#ecde1a"
                :items="$store.state.maps.types"
                label="Type"
                @change="setTypeName"
              >
                <template v-slot:item="{ item, index }">
                  <div
                    class="map-select-item"
                    :title="item.name"
                  >
                    <span class="body-1">
                      {{ item.name }}
                    </span>
                    <img
                      :src="item.imgUrl"
                      :alt="item.name + ' image'"
                    >
                  </div>
                </template>

                <template v-slot:selection="{ item, index }">
                  <div
                    class="map-select-item selected"
                    :title="item.name"
                  >
                    <span class="body-1">
                      {{ item.name }}
                    </span>
                    <img
                      :src="item.imgUrl"
                      :alt="item.name + ' image'"
                    >
                  </div>
                </template>
              </v-select>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex class="pb-0">
              <map-image-form @upload="imgUploaded" />
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import MapImageForm from '~/components/Map/Form/MapImageForm'

export default {
  components: {
    MapImageForm
  },
  data() {
    return {
      form: {
        valid: false,
        nameRules: [
          v => !!v || 'Name is required',
          v => v.length >= 3 || 'Name have at least 3 characters'
        ],
        loading: false
      },
      map: {
        name: '',
        type: '',
        imgId: ''
      },
      selectedType: {},
      imageFile: {}
    }
  },
  methods: {
    async imgUploaded(fileId) {
      const response = await this.$axios.$get('/api/map/uploadImg/' + fileId)
      // TODO Handle error
      this.imageFile = response.data.file
      this.map.imgId = response.data.file._id

      if (this.map.name.length <= 0) {
        this.map.name = response.data.file.originalname.replace(/\..{3,4}$/, '')
      }
    },
    async createMap() {
      this.form.loading = true
      this.$emit('mapCreated')
      const response = await this.$axios.$post('/api/map/', this.map)
      if (response) {
        this.form.loading = false
        this.$emit('mapCreated') // TODO send map from the response
        this.$store.dispatch('maps/fetchMaps')
      }
    },
    setTypeName(type) {
      this.map.type = type.name
    }
  }
}
</script>

<style lang="scss">
.map-select-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  img {
    height: 24px;
    width: 24px;
  }
  &.selected {
    padding-left: 3px;
    padding-right: 0px;
    padding-top: 2px;
    img {
      height: 20px;
      width: 20px;
    }
  }
}
.card-form {
  .error--text {
    //#ecde1a
    color: #ef6c00 !important;
    caret-color: #ef6c00 !important;
  }
}
</style>
