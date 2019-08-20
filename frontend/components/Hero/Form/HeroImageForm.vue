<template>
  <div>
    <no-ssr>
      <file-pond
        ref="pond"
        name="heroImg"
        label-idle="< Drag&Drop the image or click here >"
        :allow-replace="true"
        :drop-on-page="true"
        :allow-revert="false"
        :allow-multiple="false"
        accepted-file-types="image/jpeg, image/png"
        :server="fpConfig.server"
        :files="heroImage"
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
  data() {
    return {
      heroImage: [],
      heroImageTempId: [],
      uploaded: false,
      fpConfig: {
        server: {
          process: {
            url: 'http://localhost:4000/api/hero/uploadImg',
            method: 'POST',
            withCredentials: false,
            headers: {},
            timeout: 7000,
            onload: this.onload,
            onerror: null,
            ondata: null
          },
          revert: 'http://localhost:4000/api/hero/uploadImg',
          restore: null,
          load: null, // Handle this using Vue
          fetch: null
        }
      }
    }
  },
  methods: {
    onload(fileTempId) {
      this.heroImageTempId = fileTempId
      this.$emit('uploading', fileTempId)
    },
    onUpload() {
      this.uploaded = true
      this.$emit('upload', this.heroImageTempId)
    }
  }
}
</script>

<style></style>
