<template>
  <v-layout
    justify-center
  >
    <v-flex
      xs12
      sm11
      md10
      class="mb-auto"
    >
      <v-card class="blue-grey darken-2">
        <v-card-title class="blue-grey darken-3 headline elevation-2">
          This is the About Page
        </v-card-title>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="techs"
            hide-actions
            light
          >
            <template
              slot="items"
              slot-scope="props"
            >
              <td class="tech-icon-cell">
                <v-avatar
                  class="ma-1 mr-3 avatar-border"
                  size="40"
                  color="light-blue lighten-5"
                  style="border:2px solid #546E7A !important"
                >
                  <fa
                    :icon="props.item.icon"
                    :color="props.item.color"
                    style="font-size: 18px"
                  />
                </v-avatar>
                <span class="body-2">
                  {{ props.item.title }}
                </span>
              </td>
              <td class="text-xs-right font-italic">
                {{ props.item.description }}
              </td>
            </template>
          </v-data-table>
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
          icon: ['fab', 'node'],
          color: '#4CAF50'
        },
        {
          title: 'Nuxt',
          description: 'Used for several develpment conveniences and SSR',
          icon: ['fas', 'server'],
          color: '#004D40'
        },
        {
          title: 'Vue',
          description: 'As the base frontend framework',
          icon: ['fab', 'vuejs'],
          color: '#2E7D32'
        },
        {
          title: 'Vuetify',
          description: 'As the base theme desing and components',
          icon: ['fas', 'palette'],
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
