import Vue from 'vue'
import VuetifyToast from 'vuetify-toast-snackbar'

Vue.use(VuetifyToast, {
  x: 'right', // default
  y: 'top', // default
  color: 'secondary', // default
  icon: 'info',
  timeout: 5000, // default
  dismissable: true, // default
  autoHeight: false, // default
  multiLine: false, // default
  vertical: false, // default
  shorts: {
    success: {
      color: 'light-green'
    }
  },
  property: '$toast' // default
})
