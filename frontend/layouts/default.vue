<template>
  <v-app dark>
    <TheDrawer />
    <TheToolbar app-name="RankWatch" />
    <v-content class="bg-gradient">
      <no-ssr>
        <vue-particles
          class="bg-particles"
          particles-json="/particles-conf.json"
        />
      </no-ssr>
      <v-container class="pb-5" fluid>
        <nuxt />
      </v-container>
    </v-content>
    <TheFooter />
  </v-app>
</template>

<script>
import TheDrawer from '~/components/Layout/TheDrawer'
import TheToolbar from '~/components/Layout/TheToolbar'
import TheFooter from '~/components/Layout/TheFooter'

export default {
  components: {
    TheToolbar,
    TheDrawer,
    TheFooter
  }
}
</script>
<style lang="scss">
.bg-particles {
  position: fixed;
  width: 100%;
  height: 100%;
}
.bg-gradient {
  background: rgba(242, 246, 248, 1);
  background: -moz-linear-gradient(
    top,
    rgba(242, 246, 248, 1) 0%,
    rgba(216, 225, 231, 1) 55%,
    rgba(181, 198, 208, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(242, 246, 248, 1)),
    color-stop(55%, rgba(216, 225, 231, 1)),
    color-stop(100%, rgba(181, 198, 208, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(242, 246, 248, 1) 0%,
    rgba(216, 225, 231, 1) 55%,
    rgba(181, 198, 208, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(242, 246, 248, 1) 0%,
    rgba(216, 225, 231, 1) 55%,
    rgba(181, 198, 208, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(242, 246, 248, 1) 0%,
    rgba(216, 225, 231, 1) 55%,
    rgba(181, 198, 208, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(242, 246, 248, 1) 0%,
    rgba(216, 225, 231, 1) 55%,
    rgba(181, 198, 208, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f2f6f8', endColorstr='#b5c6d0', GradientType=0 );
}
</style>
