<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      clipped
      fixed
      app
    >
      <v-layout column justify-space-between fill-height>
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-spacer />
        <v-list>
          <v-list-item @click.stop="miniVariant = !miniVariant">
            <v-list-item-action>
              <v-icon
                >mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon
              >
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-layout>
    </v-navigation-drawer>
    <v-app-bar clipped-left app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <nuxt-link
          exact
          to="/"
          tag="div"
          class="d-flex align-center"
          style="cursor:pointer"
        >
          <span class="mr-4">
            {{ title }}
          </span>
          <v-btn v-if="envMode === 'development'" class="text-uppercase">
            [| {{ $vuetify.breakpoint.name }} |]
          </v-btn>
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
const envMode = process.env.NODE_ENV
export default {
  data() {
    return {
      envMode,
      clipped: false,
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
