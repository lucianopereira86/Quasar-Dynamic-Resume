var modules = [
  'dashboard',
  'labels',
  'home',
  'profile',
  'jobs',
  'coding',
  'awards',
  'education',
  'portfolio'
]
var languages = ['MY', 'EN']
var CONFIG = {}
CONFIG.general = require(`./config/general.js`).default

for (let i = 0; i < modules.length; i++) {
  let mod = modules[i]
  for (let j = 0; j < languages.length; j++) {
    let language = languages[j]
    let attr = mod + language
    let config = require(`./config.${language}.json`)
    if (mod === 'dashboard') {
      CONFIG[attr] = config.dashboard
    } else {
      config.modules.forEach(m => {
        if (m.name === mod.toUpperCase()) {
          let _module = null
          if (m.isArray) {
            _module = getItens(m)
          } else {
            _module = {}
            m.sections.forEach(s => {
              let section = null
              if (s.fields.length > 0) {
                section = {}
                s.fields.forEach(f => {
                  section[f.key] = f.value
                })
              } else {
                section = getItens(s)
              }
              if (s.name) {
                _module[s.name] = section
              } else {
                for (var key in section) {
                  _module[key] = section[key]
                }
              }
            })
          }
          CONFIG[attr] = _module
        }
      })
    }
  }
}
// console.log('CONFIG', CONFIG)

function getItens (s) {
  let section = []
  if (s.itens) {
    s.itens.forEach(i => {
      let field = {}
      i.fields.forEach(f => {
        field[f.key] = f.value
      })
      section.push(field)
    })
  }
  return section
}

export default CONFIG

// var folders = [
//   'dashboard',
//   'labels',
//   'home',
//   'profile',
//   'jobs',
//   'coding',
//   'awards',
//   'education',
//   'portfolio'
// ]
// var languages = ['MY', 'EN']
// var CONFIG = {}
// CONFIG.general = require(`./config/general.js`).default

// for (let i = 0; i < folders.length; i++) {
//   let folder = folders[i]
//   for (let j = 0; j < languages.length; j++) {
//     let language = languages[j]
//     let attr = folder + language
//     CONFIG[attr] = require(`./config/${folder}/${language}.js`).default
//   }
// }
// export default CONFIG
