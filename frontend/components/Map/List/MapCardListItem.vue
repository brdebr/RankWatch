<template>
  <v-flex
    xs12
    sm6
    md4
    xl3
    grow
  >
    <v-hover>
      <v-card slot-scope="{ hover }" class="rb-3" hover>
        <v-img
          class="filter-darken"
          height="200px"
          :src="'http://localhost:4000/uploads/maps/'+map.imageFilename"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end class="pa-0">
                <span class="title map-item-name">
                  {{ map.name }}
                </span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title class="overflow-hidden px-4">
          <transition
            name="fade-fast" 
            mode="out-in"
          >
            <v-layout v-if="hover" key="actions" align-center class="map-actions" justify-space-between>
              <v-btn
                depressed
                small
                class="ma-0"
                color="blue accent-4"
              >
                <v-icon small>
                  search
                </v-icon>
              </v-btn>
              <v-btn
                depressed
                small
                class="ma-0"
                color="success darken-2"
              >
                <v-icon small>
                  edit
                </v-icon>
              </v-btn>
            </v-layout>
            <v-layout v-else key="type" align-center class="map-actions" justify-end>
              <div class="caption">
                {{ map.type }}
              </div>
              <div class="map-icon ml-2">
                <img :src="'/svgs/map_'+map.type.toLowerCase()+'.svg'" :alt="map.type.toLowerCase()">
              </div>
            </v-layout>
          </transition>
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
  }
}
</script>

<style lang="scss">
.fade-fast-enter-active,
.fade-fast-leave-active {
  transition: all 0.15s ease-out;
}
.fade-fast-enter {
  opacity: 0;
  transform: translateY(40px);
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
    filter: brightness(0.3);
    transition: filter 0.4s;
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
      filter: brightness(1);
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
