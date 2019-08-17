<template>
  <v-layout justify-center>
    <v-flex xs12 sm11 md10 class="mb-auto">
      <v-card class="blue-grey darken-2">
        <v-card-title class="elevation-2 blue-grey darken-4 pt-3">
          <span class="ml-1 main-font page-title">
            <span
              v-for="(letter, index) in title"
              :key="letter + index"
              :class="`letter ${letter === ' ' ? 'is-space' : ''}`"
            >
              {{ letter }}
            </span>
          </span>
          <v-spacer />
          <logo :flat="false" :height="60" class="mr-1" />
        </v-card-title>
        <v-card-text class="pt-5">
          <p>Web App to manage a history of Overwatch ranked games</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non error
            assumenda, ducimus saepe vel in minus, possimus quibusdam
            accusantium sit iure minima temporibus facilis cupiditate id nobis.
            Officia, cumque quidem!
          </p>
        </v-card-text>
        <v-divider />
        <v-card-actions class="overflow-hidden blue-grey darken-3">
          <v-spacer />
          <sign-up-form v-if="true" />
          <v-btn
            v-else
            class="action"
            depressed
            dark
            to="/profile"
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
import Logo from '~/components/Layout/Logo'
import SignUpForm from '~/components/Auth/SignUpForm'
export default {
  components: {
    Logo,
    SignUpForm
  },
  data() {
    return {
      title: 'Keep track of your games'
    }
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
        // Bring letters down
        .add({
          targets: el.querySelectorAll('.v-card__title .letter:not(.is-space)'),
          translateY: [-500, 0],
          duration: 300,
          delay: this.$anime.stagger(75),
          easing: 'easeOutElastic(5, 1)'
        })
        // Spin logo
        .add(
          {
            targets: el.querySelector('.v-card__title g#logo'),
            rotateZ: -360,
            duration: 750,
            easing: 'easeOutElastic(.4, 1)'
          },
          '+=50'
        )
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
<style lang="scss">
.letter {
  display: inline-block;
  margin-right: 6px;
  &.is-space {
    width: 7px;
  }
}
</style>
