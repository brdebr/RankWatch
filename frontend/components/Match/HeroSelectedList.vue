<template>
  <div class="hero-selection-block">
    <div v-if="list[0]" class="hero one" :style="styleBase + list[0].imageFilename + styleEnd + 'border: 2px solid ' + heroTypes[list[0].type] + ';'" />
    <div v-if="list[1]" class="hero two" :style="styleBase + list[1].imageFilename + styleEnd + styleBorder + heroTypes[list[1].type] + ';'" />
    <div v-if="list[2]" class="hero three" :style="styleBase + list[2].imageFilename + styleEnd + styleBorder + heroTypes[list[2].type] + ';'" />
    <div v-if="list[3]" class="hero four" :style="styleBase + list[3].imageFilename + styleEnd + styleBorder + heroTypes[list[3].type] + ';'" />
    <div v-if="list[4]" class="hero five" :style="styleBase + list[4].imageFilename + styleEnd + styleBorder + heroTypes[list[4].type] + ';'" />
    <div v-if="list.length == 0" class="hero no one" />
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      styleBase:
        'background-image: url("' +
        this.$axios.defaults.baseURL +
        'uploads/heroes/',
      styleEnd: '");',
      styleBorder: 'border: 1px solid ',
      heroTypes: {
        Attack: '#d50000',
        Tank: '#ff6f00',
        Support: '#00c853'
      }
    }
  }
}
</script>

<style lang="scss">
.hero-selection-block {
  height: 78px;
  width: 78px;
  position: relative;
  .hero {
    background-size: cover;
    background-color: #ebebeb;
    &.no {
      border: 2px solid black;
    }
    &.one {
      height: 100%;
      width: 100%;
    }
    &.two {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 26px;
      width: 26px;
    }
    &.three {
      position: absolute;
      bottom: 0;
      left: 26px;
      height: 26px;
      width: 26px;
    }
    &.four {
      position: absolute;
      bottom: 0;
      left: 52px;
      height: 26px;
      width: 26px;
    }
    &.five {
      position: absolute;
      bottom: 26px;
      left: 0;
      height: 26px;
      width: 26px;
    }
  }
}
</style>
