import Vue from 'vue'
import Vuetify, { VSnackbar, VIcon } from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.orange.darken3,
    accent: colors.orange.accent3,
    secondary: '#394b6e',
    info: colors.blue.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  },
  components: {
    VSnackbar,
    VIcon
  },
  customProperties: true,
  iconfont: 'md',
  minifyTheme: function(css) {
    return process.env.NODE_ENV === 'production'
      ? css.replace(/[\s|\r\n|\r|\n]/g, '')
      : css
  }
})
