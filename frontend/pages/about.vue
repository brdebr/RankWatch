<template>
  <v-layout justify-center>
    <v-flex xs12 sm11 md10 class="mb-auto">
      <v-card class="blue-grey darken-2">
        <v-card-title class="blue-grey darken-3 headline elevation-2">
          This is the About Page
        </v-card-title>
        <v-card-text class="pt-5">
          <!-- TODO: Fix this mismatch client/server, wait vuetify update -->
          <no-ssr>
            <v-data-table
              :headers="headers"
              :items="techs"
              light
              hide-default-footer
            >
              <template #item="props">
                <tr>
                  <td class="tech-icon-cell">
                    <v-avatar
                      class="ma-1 mr-3 avatar-border"
                      size="40"
                      color="light-blue lighten-5"
                      style="border:2px solid #546E7A !important"
                    >
                      <v-icon
                        :color="props.item.color"
                        style="font-size: 18px; margin-left:2px; margin-right:1px"
                      >
                        {{ props.item.icon.join(' ') }}
                      </v-icon>
                    </v-avatar>
                    <span class="body-2">
                      {{ props.item.title }}
                    </span>
                  </td>
                  <td class="text-right font-italic">
                    {{ props.item.description }}
                  </td>
                </tr>
              </template>
            </v-data-table>
          </no-ssr>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  asyncData() {
    return {
      headers: [
        {
          text: 'Technology',
          value: 'name',
          sortable: false,
          align: 'left'
        },
        {
          text: 'Description',
          value: 'description',
          sortable: false,
          align: 'right'
        }
      ],
      techs: [
        {
          title: 'Node.js',
          description: 'The runtime to build everthing using Js',
          icon: ['fab', 'fa-node-js'],
          color: '#4CAF50'
        },
        {
          title: 'Express js',
          description: 'The web framework to build the API',
          icon: ['fas', 'fa-hdd'],
          color: '#808080'
        },
        {
          title: 'MongoDB',
          description: 'The NoSQL database system, using mongoose ORM',
          icon: ['fas', 'fa-database'],
          color: '#960d0d'
        },
        {
          title: 'Nuxt',
          description: 'Used for several develpment conveniences and SSR',
          icon: ['fas', 'fa-server'],
          color: '#004D40'
        },
        {
          title: 'Vue',
          description: 'As the base frontend framework',
          icon: ['fab', 'fa-vuejs'],
          color: '#2E7D32'
        },
        {
          title: 'Anime js',
          description: 'As the the library for complex animations',
          icon: ['fas', 'fa-signature'],
          color: '#F64E4D'
        },
        {
          title: 'Particles js',
          description: 'As the the library for the background particles',
          icon: ['fas', 'fa-braille'],
          color: '#EE8100'
        },
        {
          title: 'RsJx',
          description:
            'As the reactive extensions Library for complex behaviours',
          icon: ['fas', 'fa-prescription'],
          color: '#e20d8d'
        },
        {
          title: 'Vuetify',
          description: 'As the base theme desing and components',
          icon: ['fas', 'fa-palette'],
          color: '#0277BD'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.tech-icon-cell {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  height: 50px !important;
}
</style>
