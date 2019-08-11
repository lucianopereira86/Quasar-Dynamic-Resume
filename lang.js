var folders = [
  'labels',
  'home',
  'profile',
  'jobs',
  'coding',
  'awards',
  'education',
  'portfolio'
]
var languages = ['BR', 'EN']
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
