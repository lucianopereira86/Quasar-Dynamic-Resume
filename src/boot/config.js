import CONFIG from '../../config'
export default async ({ Vue }) => {
  Vue.prototype.$CONFIG = {
    set: function (language) {
      localStorage.setItem('language', language || 'MY')
      return this.get(language)
    },
    get: function (language) {
      let config = {}
      let lang = language || localStorage.getItem('language')
      for (var key in CONFIG) {
        let mod = key.replace(`${lang}`, '')
        config[mod] = CONFIG[key]
      }
      console.log('config', config)
      return config
    }
  }
}
