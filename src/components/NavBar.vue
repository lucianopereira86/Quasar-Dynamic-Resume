<template>
  <q-toolbar :style="getStyleToolbar()">
    <div v-if="nav" class="full-width row items-center">
      <div class="col-2 text-left">
        <div v-if="isDebug()">
          <q-btn
            icon="fas fa-cog"
            round
            @click="showConfig('General')"
            class="bg-white text-primary float-left"
          ></q-btn>
        </div>
      </div>
      <q-toolbar-title class="col-8 text-h4 text-center q-pa-sm">
        <span>{{ getTitle() }}</span>
        <div class="text-subtitle1 text-center text-grey-4">
          <cite>"{{ getMessage() }}"</cite>
        </div>
      </q-toolbar-title>
      <div class="col-2 text-right">
        <q-btn icon="edit" round outline @click="showConfig('Nav')" class="float-left"></q-btn>
        <LanguageSwitch
          v-if="CONFIG.general.languages.switch"
          :CONFIG="CONFIG"
          :MY="{ click: () => selectLang(false), select: !isEN }"
          :EN="{ click: () => selectLang(true), select: isEN }"
        />
      </div>
      <DialogConfig
        ref="DialogGeneralConfig"
        title="GENERAL"
        :CONFIG="CONFIG"
        :model="getModel('general')"
        :save="(model) => saveConfig('General', model)"
        :hideLanguages="true"
      >
        <template v-slot:default="slotProps">
          <ConfigGeneral :model="slotProps.model" />
        </template>
      </DialogConfig>
      <DialogConfig
        ref="DialogNavConfig"
        title="NAV BAR"
        :CONFIG="CONFIG"
        :model="getModel('nav')"
        :save="(model) => saveConfig('Nav', model)"
      >
        <template v-slot:default="slotProps">
          <ConfigNav :lang="slotProps.lang" :model="slotProps.model" />
        </template>
      </DialogConfig>
    </div>
  </q-toolbar>
</template>

<script>
import { mapMutations } from 'vuex'
import LanguageSwitch from './utils/LanguageSwitch'
import DialogConfig from './utils/DialogConfig'
import ConfigGeneral from './config/ConfigGeneral'
import ConfigNav from './config/ConfigNav'
import GeneralMixins from '../mixins/general.mixins'
export default {
  props: {
    CONFIG: Object
  },
  components: {
    LanguageSwitch,
    DialogConfig,
    ConfigGeneral,
    ConfigNav
  },
  mixins: [GeneralMixins],
  data () {
    return {
      isEN: false,
      general: null,
      nav: null
    }
  },
  mounted () {
    this.selectLang()
  },
  methods: {
    ...mapMutations('General', ['SET_LANGUAGE']),
    getStyleToolbar () {
      return this.nav ? { color: this.nav.color, backgroundColor: this.nav.bgColor } : {}
    },
    getTitle () {
      return this.nav[this.CONFIG.lang()].title
    },
    getMessage () {
      return this.nav[this.CONFIG.lang()].message
    },
    selectLang (isEN) {
      this.isEN = isEN
      let language = isEN ? 'EN' : 'MY'
      this.SET_LANGUAGE(language)
      console.log('this.CONFIG', this.CONFIG)
      this.general = JSON.parse(JSON.stringify(this.CONFIG.general))
      this.nav = JSON.parse(JSON.stringify(this.CONFIG.nav))
    }
  }
}
</script>

<style>
</style>
