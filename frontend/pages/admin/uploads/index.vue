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
      <v-card color="teal darken-1">
        <v-card-title class="teal darken-2 elevation-2">
          <span class="title ml-2">
            Admin > Uploads
          </span>
        </v-card-title>
        <v-card-text>
          <v-treeview
            :items="items"
            activatable
            item-key="path"
            open-on-click
          >
            <template v-slot:prepend="{ item, open }">
              <v-icon v-if="item.type == 'directory'">
                {{ open ? 'folder_open' : 'folder' }}
              </v-icon>
              <v-icon v-if="item.type == 'file'">
                photo
              </v-icon>
            </template>
            <template v-slot:append="{ item, open, active }">
              <v-btn v-if="item.type == 'file' && active" color="error" small @click="sendDelete(item)">
                <v-icon small>
                  delete
                </v-icon>
              </v-btn>
            </template>
          </v-treeview>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  middleware: 'auth',
  async asyncData({ app, params }) {
    const response = await app.$axios.$get('/api/admin/filestree')
    return {
      items: response.tree.children,
      tree: {},
      open: true
    }
  },
  methods: {
    async sendDelete(item) {
      const resp = await this.$axios.$post('/api/admin/deletefile', {
        path: item.path
      })
      if (resp.file) {
        const response = await this.$axios.$get('/api/admin/filestree')
        this.items = response.tree.children
      }
    }
  }
}
</script>

<style>
</style>
