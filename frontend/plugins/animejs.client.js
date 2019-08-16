import anime from 'animejs'
import Vue from 'vue'

const AnimeJs = {
  install(Vue, options) {
    Vue.prototype.$anime = anime
  }
}

Vue.use(AnimeJs)
