<template>
  <div>
    <no-ssr>
      <file-pond
        ref="pond"
        name="mapImg"
        label-idle="< Drag&Drop the image or click here >"
        :allow-replace="true"
        :drop-on-page="true"
        :allow-revert="false"
        :allow-multiple="false"
        accepted-file-types="image/jpeg, image/png"
        :server="fpConfig.server"
        :files="mapImage"
        @processfile="onUpload"
      />
    </no-ssr>
  </div>
</template>

<script>
// Import Vue FilePond
import vueFilePond from 'vue-filepond'

// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'

// Create component
const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
)

export default {
  components: {
    FilePond
  },
  props: {
    map: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      mapImage: null,
      mapImageTempId: [],
      uploaded: false,
      fpConfig: {
        server: {
          process: {
            url: 'http://localhost:4000/api/map/uploadImg',
            method: 'POST',
            withCredentials: false,
            headers: {},
            timeout: 7000,
            onload: this.onload,
            onerror: null,
            ondata: null
          },
          revert: 'http://localhost:4000/api/map/uploadImg',
          restore: null,
          load: {
            url: 'http://localhost:4000/uploads/maps/',
            method: 'GET',
            withCredentials: false,
            headers: {},
            timeout: 7000,
            onload: null,
            onerror: null,
            ondata: null
          },
          remove: async (source, load, error) => {
            // console.log({ source })
            await this.$axios.delete('/api/map/deleteImg/' + this.map.imgId)
            // error('oh my goodness');
            // console.log(response.data)

            load()
          },
          fetch: null
        }
      }
    }
  },
  methods: {
    onload(fileTempId) {
      this.mapImageTempId = fileTempId
      this.$emit('uploading', fileTempId)
    },
    onUpload() {
      this.uploaded = true
      this.$emit('upload', this.mapImageTempId)
    },
    setImage(id) {
      this.mapImage = [
        {
          source: id,
          options: {
            type: 'local'
          }
        }
      ]
    }
  }
}
</script>

<style>
</style>
