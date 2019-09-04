<template>
  <q-dialog v-model="show" maximized>
    <q-layout style="height:100%" class="bg-white">
      <DrawerTitle
        icon="dashboard"
        text="Dashboard"
        :CONFIG="CONFIG"
        widthCol1="4%"
        widthCol2="87%"
        :close="close"
      />
      <div class="row q-pa-md items-center">
        <div class="col-4 offset-4 text-center">
          <q-avatar @click="lang = 'MY'" class="cursor-pointer q-mr-md relative-position">
            <q-img :src="CONFIG.home.flag.MY" />
            <div class="selected" v-if="lang === 'MY'"></div>
          </q-avatar>
          <q-avatar @click="lang = 'EN'" class="cursor-pointer">
            <q-img :src="CONFIG.home.flag.EN" />
            <div class="selected" v-if="lang === 'EN'"></div>
          </q-avatar>
        </div>
        <div class="col-4 text-right">
          <q-btn color="positive" :label="config.dashboard.save" @click="save()" class="q-mr-lg"></q-btn>
          <q-btn color="primary" :label="config.dashboard.download" @click="download()"></q-btn>
        </div>
      </div>
      <DashboardModules :lang="lang" :config="config" />
    </q-layout>
  </q-dialog>
</template>

<script>
import { mapState } from 'vuex'
import DrawerTitle from '../drawer/DrawerTitle'
import DashboardModules from './DashboardModules'
import GeneralMixins from '../../mixins/general.mixins.js'
export default {
  props: {
    CONFIG: Object
  },
  components: {
    DrawerTitle,
    DashboardModules
  },
  mixins: [GeneralMixins],
  data () {
    return {
      show: false,
      lang: 'MY',
      config: {}
    }
  },
  computed: {
    ...mapState('General', ['modules'])
  },
  created () {
    let config = localStorage.getItem('config')
    if (config) this.config = JSON.parse(config)
    else this.config = this.$CONFIG.get()
    console.log('this.config', this.config)
  },
  methods: {
    open () {
      this.show = true
    },
    save () {
      localStorage.setItem('config', JSON.stringify(this.getConfig()))
    },
    download () {
      var dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.getConfig()))
      var a = document.createElement('a')
      a.setAttribute('href', dataStr)
      a.setAttribute('download', 'config.json')
      a.click()
    },
    getConfig () {
      let config = { ...this.$CONFIG.get(this.lang) }
      config.modules = this.modules
      return config
    },
    close () {
      this.SET_CONFIG(this.config)
    }
  }
}
</script>

<style scoped>
.selected {
  position: absolute;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  border: 5px solid limegreen;
}
</style>
