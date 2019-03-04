<template>
  <div>
    <h4>
      Create Map
    </h4>
    <form action="http://localhost/api/maps/" method="post">
      <input type="text" name="name">
      <input type="text" name="type">
    </form>
    <file-pond
      ref="pond"
      name="mapImg"
      label-idle="< Drop your pics here or click me >"
      :allow-replace="true"
      :drop-on-page="true"
      :allow-revert="true"
      :allow-multiple="false"  
      accepted-file-types="image/jpeg, image/png"
      :server="fpConfig.server"
      :files="mapImage"
      @processfile="onUpload"
    />
  </div>
</template>

<script>
// Import Vue FilePond
import vueFilePond from 'vue-filepond'

// Import FilePond styles
// import 'filepond/dist/filepond.min.css';

// Import FilePond plugins
// Please note that you need to install these plugins separately

// Import image preview plugin styles
// import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

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
      mapImage: [],
      uploaded: false,
      fpConfig: {
        server: {
          process: {
            url:
              'http://localhost:4000/api/map/5c7d6dc61872b68244730e90/uploadImg',
            method: 'POST',
            withCredentials: false,
            headers: {},
            timeout: 7000,
            onload: null,
            onerror: null,
            ondata: null
          }
        }
      }
    }
  },
  methods: {
    onUpload() {
      this.uploaded = true
    }
  }
}
</script>

<style>
</style>
