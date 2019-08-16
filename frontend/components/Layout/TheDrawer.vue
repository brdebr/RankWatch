<template>
  <v-navigation-drawer
    :mini-variant="$store.state.general.layout.drawerMini"
    :value="$store.state.general.layout.drawer"
    clipped
    class="drawer-border"
    fixed
    app
    @input="(val) => $store.commit('general/setDrawer', val)"
  >
    <v-layout column justify-space-between fill-height>
      <v-list shaped>
        <v-list-item
          v-for="item in $store.getters['general/filterDrawerPrivate']"
          :key="item.to"
          :to="item.to"
          :title="item.title"
          router
          active-class="orange--text text--lighten-1"
          exact
        >
          <v-list-item-icon class="ml-2 mr-auto">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="ml-4">
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-spacer />
      <transition name="flip-x" mode="out-in">
        <div
          :key="$store.state.general.layout.drawerMini"
          :class="
            `${
              $store.state.general.layout.drawerMini ? 'mx-auto' : 'mx-3'
            } mb-3`
          "
        >
          <v-btn
            :icon="$store.state.general.layout.drawerMini"
            :small="$store.state.general.layout.drawerMini"
            :block="!$store.state.general.layout.drawerMini"
            outlined
            @click.stop="$store.commit('general/toggleDrawerMini')"
          >
            <v-icon>
              {{
                $store.state.general.layout.drawerMini
                  ? 'mdi-chevron-right'
                  : 'mdi-chevron-left'
              }}
            </v-icon>
          </v-btn>
        </div>
      </transition>
    </v-layout>
  </v-navigation-drawer>
</template>
<style lang="scss" scoped>
.drawer-border {
  background-color: #394b6e;
  border-right: 2px solid #ff6d00;
}
</style>
