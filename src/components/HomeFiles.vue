<template>
  <q-list style="overflow-y:auto;max-height:70vh">
    <q-item-label header class="text-left">
      <q-icon name="fas fa-paperclip" size="20px" class="q-mb-sm" />
      <span class="text-h6 q-ml-sm">{{LANG.labels.home.files}}</span>
    </q-item-label>
    <q-item
      v-for="(file, index) in files"
      :key="index"
      class="q-mb-lg text-left"
      clickable
      @click.native="download(file, index)"
    >
      <q-item-section avatar>
        <q-avatar>
          <q-icon :name="getIcon(file)" :color="getColorIcon(file)" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>{{file.title}}</q-item-label>
        <q-item-label caption>{{file.filename}}</q-item-label>
      </q-item-section>
      <a
        :id="`id_${index}`"
        style="visibility: hidden"
        :href="file.url"
        target="_blank"
      >{{file.filename}}</a>
    </q-item>
  </q-list>
</template>

<script>
export default {
  props: {
    LANG: Object
  },
  data () {
    return {
      files: [],
      showPDF: false,
      pdfURL: ''
    }
  },
  mounted () {
    this.files = [...this.LANG.home.files]
  },
  methods: {
    getPrefs () {
      let prefs = [...this.LANG.home.preferences]
      return prefs.sort((b, a) => b.order - a.order)
    },
    getIcon (file) {
      let mimeType = this.$mime.lookup(file.filename)
      if (mimeType.includes('image')) return 'fas fa-file-image'
      else if (mimeType.includes('audio')) return 'fas fa-file-audio'
      else if (mimeType.includes('video')) return 'fas fa-file-video'
      else if (mimeType.includes('pdf')) return 'fas fa-file-pdf'
      else if (mimeType.includes('powerpoint')) { return 'fas fa-file-powerpoint' } else if (mimeType.includes('excel')) return 'fas fa-file-excel'
      else return 'fas fa-file-alt'
    },
    getColorIcon (file) {
      let mimeType = this.$mime.lookup(file.filename)
      if (mimeType.includes('image')) return 'primary'
      else if (mimeType.includes('audio')) return 'info'
      else if (mimeType.includes('video')) return 'warning'
      else if (mimeType.includes('pdf')) return 'negative'
      else if (mimeType.includes('powerpoint')) { return 'accent' } else if (mimeType.includes('excel')) return 'positive'
      else return 'grey'
    },
    download (file, index) {
      const self = this
      if (file.url) {
        window.$(`#id_${index}`).prop('href', file.url).prop('download', file.filename)[0].click()
      } else {
        let url = file.url || `../statics/files/${file.filename}`
        fetch(url)
          .then(res => res.blob())
          .then(blob => {
            console.log('blob', blob)
            // let anchor = document.createElement('a')
            // anchor.href = window.URL.createObjectURL(blob)
            // anchor.download = file.filename
            // anchor.click()
            let url = window.URL.createObjectURL(blob)
            self.createAnchorToDownloadFile(file.filename, url)
          })
          .catch(err => {
            console.error('downloadImageFromURL', err)
          })
      }
    },
    createAnchorToDownloadFile (filename, url) {
      let anchor = document.createElement('a')
      anchor.href = url
      anchor.download = filename
      anchor.click()
    }
  }
}
</script>

<style>
</style>
