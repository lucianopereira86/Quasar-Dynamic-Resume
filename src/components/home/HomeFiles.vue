<template>
  <q-list class="files-list relative-position">
    <q-item-label header class="text-left">
      <q-icon name="fas fa-paperclip" size="20px" class="q-mb-sm" />
      <span class="text-h6 q-ml-sm">{{CONFIG.home[CONFIG.lang()].files}}</span>
    </q-item-label>
    <q-item
      v-for="(file, index) in CONFIG.home.files"
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
    </q-item>
    <div class="q-ma-sm absolute-right" v-if="isDebug()">
      <q-btn icon="edit" round outline @click="showConfig('HomeFiles')" color="white"></q-btn>
    </div>
    <DialogConfig
      ref="DialogHomeFilesConfig"
      title="FILES"
      :CONFIG="CONFIG"
      :model="model"
      :save="(model) => saveConfig('home', model)"
    >
      <template v-slot:default="slotProps">
        <ConfigHomeFiles :lang="slotProps.lang" :model="slotProps.model" />
      </template>
    </DialogConfig>
  </q-list>
</template>

<script>
import GeneralMixins from '../../mixins/general.mixins'
import DialogConfig from '../utils/DialogConfig'
import ConfigHomeFiles from '../config/home/ConfigHomeFiles'
export default {
  props: {
    CONFIG: Object
  },
  mixins: [GeneralMixins],
  components: {
    DialogConfig,
    ConfigHomeFiles
  },
  data () {
    return {
      showPDF: false,
      pdfURL: '',
      model: null
    }
  },
  mounted () {
    this.model = JSON.parse(JSON.stringify(this.CONFIG.home))
  },
  methods: {
    download (file, index) {
      const self = this
      if (file.url) {
        self.createAnchorToDownloadFile(file.filename, file.url)
      } else {
        let url = file.url || `../statics/files/${file.filename}`
        fetch(url)
          .then(res => res.blob())
          .then(blob => {
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
      anchor.target = '_blank'
      anchor.click()
    }
  }
}
</script>

<style scoped>
.files-list {
  overflow-y: auto;
  max-height: 70vh;
}
</style>
