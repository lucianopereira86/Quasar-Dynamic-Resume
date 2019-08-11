import LANG from '../../lang'
export default async ({ Vue }) => {
  Vue.prototype.$LANG = {
    set: function (language) {
      localStorage.setItem('language', language)
      let lang = {}
      lang.labels = LANG[`labels${language}`]
      lang.home = LANG[`home${language}`]
      lang.profile = LANG[`profile${language}`]
      lang.jobs = LANG[`jobs${language}`]
      lang.coding = LANG[`coding${language}`]
      lang.awards = LANG[`awards${language}`]
      lang.education = LANG[`education${language}`]
      lang.portfolio = LANG[`portfolio${language}`]
      return lang
    }
  }
}
