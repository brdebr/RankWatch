<template>
  <v-card class="teal darken-4 bdrs-3">
    <v-card-title class="green darken-4 elevation-1 pl-4">
      <span class="headline"> {{ edit ? 'Edit' : 'Create' }} map </span>
      <v-spacer />
      <v-btn
        v-if="edit"
        small
        fab
        depressed
        color="red darken-3"
        :loading="form.loading"
        @click="deleteMap"
      >
        <v-icon small>
          mdi-delete
        </v-icon>
      </v-btn>
      <v-btn
        v-if="!edit"
        small
        fab
        depressed
        color="success darken-3"
        class="ml-2"
        :loading="form.loading"
        @click="createMap"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn
        v-else
        fab
        depressed
        small
        color="success darken-3"
        class="ml-2"
        :loading="form.loading"
        @click="updateMap"
      >
        <v-icon small>
          mdi-pencil
        </v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text class="pt-0 card-form">
      <v-form ref="form" v-model="form.valid">
        <v-container class="pb-0 pt-4">
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
                ref="typeSelect"
                v-model="selectedType"
                color="#ecde1a"
                :items="$store.state.maps.types"
                label="Type"
                @change="setTypeName"
              >
                <template v-slot:item="{ item, index }">
                  <div class="map-select-item" :title="item.name">
                    <span class="body-1">
                      {{ item.name }}
                    </span>
                    <img :src="item.imgUrl" :alt="item.name + ' image'" />
                  </div>
                </template>

                <template v-slot:selection="{ item, index }">
                  <div class="map-select-item selected" :title="item.name">
                    <span class="body-1">
                      {{ item.name }}
                    </span>
                    <img :src="item.imgUrl" :alt="item.name + ' image'" />
                  </div>
                </template>
              </v-select>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex class="pb-0 pt-4">
              <map-image-form
                ref="mapPond"
                :map="edit ? map : null"
                @upload="imgUploaded"
              />
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
  props: {
    edit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      form: {
        valid: false,
        nameRules: [
          (v) => !!v || 'Name is required',
          (v) => v.length >= 3 || 'Name have at least 3 characters'
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
      try {
        const response = await this.$axios.$get('/api/map/uploadImg/' + fileId)
        // TODO Handle error
        this.imageFile = response.data.file
        this.map.imgId = response.data.file._id

        if (this.map.name.length <= 0) {
          this.map.name = response.data.file.originalname.replace(
            /\..{3,4}$/,
            ''
          )
        }
      } catch (error) {
        this.$toast('Something went wrong', {
          icon: 'mdi-emoticon-sad-outline'
        })
      }
    },
    async createMap() {
      this.form.loading = true
      this.$emit('mapCreated')
      const response = await this.$axios.$post('/api/map/', this.map)
      if (response) {
        this.form.loading = false
        this.map.name = ''
        this.map.type = ''
        this.selectedType = ''
        this.$refs.form.resetValidation()
        this.$refs.mapPond.$refs.pond.removeFiles()
        this.$emit('mapCreated') // TODO send map from the response
        this.$store.dispatch('maps/fetchMaps')
      }
    },
    async updateMap() {
      this.form.loading = true
      const { imgId, imageFilename, ...aux } = this.map
      if (this.edit) {
        aux.imgId = this.map.imgId
        aux.imageFilename = this.imageFile.originalname
      }
      const response = await this.$axios.put('/api/map/' + this.map._id, aux)
      if (response) {
        this.form.loading = false
        this.$emit('mapUpdated')
      } else {
        this.$toast('Something went wrong', {
          icon: 'mdi-emoticon-sad-outline'
        })
      }
    },
    async deleteMap() {
      await this.$axios.delete('/api/map/' + this.map._id)
      this.$emit('mapDeleted')
    },
    setTypeName(type) {
      this.map.type = type.name
    },
    setMap(map) {
      this.map = { ...map }
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
