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
                {{ (item.extension && item.extension.match(/(\.jpg|\.png)$/)) ? 'photo' : 'insert_drive_file' }}
              </v-icon>
            </template>
            <template v-slot:append="{ item, open, active }">
              <div v-if="active" class="d-flex">
                <v-dialog v-if="item.extension && item.extension.match(/(\.jpg|\.png)$/)" max-width="550">
                  <template v-slot:activator="{ on }">
                    <v-btn v-if="item.type == 'file'" color="info darken-3" small v-on="on">
                      <v-icon small>
                        remove_red_eye
                      </v-icon>
                    </v-btn>
                  </template>
                  <v-card class="rb-3" max-height="80%">
                    <v-img v-if="item.path.match(/(uploads(\/|\\).*(heroes|maps)).*$/)" :src="'http://localhost:4000/uploads/'+item.path.match(/(uploads(\/|\\).*(heroes|maps)).*$/)[3]+'/'+item.name" />
                    <v-card-actions class="pr-3 py-3 grey darken-4">
                      <v-spacer />
                      <span>
                        {{ item.name }}
                      </span>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-btn v-if="item.type == 'file'" color="error" small @click="sendDelete(item)">
                  <v-icon small>
                    delete
                  </v-icon>
                </v-btn>
              </div>
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
