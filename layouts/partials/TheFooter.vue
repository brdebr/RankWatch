<template>
  <v-footer
    :app="!$vuetify.breakpoint.xsOnly"
    height="auto"
    class="grey darken-2 px-3"
  >
    <v-layout
      row
    >
      <v-flex
        align-self-center
        class="text-no-wrap mr-2"
      >
        <span class="mr-2">
          Bryan de Oliveira
        </span>
        <span>&copy; 2019</span>
      </v-flex>

      <v-spacer />

      <v-btn
        round
        outline
        small
        href="https://github.com/brdebr/RankWatch"
        flat
      >
        <span class="mx-2 body-1 hidden-xs-only">
          Source code
        </span>
      </v-btn>
    </v-layout>
  </v-footer>
</template>

<script>
export default {}
</script>

<style>
</style>
