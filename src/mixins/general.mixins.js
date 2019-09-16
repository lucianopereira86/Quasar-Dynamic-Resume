import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations('General', ['SET_MODULE']),
    isDebug () {
      return process.env.NODE_ENV === 'development'
    },
    showConfig ($module) {
      this.$refs[`Dialog${$module}Config`].open()
    },
    getModel ($module) {
      return JSON.parse(JSON.stringify(this[$module]))
    },
    saveConfig ($module, model, callback) {
      let obj = {}
      let m = JSON.parse(JSON.stringify(model))
      obj[$module.toLowerCase()] = m
      this.SET_MODULE(obj)
      this[$module.toLowerCase()] = m
      if (callback) callback()
    },
    getIcon (file) {
      let mimeType = this.$mime.lookup(file.filename)
      if (mimeType.includes('image')) return 'fas fa-file-image'
      else if (mimeType.includes('audio')) return 'fas fa-file-audio'
      else if (mimeType.includes('video')) return 'fas fa-file-video'
      else if (mimeType.includes('pdf')) return 'fas fa-file-pdf'
      else if (mimeType.includes('powerpoint')) {
        return 'fas fa-file-powerpoint'
      } else if (mimeType.includes('excel')) return 'fas fa-file-excel'
      else return 'fas fa-file-alt'
    },
    getColorIcon (file) {
      let mimeType = this.$mime.lookup(file.filename)
      if (mimeType.includes('image')) return 'primary'
      else if (mimeType.includes('audio')) return 'info'
      else if (mimeType.includes('video')) return 'warning'
      else if (mimeType.includes('pdf')) return 'negative'
      else if (mimeType.includes('powerpoint')) {
        return 'accent'
      } else if (mimeType.includes('excel')) return 'positive'
      else return 'grey'
    }
  }
}
