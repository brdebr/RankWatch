<template>
  <v-flex class="py-2 px-4" shrink @click="$emit('click')">
    <div
      :class="
        'hero-portrait-wrapper ' +
          hero.type.toLowerCase() +
          (active ? ' active' : '')
      "
    >
      <div
        v-if="hero.imageFilename"
        class="hero-portrait"
        :style="
          'background-image: url(\'http://localhost:4000/uploads/heroes/' +
            hero.imageFilename +
            '\')'
        "
      />
    </div>
    <div :class="'hero-portrait-name ' + (black ? 'black--text' : '')">
      {{ hero.name }}
    </div>
  </v-flex>
</template>

<script>
export default {
  props: {
    hero: {
      type: Object,
      default: () => {}
    },
    black: {
      type: Boolean,
      default: () => {}
    },
    active: {
      type: Boolean,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
.hero-portrait-name {
  font-family: 'Overwatch';
  letter-spacing: 2.2px;
  font-size: 17px;
  text-align: center;
  max-width: 90px;
  min-width: 90px;
  color: white;
  margin-left: -5px;
}
.hero-portrait-wrapper {
  display: inline-block;
  position: relative;
  width: 76px;
  height: 84px;
  border: 4px solid #f6f6f6;

  background-clip: padding-box;
  overflow: hidden;
  border-radius: 7px;
  -webkit-transform: skew(25rad);
  transform: skew(25rad);
  transition: border 0.3s;

  background: #ffffff;
  background: -moz-linear-gradient(top, #ffffff 0%, #a8dbff 100%);
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, #ffffff),
    color-stop(100%, #a8dbff)
  );
  background: -webkit-linear-gradient(top, #ffffff 0%, #a8dbff 100%);
  background: -o-linear-gradient(top, #ffffff 0%, #a8dbff 100%);
  background: -ms-linear-gradient(top, #ffffff 0%, #a8dbff 100%);
  background: linear-gradient(to bottom, #ffffff 0%, #a8dbff 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#a8dbff', GradientType=0 );

  &.attack {
    border: 4px solid #d50000;
  }
  &.tank {
    border: 4px solid #ff6f00;
  }
  &.support {
    border: 4px solid #00c853;
  }
  &.active {
    border: 8px solid #225aad;
    &:hover {
      border: 6px solid #225aad;
      cursor: pointer;
    }
  }
  &:hover {
    border: 4px solid #225aad;
    cursor: pointer;
  }
  .hero-portrait {
    display: block;
    width: calc(100% + 10px);
    height: 100%;
    background-size: auto 100%;
    background-position: 50% 50%;
    position: relative;
    -webkit-transform: skew(-25rad) translateX(-5px);
    transform: skew(-25rad) translateX(-5px);
  }
}
</style>
