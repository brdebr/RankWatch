<template>
  <v-layout justify-center>
    <v-flex xs12 sm11 md10 class="mb-auto pt-5">
      <v-card color="indigo">
        <v-card-title class="indigo darken-1 elevation-2 pb-3">
          <span class="title ml-2">
            Admin > Uploads folder
          </span>
        </v-card-title>
        <v-card-text class="pt-4 pb-3">
          <v-treeview
            :items="items"
            activatable
            shaped
            item-key="path"
            open-on-click
            color="yellow"
          >
            <template #prepend="{ item, open }">
              <v-icon v-if="item.type == 'directory'">
                {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
              </v-icon>
              <v-icon v-if="item.type == 'file'">
                {{
                  item.extension && item.extension.match(/(\.jpg|\.png)$/)
                    ? 'mdi-photo'
                    : 'mdi-insert-drive-file'
                }}
              </v-icon>
            </template>
            <template #append="{ item, open, active }">
              <div v-if="active" class="d-flex">
                <v-btn
                  v-if="
                    item.type == 'file' &&
                      item.extension &&
                      item.extension.match(/(\.jpg|\.png)$/)
                  "
                  light
                  color="grey lighten-3"
                  class="mr-3"
                  small
                  depressed
                  @click.stop="selectFile(item)"
                >
                  <v-icon small>
                    mdi-eye
                  </v-icon>
                </v-btn>
                <v-btn
                  v-if="item.type == 'file'"
                  color="error"
                  small
                  depressed
                  class="mr-5"
                  @click="sendDelete(item)"
                >
                  <v-icon small>
                    mdi-delete
                  </v-icon>
                </v-btn>
              </div>
            </template>
            <template v-slot:label="{ item, open, active }">
              <span class="body-1">
                {{ item.name }}
                {{ item.children ? ' [ ' + item.children.length + ' ]' : '' }}
              </span>
            </template>
          </v-treeview>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-dialog
      v-model="selected"
      max-width="550"
      eager
      transition="slide-y-transition"
    >
      <v-card v-if="selectedItem" class="bdrs-3" max-height="80%">
        <v-img
          v-if="selectedItem.path.match(/(uploads(\/|\\).*(heroes|maps)).*$/)"
          :src="
            'http://localhost:4000/uploads/' +
              selectedItem.path.match(/(uploads(\/|\\).*(heroes|maps)).*$/)[3] +
              '/' +
              selectedItem.name
          "
        />
        <v-card-actions class="pr-3 py-3 grey darken-4">
          <v-spacer />
          <span>
            {{ selectedItem.name }}
          </span>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  middleware: 'auth',
  watch: {
    selected(newValue, oldValue) {
      if (!newValue) {
        this.selectedItem = {
          path: '',
          name: '',
          size: 0,
          extension: '',
          type: ''
        }
      }
    }
  },
  async asyncData({ app, params }) {
    const response = await app.$axios.$get('/api/admin/filestree')
    return {
      items: response.tree.children,
      tree: {},
      open: true,
      selectedItem: {
        path: '',
        name: '',
        size: 0,
        extension: '',
        type: ''
      },
      selected: false
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
    },
    selectFile(file) {
      this.$set(this, 'selectedItem', { ...file })
      this.selected = true
    }
  }
}
</script>

<style></style>
