<template>
  <v-flex xs12 sm6 md4 xl3 grow>
    <v-hover #default="{ hover }">
      <v-card class="bdrs-3">
        <v-img
          class="filter-darken"
          height="200px"
          :src="
            map.imageFilename
              ? 'http://localhost:4000/uploads/maps/' + map.imageFilename
              : require('@/assets/imgs/utils/blue.png')
          "
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end class="py-0">
                <span class="title map-item-name">
                  {{ map.name }}
                </span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title class="overflow-hidden px-4">
          <v-layout align-center class="map-actions" justify-space-between>
            <transition name="fade-fast" mode="out-in">
              <v-btn
                v-if="hover && $auth.loggedIn"
                depressed
                small
                class="ma-0"
                color="success darken-2"
                @click="editMap"
              >
                <span class="text-capitalize">
                  Edit
                </span>
                <v-icon class="mr-0" right small>
                  mdi-pencil
                </v-icon>
              </v-btn>
            </transition>
            <v-spacer />
            <div class="body-2 mb-1">
              {{ map.type }}
            </div>
            <div class="map-icon mx-2 mb-3">
              <img
                :src="'/svgs/map_' + map.type.toLowerCase() + '.svg'"
                :alt="map.type.toLowerCase()"
              />
            </div>
          </v-layout>
        </v-card-title>
      </v-card>
    </v-hover>
  </v-flex>
</template>

<script>
export default {
  props: {
    map: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    editMap() {
      this.$emit('editMap', this.map)
    }
  }
}
</script>

<style lang="scss">
.fade-fast-enter-active {
  transition: opacity 0.3s ease-out, transform 0.2s ease-out;
}
.fade-fast-leave-active {
  transition: opacity 0.15s ease-out, transform 0.3s ease-out;
}
.fade-fast-enter {
  opacity: 0;
  transform: translateY(-40px);
}
.fade-fast-leave-to {
  transform: translateY(-40px);
  opacity: 0;
}

.map-actions {
  height: 42px;
}

.filter-darken {
  .v-image__image {
    &::after {
      position: relative;
      content: '';
      display: block;
      width: 101%;
      height: 101%;
      margin-top: -1px;
      transition: transform 0.4s;
      transform-origin: bottom;
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
  .map-item-name {
    color: #fff;
    font-size: 16px;
    font-family: 'Overwatch' !important;
    text-decoration: underline;
    letter-spacing: 0.12em !important;
    transition: color 0.2s;
  }
  &:hover {
    .v-image__image {
      &::after {
        transform-origin: bottom;
        transform: scaleY(0);
      }
    }
    .map-item-name {
      color: transparent;
    }
  }
}
.map-icon {
  width: 24px;
  height: 24px;
}
</style>
