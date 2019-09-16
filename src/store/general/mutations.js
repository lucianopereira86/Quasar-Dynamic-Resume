import Vue from 'vue'
export default {
  SET_LANGUAGE: (state, language) => {
    state.CONFIG = Vue.prototype.$CONFIG.set(language)
    state.CONFIG.lang = function () {
      return state.CONFIG.general.languages.default
    }
  },
  SET_MODULE: (state, obj) => {
    var key = Object.getOwnPropertyNames(obj)[0]
    state.CONFIG[key] = obj[key]
  }
}
