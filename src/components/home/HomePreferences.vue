<template>
  <div>
    <q-list class="text-left relative-position">
      <q-item-label header>
        <q-icon name="fas fa-star" size="20px" class="q-mb-sm" />
        <span class="text-h6 q-ml-md">{{CONFIG.home[CONFIG.lang()].preferences}}</span>
      </q-item-label>
      <q-item v-for="(pref, index) in getPrefs()" :key="index">
        <q-item-section avatar>
          <q-avatar>
            <q-img :src="pref.image" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-subtitle1 text-bold">{{pref.name}}</q-item-label>
        </q-item-section>
      </q-item>
      <div class="q-ma-sm absolute-right" v-if="isDebug()">
        <q-btn icon="edit" round outline @click="showConfig('HomePreferences')" color="white"></q-btn>
      </div>
    </q-list>

    <DialogConfig
      ref="DialogHomePreferencesConfig"
      title="PREFERENCES"
      :CONFIG="CONFIG"
      :model="model"
      :save="(model) => saveConfig('home', model)"
    >
      <template v-slot:default="slotProps">
        <ConfigHomePreferences :lang="slotProps.lang" :model="slotProps.model" />
      </template>
    </DialogConfig>
  </div>
</template>

<script>
import DialogConfig from '../utils/DialogConfig'
import ConfigHomePreferences from '../config/home/ConfigHomePreferences'
import GeneralMixins from '../../mixins/general.mixins'
export default {
  name: 'HomePreference',
  props: {
    CONFIG: Object
  },
  mixins: [GeneralMixins],
  components: {
    DialogConfig,
    ConfigHomePreferences
  },
  data () {
    return {
      model: null
    }
  },
  mounted () {
    this.model = JSON.parse(JSON.stringify(this.CONFIG.home))
  },
  methods: {
    getPrefs () {
      let prefs = [...this.CONFIG.home.preferences]
      return prefs.sort((b, a) => b.order - a.order)
    }
  }
}
</script>

<style>
</style>
