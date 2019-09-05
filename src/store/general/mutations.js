import Vue from 'vue'
export default {
  SET_LANGUAGE: (state, language) => {
    state.CONFIG = Vue.prototype.$CONFIG.set(language)
  },
  SET_CONFIG: (state, CONFIG) => {
    state.CONFIG = CONFIG
  }
}
