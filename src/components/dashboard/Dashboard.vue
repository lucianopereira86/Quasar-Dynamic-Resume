<template>
  <q-dialog v-model="show" maximized>
    <q-layout style="height:100%" class="bg-white">
      <DrawerTitle icon="dashboard" text="Dashboard" :LANG="LANG" widthCol1="4%" widthCol2="87%" />
      <div class="row q-pa-md items-center">
        <div class="col-4 offset-4 text-center">
          <q-avatar @click="lang = 'MY'" class="cursor-pointer q-mr-md relative-position">
            <q-img :src="LANG.home.flag.MY" />
            <div class="selected" v-if="lang === 'MY'"></div>
          </q-avatar>
          <q-avatar @click="lang = 'EN'" class="cursor-pointer">
            <q-img :src="LANG.home.flag.EN" />
            <div class="selected" v-if="lang === 'EN'"></div>
          </q-avatar>
        </div>
        <div class="col-4 text-right q-pr-md">
          <q-btn color="primary" label="DOWNLOAD .JSON" @click="download()"></q-btn>
        </div>
      </div>
      <DashboardModules :lang="lang" />
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
    LANG: Object
  },
  components: {
    DrawerTitle,
    DashboardModules
  },
  mixins: [GeneralMixins],
  data () {
    return {
      show: false,
      lang: 'MY'
    }
  },
  computed: {
    ...mapState('General', ['modules'])
  },
  methods: {
    open () {
      this.show = true
    },
    download () {
      let config = {
        dashboard: {
          switch: this.getSwitch(this.lang),
          default: this.getDefault(this.lang)
        },
        modules: this.modules
      }
      var dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(config))
      var a = document.createElement('a')
      a.setAttribute('href', dataStr)
      a.setAttribute('download', 'config.json')
      a.click()
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
