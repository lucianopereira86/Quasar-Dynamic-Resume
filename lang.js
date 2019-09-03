// var modules = [
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
// var LANG = {}
// for (let i = 0; i < modules.length; i++) {
//   let folder = modules[i]
//   for (let j = 0; j < languages.length; j++) {
//     let language = languages[j]
//     let attr = folder + language
//     let config = require(`./config.${language}.json`)
//     if (folder === 'dashboard') { LANG[attr] = config.dashboard }
//     else {
//       config.modules.forEach(m => {
//         if(m.name === folder.toUpperCase())
//           LANG[attr] =
//       })
//      }
//   }
// }

// export default LANG

var folders = [
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
var LANG = {}
for (let i = 0; i < folders.length; i++) {
  let folder = folders[i]
  for (let j = 0; j < languages.length; j++) {
    let language = languages[j]
    let attr = folder + language
    LANG[attr] = require(`./config/${folder}/${language}.js`).default
  }
}

export default LANG
