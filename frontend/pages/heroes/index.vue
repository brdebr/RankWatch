<template>
  <v-layout
    justify-center
  >
    <v-flex
      xs12
      sm11
      md10
      class="mb-auto"
    >
      <v-card class="blue-grey darken-2">
        <v-card-title class="blue-grey darken-3 headline pl-4 elevation-2">
          Heroes
        </v-card-title>
        <v-card-text class="pa-0">
          <v-container fluid grid-list-lg>
            <v-layout class="px-2" row wrap>
              <hero-list-item v-for="hero in $store.getters['heroes/orderByType']" :key="hero._id" :hero="hero" />
              <new-hero-list-item />
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import HeroListItem from '@/components/Hero/List/HeroListItem'
import NewHeroListItem from '@/components/Hero/List/NewHeroListItem'
export default {
  components: {
    HeroListItem,
    NewHeroListItem
  },
  async fetch({ store, params }) {
    await store.dispatch('heroes/fetchHeroes')
  }
}
</script>
