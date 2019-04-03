<template>
  <v-card class="blue darken-4 bdrs-3">
    <v-card-title class="indigo darken-4 elevation-1 pl-4">
      <span class="title font-weight-light">
        Create hero
      </span>
      <v-spacer />
      <v-btn 
        icon
        color="success darken-3"
        :loading="form.loading"
        @click="createHero"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text class="pt-0 card-form">
      <v-form ref="form" v-model="form.valid">
        <v-container class="pb-0">
          <v-layout>
            <v-flex
              xs9
            >
              <v-text-field
                v-model="hero.name"
                :rules="form.nameRules"
                color="#ecde1a"
                :counter="128"
                label="Name"
                required
              />
            </v-flex>
            <v-flex
              xs3
            >
              <v-select
                v-model="selectedType"
                color="#ecde1a"
                :items="$store.state.heroes.types"
                label="Type"
                @change="setTypeName"
              >
                <template v-slot:item="{ item, index }">
                  <div class="hero-select-item" :title="item.name">
                    <span class="body-1">
                      {{ item.name }}
                    </span>
                    <img :src="item.imgUrl" :alt="item.name + ' image'">
                  </div>
                </template>
    
                <template v-slot:selection="{ item, index }">
                  <div class="hero-select-item selected" :title="item.name">
                    <span class="body-1">
                      {{ item.name }}
                    </span>
                    <img :src="item.imgUrl" class="ml-3" :alt="item.name + ' image'">
                  </div>
                </template>
              </v-select>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex class="pb-0">
              <hero-image-form ref="pond" @upload="imgUploaded" />
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import HeroImageForm from '~/components/Hero/Form/HeroImageForm'

export default {
  components: {
    HeroImageForm
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
      hero: {
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
      const response = await this.$axios.$get('/api/hero/uploadImg/' + fileId)
      // TODO Handle error
      this.imageFile = response.data.file
      this.hero.imgId = response.data.file._id

      if (this.hero.name.length <= 0) {
        this.hero.name = response.data.file.originalname.replace(
          /\..{3,4}$/,
          ''
        )
        this.hero.name =
          this.hero.name.charAt(0).toUpperCase() + this.hero.name.slice(1)
      }
    },
    async createHero() {
      this.form.loading = true
      this.$emit('heroCreated')
      const response = await this.$axios.$post('/api/hero/', this.hero)
      if (response) {
        this.form.loading = false
        this.hero.name = ''
        this.hero.type = ''
        this.selectedType = ''
        this.$refs.form.resetValidation()
        this.$refs.pond.$refs.pond.removeFiles()

        this.$emit('heroCreated') // TODO send map from the response
        this.$store.dispatch('heroes/fetchHeroes')
      }
    },
    setTypeName(type) {
      this.hero.type = type.name
    }
  }
}
</script>

<style lang="scss">
.hero-select-item {
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
