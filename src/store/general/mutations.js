import Vue from 'vue'
export default {
  SET_CONFIG: (state, language) => {
    state.CONFIG = Vue.prototype.$CONFIG.set(language)
  },
  SET_MODULES: (state, modules) => {
    state.modules = modules
  }
}
