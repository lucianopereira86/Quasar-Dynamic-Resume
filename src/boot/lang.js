import CONFIG from '../../config'
export default async ({ Vue }) => {
  Vue.prototype.$CONFIG = {
    set: function (language) {
      localStorage.setItem('language', language)
      return this.get(language)
    },
    get: function (language) {
      let lang = {}
      language = language || localStorage.getItem('language')
      lang.general = CONFIG[`general`]
      lang.dashboard = CONFIG[`dashboard${language}`]
      lang.labels = CONFIG[`labels${language}`]
      lang.home = CONFIG[`home${language}`]
      lang.profile = CONFIG[`profile${language}`]
      lang.jobs = CONFIG[`jobs${language}`]
      lang.coding = CONFIG[`coding${language}`]
      lang.awards = CONFIG[`awards${language}`]
      lang.education = CONFIG[`education${language}`]
      lang.portfolio = CONFIG[`portfolio${language}`]
      return lang
    }
  }
}
