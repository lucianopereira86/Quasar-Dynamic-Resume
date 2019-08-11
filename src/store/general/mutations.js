import Vue from 'vue'
export default {
  SET_LANG: (state, language) => {
    state.LANG = Vue.prototype.$LANG.set(language)
  }
}
