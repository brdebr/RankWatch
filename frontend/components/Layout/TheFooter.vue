<template>
  <v-footer
    :app="!$vuetify.breakpoint.xsOnly"
    inset
    height="auto"
    class="blue-grey darken-4"
  >
    <v-layout row class="px-3">
      <v-flex align-self-center class="text-no-wrap mr-2">
        <span class="mr-2">
          Bryan de Oliveira
        </span>
        <span>&copy; 2019</span>
      </v-flex>

      <v-spacer />

      <v-btn rounded outlined small href="https://github.com/brdebr/RankWatch">
        <span class="mx-2 caption hidden-xs-only">
          Source code
        </span>
      </v-btn>
    </v-layout>
  </v-footer>
</template>

<script>
export default {}
</script>

<style></style>
