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
        <v-card-title class="elevation-1 secondary">
          <span class="display-1 ml-1">
            RankWatch
          </span>
          <v-spacer />
          <logo :flat="false" :height="64" />
        </v-card-title>
        <v-card-text>
          <p>Web App to manage a history of Overwatch ranked games</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non error assumenda, ducimus saepe vel in minus, possimus quibusdam accusantium sit iure minima temporibus facilis cupiditate id nobis. Officia, cumque quidem!</p>
        </v-card-text>
        <v-card-actions class="overflow-hidden">
          <v-spacer />
          <sign-up-form v-if="!$auth.loggedIn" class="action" />
          <v-btn
            v-else
            class="action"
            depressed
            dark
            color="primary darken-1"
          >
            <span class="mr-2">
              Profile
            </span>
            <v-icon>account_box</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo'
import SignUpForm from '~/components/Auth/SignUpForm'

export default {
  components: {
    Logo,
    SignUpForm
  },
  transition: {
    css: false,
    enter(el, done) {
      const tl = this.$anime.timeline()

      tl
        // Bring page down
        .add({
          targets: el,
          translateY: [-500, 0],
          duration: 500,
          easing: 'easeOutElastic(.4, 1)'
        })
        // Bring title down
        .add({
          targets: el.querySelector('.v-card__title'),
          translateY: [-500, 0],
          duration: 500,
          easing: 'easeOutElastic(.4, 1)'
        })
        // Spin logo
        .add({
          targets: el.querySelector('.v-card__title g#logo'),
          rotateZ: -360,
          duration: 750,
          easing: 'easeOutElastic(.4, 1)'
        })
        // Bring action up (with offset to sync with logo spin)
        .add(
          {
            targets: el.querySelector('.action'),
            translateY: [100, 0],
            duration: 300,
            easing: 'linear'
          },
          '-=800'
        )

      tl.finished.then(done)
    },
    leave(el, done) {
      const tl = this.$anime.timeline()

      tl
        // Bring page down
        .add({
          targets: el,
          translateY: ['0%', '50%'],
          duration: 750,
          easing: 'linear'
        })
        // Fade out page
        .add(
          {
            targets: el,
            opacity: [1, 0],
            duration: 500,
            easing: 'linear'
          },
          0
        )

      tl.finished.then(done)
    }
  }
}
// easing: 'easeOutElastic(.4, 1)',
</script>
