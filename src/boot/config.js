import CONFIG from '../../config'
export default async ({ Vue }) => {
  Vue.prototype.$CONFIG = {
    set: function (language) {
      localStorage.setItem('language', language)
      return this.get(language)
    },
    get: function (language) {
      let config = {}
      var lang = language || localStorage.getItem('language')
      config.general = CONFIG[`general`]
      config.dashboard = CONFIG[`dashboard${lang}`]
      config.labels = CONFIG[`labels${lang}`]
      config.home = CONFIG[`home${lang}`]
      config.profile = CONFIG[`profile${lang}`]
      config.jobs = CONFIG[`jobs${lang}`]
      config.coding = CONFIG[`coding${lang}`]
      config.awards = CONFIG[`awards${lang}`]
      config.education = CONFIG[`education${lang}`]
      config.portfolio = CONFIG[`portfolio${lang}`]
      return config
    }
  }
}
