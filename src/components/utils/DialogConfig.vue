<template>
  <q-dialog v-model="show">
    <q-layout class="bg-white dialog-layout">
      <DrawerTitle icon="fas fa-cog" :text="title" :CONFIG="CONFIG" />
      <div class="text-center q-pa-sm">
        <LanguageSwitch
          v-if="!hideLanguages"
          :CONFIG="CONFIG"
          :MY="{ click: () => lang = 'MY', select: lang === 'MY' }"
          :EN="{ click: () => lang = 'EN', select: lang === 'EN' }"
        />
      </div>
      <slot :lang="lang" :model="model"></slot>
      <q-footer class="shadow-2">
        <q-toolbar class="bg-white">
          <q-space />
          <q-btn label="Close" @click="close()" class="text-black" />
          <q-btn label="Save" @click="close(true)" class="q-ml-lg" color="primary" />
        </q-toolbar>
      </q-footer>
    </q-layout>
  </q-dialog>
</template>

<script>
import DrawerTitle from '../drawer/DrawerTitle'
import LanguageSwitch from './LanguageSwitch'
export default {
  name: 'DialogConfig',
  props: {
    CONFIG: Object,
    model: Object,
    title: String,
    save: Function,
    hideLanguages: Boolean
  },
  components: {
    DrawerTitle,
    LanguageSwitch
  },
  data () {
    return {
      show: false,
      lang: 'MY'
    }
  },
  methods: {
    open () {
      this.show = true
    },
    close (isSave) {
      this.show = false
      if (isSave) { this.save(this.model) }
    }
  }
}
</script>

<style scoped>
.dialog-layout {
  min-width: 50vw;
  min-height: 20vh !important;
  max-height: 90vh !important;
  overflow-y: hidden;
}
</style>
