<template>
  <v-card>
    <v-card-title class="elevation-2">
      <span class="subheading">New Match</span>
    </v-card-title>
    <v-card-text class="pa-0">
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex shrink>
            <v-menu
              :close-on-content-click="false"
              full-width
              max-width="500"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="timestamp"
                  readonly
                  width="500"
                  label="Date"
                  append-icon="event"
                  v-on="on"
                />
              </template>
              <v-date-picker
                v-model="match.timestamp"
                no-title
              />
            </v-menu>
          </v-flex>
          <v-flex shrink>
            <v-menu
              :close-on-content-click="false"
              full-width
              max-width="500"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="match.time"
                  readonly
                  width="500"
                  label="Time"
                  append-icon="schedule"
                  v-on="on"
                />
              </template>
              <v-time-picker v-model="match.time" format="24hr" />
            </v-menu>
          </v-flex>
          <v-spacer />
          <v-flex shrink>
            <v-text-field
              v-if="false"
              v-model="match.sr"
              label="Skill rating"
            />
            <sr-input v-else />
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center>
          <v-flex
            xs12
            sm9
            md4
            xl3
            grow
          >
            <v-card class="bdrs-2 overflow-hidden">
              <transition name="move-x" mode="out-in">
                <v-img
                  :key="mapImg"
                  class="filter-darken"
                  height="200px"
                  :src="mapImg"
                />
              </transition>
              <v-card-text class=" blue-grey darken-3 pt-1 px-3">
                <v-select
                  v-model="selectedMap"
                  cache-items
                  item-text="name"
                  return-object
                  hide-details
                  :items="this.$store.getters['maps/orderByType']"
                />
              </v-card-text>
              <v-card-actions class="blue-grey darken-2">
                <v-text-field label="Blue" hint="Your team match score" class="px-2" color="blue" />
                <div class="mx-2" />
                <v-text-field label="Red" hint="The other team score" class="px-2" color="red" />
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex grow>
            <v-container fill-height class="pa-0">
              <v-layout row wrap>
                <v-flex lg8 class="py-0">
                  <v-textarea
                    v-model="match.comments"
                    outline
                    height="305"
                    hide-details
                    label="Comments"
                  />
                </v-flex>
                <v-flex lg4 class="py-0">
                  <v-textarea
                    v-model="match.tags"
                    outline
                    height="305"
                    hide-details
                    label="Tags"
                  />
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
        <v-layout class="my-3" row>
          <v-flex xs12>
            <hero-selection @selectedHero="selectHero" />
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import SrInput from '@/components/Match/SrInput'
import HeroSelection from '@/components/Match/HeroSelection'
export default {
  components: {
    SrInput,
    HeroSelection
  },
  data() {
    return {
      match: {
        timestamp: new Date().toISOString().substr(0, 10),
        time: this.$moment().format('HH:MM'),
        sr: 2500,
        comments: '',
        tags: ''
      },
      rounds: [
        {
          heroes: []
        }
      ],
      selectedMap: this.$store.getters['maps/orderByType'][0]
    }
  },
  computed: {
    timestamp() {
      return this.$moment(this.match.timestamp).format('DD/MM/YYYY')
    },
    times() {
      return this.$moment(this.match.time).format('HH:MM')
    },
    mapImg() {
      return this.selectedMap
        ? 'http://localhost:4000/uploads/maps/' + this.selectedMap.imageFilename
        : '#'
    }
  },
  methods: {
    selectHero(hero) {
      if (hero.active) {
        const { active, ...selection } = hero
        this.rounds[0].heroes.push(selection)
      } else {
        this.rounds[0].heroes = this.rounds[0].heroes.filter(
          el => el._id !== hero._id
        )
      }
    }
  }
}
</script>

<style lang="scss">
.input-center {
}
</style>
