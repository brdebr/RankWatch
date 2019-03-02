import moment from 'moment'
import Vue from 'vue'

const Moment = {
  install(Vue, options) {
    Vue.prototype.$moment = moment
  }
}

Vue.use(Moment)