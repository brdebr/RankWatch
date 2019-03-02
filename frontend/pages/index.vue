<template>
  <v-layout
    column
  >
    <v-flex
      xs12
      sm8
      md6
      class="mb-auto"
    >
      <v-card>
        <v-card-title class="elevation-1 secondary">
          <span class="display-1 ml-1">
            RankWatch
          </span>
          <v-spacer/>
          <logo :flat="false" :height="64"/>
        </v-card-title>
        <v-card-text>
          <p>Web App to manage a history of Overwatch ranked games</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non error assumenda, ducimus saepe vel in minus, possimus quibusdam accusantium sit iure minima temporibus facilis cupiditate id nobis. Officia, cumque quidem!</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            outline
            nuxt
            to="/about"
          >
            About
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: {
    Logo
  },
}
</script>
