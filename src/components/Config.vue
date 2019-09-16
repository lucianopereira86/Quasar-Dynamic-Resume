<template>
  <q-dialog v-model="show" minimized v-if="config">
    <q-layout class="bg-white" style="min-height:50vh">
      <DrawerTitle icon="fas fa-cog" :text="CONFIG.labels.drawer.config" :CONFIG="CONFIG" />
      <div class="row q-pa-md q-mx-lg">
        <q-toggle
          class="text-subtitle2"
          left-label
          v-model="config.general.languages.switch"
          :label="getSwitch(lang)"
        />
        <div class="col-8" v-if="!config.general.languages.switch">
          <span class="text-subtitle2">{{getDefault(lang)}}</span>
          <q-radio v-model="config.general.languages.default" :val="myLang" :label="myLang" />
          <q-radio v-model="config.general.languages.default" val="EN" label="EN" />
        </div>
      </div>
    </q-layout>
  </q-dialog>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import DrawerTitle from './drawer/DrawerTitle'
import GeneralMixins from '../mixins/general.mixins.js'
export default {
  components: {
    DrawerTitle
  },
  data () {
    return {
      show: false,
      lang: 'MY',
      config: null,
      myLang: ''
    }
  },
  mixins: [GeneralMixins],
  computed: {
    ...mapState('General', ['CONFIG'])
  },
  methods: {
    ...mapMutations('General', ['SET_CONFIG', 'SET_LANGUAGE']),
    open () {
      let config = localStorage.getItem('config')
      if (config) { this.config = JSON.parse(config) } else { this.config = this.$CONFIG.get() }
      this.myLang = this.config.general.languages.default
      this.show = true
    },
    close () {
      this.show = false
    }
  }
}
</script>

<style>
</style>
