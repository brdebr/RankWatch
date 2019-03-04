<template>
  <div>
    <h4>
      List of maps
    </h4>
    <div v-for="map in maps" :key="map.id" style="display:flex">
      <div>
        {{ map.name }}
      </div>
      &nbsp;|&nbsp;
      <div>
        {{ map.type }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    maps: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
</style>
