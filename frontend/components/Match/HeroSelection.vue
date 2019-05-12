<template>
  <v-card light>
    <v-card-title class="elevation-2 mb-1">
      <span class="body-1 font-weight-bold">
        Heroes
      </span>
    </v-card-title>
    <v-card-text class="grey lighten-4 py-4">
      <v-layout justify-center row wrap>
        <v-flex v-for="hero in heroList" :key="hero._id" class="pa-1" shrink>
          <hero-list-item :active="hero.active" :hero="hero" @click="toggleHero(hero)" />
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import HeroListItem from '@/components/Hero/List/HeroListItem'

export default {
  components: {
    HeroListItem
  },
  data() {
    return {
      heroList: JSON.parse(
        JSON.stringify(
          this.$store.getters['heroes/orderByType'].map(el => {
            el.active = false
            return el
          })
        )
      )
    }
  },
  computed: {
    selectedSize() {
      return this.heroList.filter(el => el.active).length
    }
  },
  methods: {
    toggleHero(hero) {
      hero.active = !hero.active
      this.$emit('selectedHero', hero)
    }
  }
}
</script>

<style>
</style>
